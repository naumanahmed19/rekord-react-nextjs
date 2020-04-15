const Search = () => {


    // const handleListenr = () =>{
    //     document.addEventListener('keyup', function (ev) {
    //         // escape key.
    //         if (ev.keyCode == 27) {
    //             closeSearch();
    //         }
    //     });
    // }

    const handleCloseSearch = e =>{
        e.preventDefault();
        var mainContainer = document.querySelector('main'),
        openCtrl = document.getElementById('btn-searchOverlay'),
        closeCtrl = document.getElementById('btn-searchOverlay-close'),
        searchOverlayContainer = document.querySelector('.searchOverlay'),
        inputSearch = searchOverlayContainer.querySelector('.searchOverlay__input');
        mainContainer.classList.remove('main-wrap--hide');
        searchOverlayContainer.classList.remove('searchOverlay--open');
        inputSearch.blur();
        inputSearch.value = '';
    }

    

  return (
      
    <React.Fragment>
        {/* {handleListenr} */}
      <svg className="d-none" >
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
          onClick={handleCloseSearch}
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
                <div className="card-header transparent b-b">
                  <strong>New Artists</strong>
                </div>
                <ul className="playlist list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="col-10">
                        <figure className="avatar avatar-md float-left  mr-3 mt-1">
                          <img src="assets/img/demo/u6.jpg" alt="" />
                        </figure>
                        <h6>Zoe Foe</h6>
                        <small>5 Albums - 50 Songs</small>
                      </div>
                      <a href="#" className="ml-auto">
                        <i className="icon-more"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="searchOverlay__suggestion">
              <div className="card mb-3">
                <div className="card-header transparent b-b">
                  <strong>Events</strong>
                </div>
                <ul className="playlist list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="d-flex align-items-center ">
                      <div className="col-8 ">
                        <a href="video-single.html">
                          <h6>Battal of Bands</h6>
                        </a>
                        <small className="mt-1">
                          <i className="icon-placeholder-3 mr-1 "></i> London
                          Music Hall
                        </small>
                      </div>
                      <div className="ml-auto">
                        <div className="text-lg-center  bg-primary r-10 p-2 text-white primary-bg">
                          <div className="s-18">24</div>
                          <small>July, 2019</small>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
