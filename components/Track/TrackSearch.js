import { Component } from "react";
import { tracks } from "../../assets/data/data";
import { TrackList } from "..";

class Search extends Component {
  state = { q: "", tracks: [] };

  // const handleListenr = () =>{
  //     document.addEventListener('keyup', function (ev) {
  //         // escape key.
  //         if (ev.keyCode == 27) {
  //             closeSearch();
  //         }
  //     });
  // }

  handleCloseSearch = (e) => {
    e.preventDefault();
    var mainContainer = document.querySelector("main"),
      openCtrl = document.getElementById("btn-searchOverlay"),
      closeCtrl = document.getElementById("btn-searchOverlay-close"),
      searchOverlayContainer = document.querySelector(".searchOverlay"),
      inputSearch = searchOverlayContainer.querySelector(
        ".searchOverlay__input"
      );
    mainContainer.classList.remove("main-wrap--hide");
    searchOverlayContainer.classList.remove("searchOverlay--open");
    inputSearch.blur();
    inputSearch.value = "";
  };

  handleSearch = (e) => {
    console.log(event.target.value);
    let q = event.target.value.toLowerCase();;
    let tracksList = tracks.filter((track) => (track.title.toLowerCase()).includes(q));
    this.setState({
      tracks: tracksList,
      q,
    });
  };

  componentDidMount = () => {
    let tracksList = [...tracks];
    this.setState({
      tracks: tracksList,
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* {handleListenr} */}
        <svg className="d-none">
          <defs>
            <symbol id="icon-cross" viewBox="0 0 24 24">
              <title>cross</title>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </symbol>
          </defs>
        </svg>
        <div className="searchOverlay page">
          <button
            id="btn-searchOverlay-close"
            className="btn btn--searchOverlay-close"
            aria-label="Close searchOverlay form"
            onClick={this.handleCloseSearch}
          >
            <svg className="icon icon--cross">
              <use xlinkHref="#icon-cross" />
            </svg>
          </button>
          <div className="searchOverlay__inner  searchOverlay__inner--up">
            <form className="searchOverlay__form" action="index.html">
              <input
                className="searchOverlay__input"
                name="searchOverlay"
                type="text"
                placeholder="Search"
                autoComplete="off"
                spellCheck="false"
                onChange={this.handleSearch}
              />
              <span className="searchOverlay__info">
                Hit enter to searchOverlay or ESC to close
              </span>
            </form>
          </div>
          <div className="searchOverlay__inner searchOverlay__inner--down">
            <div className="searchOverlay__related">
              <div className="searchOverlay__suggestion">
                <div className="card mb-3">
                  {this.state.q && (
                    <div>
                      {this.state.tracks.length > 0 ? (
                        <TrackList tracks={this.state.tracks} />
                      ) : (
                        <section class="no-results not-found">
                        <h3 class="text-primary">Nothing Found</h3>
                            <div class="page-content">
                                
                                <p>It seems we can’t find what you’re looking for. Perhaps searching can help.            </p>
                    
                                        </div>
                    </section>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
