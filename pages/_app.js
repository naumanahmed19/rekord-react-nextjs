import { PlayListProvider } from "../components/PlaylistContext";
import { Sidebar, PlayList, NabBar, Search } from "../components";
import NextNProgress from "nextjs-progressbar";
import {PRIMARY_COLOR} from '../config/Config'
import "lightgallery.js/dist/css/lightgallery.css";

function MyApp({ Component, pageProps }) {
  return (
    <PlayListProvider>
      {/* <NextNProgress
        color={PRIMARY_COLOR}
        startPosition="0.3"
        stopDelayMs="200"
        height="3"
      /> */}
      <Sidebar />
      <PlayList />
      <NabBar />
      <Search />
      <Component {...pageProps} />
    </PlayListProvider>
  );
}

export default MyApp;
