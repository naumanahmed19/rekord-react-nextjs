import React, { Component, useState, createContext } from "react";

import { AUTO_PLAY, WAVE_COLOR, PRIMARY_COLOR } from "../config/Config";

import { playListTracks } from "../assets/data/data";

import { TrackSnackBar } from "../components";

import { snackbar } from "../helpers/Utils";

export const PlayListContext = createContext();

export class PlayListProvider extends Component {
  state = {
    tracks: playListTracks,
    buttonClass: "icon-play",
    currentTrackIndex: 0,
    isPlaying: false,
    disableNext: false,
    disablePrevious: true,
  };

  componentDidMount() {
    var WaveSurfer = require("wavesurfer.js");
    this.wavesurfer = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#wavesurfer",
      backend: "MediaElement",
      height: 50,
      progressColor: PRIMARY_COLOR,
      waveColor: WAVE_COLOR,
      responsive: false,
      cursorColor: "transparent",
      normalize: true,
      responsive: false,
    });

    this.wavesurfer.on("ready", () => { });

    this.wavesurfer.on("finish", () => this.handleNextTrack());

    //Auto Play
    if (AUTO_PLAY) this.setCurrentTrack(this.state.currentTrackIndex);
    else if (this.state.tracks.length > 0)
      this.wavesurfer.load(this.state.tracks[this.state.currentTrackIndex].url);
  }

  /**
   *  Add Track To Playlist at top
   *  Play Current Track
   */

  handlePlayTrack = async (track) => {
    const trackList = this.state.tracks.filter((t) => t.id != track.id);

    //add check if played from playlist sidebar then dont add track at top..

    if (track == this.getCurrentTrack()) {
      this.wavesurfer.playPause();
      this.togglePlayButtonIcon();
    } else if (this.state.tracks.indexOf(track) == -1) {
      const tracks = [...this.state.tracks, track];
      await this.setState({
        tracks,
      });

      this.setCurrentTrack(tracks.indexOf(track));
    } else {
      this.setCurrentTrack(this.state.tracks.indexOf(track));
    }
  };

  addTrack = (track) => {
    console.log("up");
    let hasTrack;
    //Check if track is already in playlist
    //hasTrack =  this.state.tracks.filter(t => t.id == track.id);
    hasTrack = this.state.tracks.indexOf(track);

    if (hasTrack > 0) return;

    //Add Track to playlist
    const tracks = [...this.state.tracks, track];

    this.setState({
      tracks,
    });

    snackbar("Added to playlist");

    //load only if first track
    if (this.state.tracks.length == 0)
      this.wavesurfer.load(track.url);



    this.disablePrevNextBtn();
  };

  handlePlayAll = (trackList) => {
    let hasTrack;

    let index = this.state.tracks.length;

    const newTrackList = [];
    trackList.forEach((track) => {
      hasTrack = this.state.tracks.indexOf(track);
      if (hasTrack > 0) return;
      newTrackList.push(track);
    });

    const tracks = [...this.state.tracks, ...newTrackList];

    setTimeout(() => {
      this.setState({
        tracks,
      });
      this.handlePlayTrack(trackList[0]);
    }, 500);


    // console.log(this.state.tracks.length);



    this.disablePrevNextBtn();

    snackbar("Playlist Updated");
  };

  deleteTrack = (track) => {

    const tracksList = [...this.state.tracks];
    const tracks = tracksList.filter((t) => t.id !== track.id);
    this.setState({ tracks });
  };

  setCurrentTrack = async (index) => {
    const { tracks } = this.state;

    TrackSnackBar(this.getCurrentTrack());

    if (tracks.indexOf(tracks[index]) === -1) {
      this.wavesurfer.pause();
      this.togglePlayButtonIcon();
      return;
    } //if track does not exist in array;

    await this.setState({
      currentTrackIndex: index,
    });

    this.disablePrevNextBtn();

    let track = tracks[index];
    if (!track.url) return;

    let wave;
    if (track.wave) {
      wave = track.wave;
    }
    await this.wavesurfer.load(track.url, wave);

    if (track.isStream) {
      wave = [0, 0];
      await this.wavesurfer.play();
    }


    try {
      await setTimeout(async () => {
        await this.wavesurfer.play();
        //  }
        this.togglePlayButtonIcon();
      }, 100);
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
      isPlaying: this.wavesurfer.isPlaying(),
    });
  }

  isPlaying = (track) => {
    return (
      this.state.tracks.length > 0 &&
      this.state.tracks[this.state.currentTrackIndex].id === track.id &&
      this.state.tracks[this.state.currentTrackIndex].url === track.url &&
      this.state.isPlaying
    );
  };

  isStream = () => {
    return this.state.stream;
  };

  handlePlayPause = () => {

    this.isPlaying(this.state.tracks[this.state.currentTrackIndex]);
    this.wavesurfer.playPause();
    this.togglePlayButtonIcon();
  };

  handleNextTrack = async () => {
    const { currentTrackIndex, tracks } = this.state;
    this.wavesurfer.pause();
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
    this.wavesurfer.pause();
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
      this.state.tracks.length === 0 || this.state.currentTrackIndex == this.state.tracks.length - 1;
    let disablePrevious = this.state.currentTrackIndex == 0;

    disableNext
    this.setState({
      disableNext,
      disablePrevious,
    });
  };

  render() {
    return (
      <div>
        <PlayListContext.Provider
          value={{
            state: this.state,
            tracks: this.state.tracks,
            handlePlayPause: this.handlePlayPause,
            handlePlayTrack: this.handlePlayTrack,
            handleNextTrack: this.handleNextTrack,
            handlePreviousTrack: this.handlePreviousTrack,
            handleAddToPlayList: this.addTrack,
            handlePlayAll: this.handlePlayAll,
            handleDeleteTrack: this.deleteTrack,
            disableNext: this.state.disableNext,
            disablePrevious: this.state.disablePrevious,
            buttonClass: this.state.buttonClass,
            isStream: this.isStream,
            isPlaying: this.isPlaying,
            currentTrack: this.getCurrentTrack(),
          }}
        >
          {this.props.children}
        </PlayListContext.Provider>
      </div>
    );
  }
}
