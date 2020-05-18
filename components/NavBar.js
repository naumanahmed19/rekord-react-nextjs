import { handleSidebarMenu } from "../helpers/Utils.js";
import Player from "./Player";
import { users } from "../assets/data/data";

const NavBar = () => {
  const currentUser = users[0];

  const handleOpenSearch = (e) => {
    e.preventDefault();

    var mainContainer = document.querySelector("main"),
      searchOverlayContainer = document.querySelector(".searchOverlay"),
      inputSearch = searchOverlayContainer.querySelector(
        ".searchOverlay__input"
      );

    console.log(mainContainer);

    // openCtrl = document.getElementById('btn-searchOverlay'),
    // closeCtrl = document.getElementById('btn-searchOverlay-close'),

    //   console.log("gedddee");
    mainContainer.classList.add("main-wrap--hide");
    searchOverlayContainer.classList.add("searchOverlay--open");
    setTimeout(function () {
      inputSearch.focus();
    }, 500);
  };

  // function init() {

  //     initEvents();
  // }

  // function initEvents() {
  //     openCtrl.addEventListener('click', openSearch);
  //     closeCtrl.addEventListener('click', closeSearch);
  //     document.addEventListener('keyup', function (ev) {
  //         // escape key.
  //         if (ev.keyCode == 27) {
  //             closeSearch();
  //         }
  //     });
  // }

  // if ($('.searchOverlay').length > 0) {
  //     init();

  // }
  return (
    <nav className="navbar-wrapper navbar-bottom-fixed shadow">
      <div className="navbar navbar-expand player-header justify-content-between  bd-navbar">
        <div className="d-flex align-items-center">
          <a
            href="#"
            onClick={handleSidebarMenu}
            className="paper-nav-toggle pp-nav-toggle ml-2 mr-2"
          >
            <i></i>
          </a>

          <a className="navbar-brand d-none d-lg-block" href="index.html">
            <div className="d-flex align-items-center s-14 l-s-2">
              <span>RECORD</span>
            </div>
          </a>
        </div>

        <Player />

        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="searchOverlay-wrap">
              <a
                href=" #"
                id="btn-searchOverlay"
                className="nav-link mr-3 btn--searchOverlay"
                onClick={handleOpenSearch}
              >
                <i className="icon icon-search s-24"></i>
              </a>
            </li>

            <li className="dropup custom-dropdown user user-menu ">
              <a href="#" className="nav-link" data-toggle="dropdown">
                <figure className="avatar">
                  <img src={currentUser.avatar} alt="" />
                </figure>
                <i className="icon-more_vert "></i>
              </a>
              <div className="dropdown-menu p-4 dropdown-menu-right">
                <div className="row box justify-content-between my-4">
                  <div className="col text-center">
                    <a className="ajaxifyPage" href="saved.html">
                      <i className="icon icon-save s-24"></i> <span>Saved</span>
                    </a>
                  </div>
                  <div className="col text-center">
                    <a className="ajaxifyPage" href="saved.html">
                      <i className="icon icon-heart s-24"></i>{" "}
                      <span>Favourites</span>
                    </a>
                  </div>
                  <div className="col text-center">
                    <a className="ajaxifyPage" href="profile.html">
                      <i className="icon-user-4  s-24"></i>
                      <div className="pt-1">Profile</div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
