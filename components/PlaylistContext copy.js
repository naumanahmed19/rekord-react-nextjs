import React, { Component, useState, createContext } from "react";

import {AUTO_PLAY} from '../config/Config'

export const PlayListContext = createContext();

export class PlayListProvider extends Component {
  state = {
    tracks: [
      {
        id: 16,
        title: "one",
        url: "https://xvelopers.com/demos/html/record/assets/media/track1.mp3",
        thumbnail:
          "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a6.jpg",
        artist: "Atif Aslam",
        time: "5:03"
      },
      {
        id: 15,
        title: "one",
        url: "https://xvelopers.com/demos/html/record/assets/media/track2.mp3",
        thumbnail:
          "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a7.jpg",
        artist: "Atif Aslam",
        time: "4:03"
      },
      {
        id: 4,
        title: "one",
        url: "https://xvelopers.com/demos/html/record/assets/media/track3.mp3",
        thumbnail:
          "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a5.jpg",
        artist: "Atif Aslam",
        time: "7:03"
      }
    ],
    buttonClass: "icon-play",
    currentTrackIndex: 0,
    isPlaying: false,
    disableNext: false,
    disablePrevious: true
  };

  componentDidMount() {
    var WaveSurfer = require("wavesurfer.js");
    this.wavesurfer = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#wavesurfer",
      backend: "MediaElement",
      height: 50,
      progressColor: "#ff1744",
      waveColor:"#243049",
      responsive: false,
      waveColor: "#EFEFEF",
      cursorColor: "transparent",
      normalize:true,
    });

    this.wavesurfer.on("ready", () => {

    });

    this.wavesurfer.on("finish", () => this.handleNextTrack());
    
    //Auto Play
    if(AUTO_PLAY)
      this.setCurrentTrack(this.state.currentTrackIndex);
    else
      this.wavesurfer.load(this.state.tracks[this.state.currentTrackIndex].url);
  
  }

  /**
   *  Add Track To Playlist at top
   *  Play Current Track
   */

  handlePlayTrack = track => {
    const trackList = this.state.tracks.filter(t => t.id != track.id);
    const tracks = [track, ...trackList];
    this.setState({
      tracks
    });
    this.setCurrentTrack(0);
  };

  addTrack = track => {
    let hasTrack;
    //Check if track is already in playlist
    //hasTrack =  this.state.tracks.filter(t => t.id == track.id);
    hasTrack = this.state.tracks.indexOf(track);
    if (hasTrack > 0) return;

    //Add Track to playlist
    const tracks = [...this.state.tracks, track];
    this.setState({
      tracks
    });

    this.disablePrevNextBtn();
  };

  deleteTrack = track => {
    console.log("here in delte");
    const tracksList = [...this.state.tracks];
    const tracks = tracksList.filter(t => t.id !== track.id);
    this.setState({ tracks });
  };

  setCurrentTrack = async index => {
   
    const { tracks } = this.state;

    if(tracks.indexOf(tracks[index]) ===  -1) {
        this.wavesurfer.pause();
        this.togglePlayButtonIcon();
        return;
    }; //if track does not exist in array;

    await this.setState({
      currentTrackIndex: index
    });

    this.disablePrevNextBtn();

   // await this.wavesurfer.pause();

    let track = tracks[index];
    if(!track.url) return;
    
    await this.wavesurfer.load(track.url);
    
    //await this.wavesurfer.pause();

    try {
      await setTimeout(async () => {
        if (this.wavesurfer.isReady) {
          await this.wavesurfer.playPause();
        }
        this.togglePlayButtonIcon();
      }, 1600);
    } catch (e) {
      console.log(e);
    }
  };

  getCurrentTrack = () => {
    return this.state.tracks[this.state.currentTrackIndex];
  };

  togglePlayButtonIcon() {
    const buttonClass = this.wavesurfer.isPlaying()
      ? "icon-pause"
      : "icon-play";
    this.setState({
      buttonClass,
      isPlaying: this.wavesurfer.isPlaying()
    });
  }

  isPlaying = track => {
    return (
      this.state.tracks[this.state.currentTrackIndex].id === track.id &&
      this.state.isPlaying
    );
  };

  handlePlayPause = () => {
    this.isPlaying(this.state.tracks[this.state.currentTrackIndex]);
    this.wavesurfer.playPause();
    this.togglePlayButtonIcon();
  };

  handleNextTrack = async () => {
    const { currentTrackIndex, tracks } = this.state;
    if (currentTrackIndex <= tracks.length) {
      try {
        await this.setCurrentTrack(currentTrackIndex + 1);
      } catch (e) {
        console.log(e);
      }
    }
  };

  handlePreviousTrack = async () => {
    const { currentTrackIndex } = this.state;
    if (currentTrackIndex > 0) {
      try {
        await this.setCurrentTrack(currentTrackIndex - 1);
      } catch (e) {
        console.log(e);
      }
    }
  };

  disablePrevNextBtn = () => {
    let disableNext =
      this.state.currentTrackIndex == this.state.tracks.length - 1;
    let disablePrevious = this.state.currentTrackIndex == 0;
    this.setState({
      disableNext,
      disablePrevious
    });
  };

  render() {
    return (
      <PlayListContext.Provider
        value={{
          state: this.state,
          tracks: this.state.tracks,
          handlePlayPause: this.handlePlayPause,
          handlePlayTrack: this.handlePlayTrack,
          handleNextTrack: this.handleNextTrack,
          handlePreviousTrack: this.handlePreviousTrack,
          handleAddToPlayList: this.addTrack,
          handleDeleteTrack: this.deleteTrack,
          disableNext: this.state.disableNext,
          disablePrevious: this.state.disablePrevious,
          buttonClass: this.state.buttonClass,
          isPlaying: this.isPlaying,
          currentTrack: this.getCurrentTrack
        }}
      >
        {this.props.children}
      </PlayListContext.Provider>
    );
  }
}
