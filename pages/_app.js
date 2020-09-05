import { PlayListProvider } from "../context/PlaylistContext";
import { NavSidebar, PlayList, NabBar, Search } from "../components";
import NextNProgress from "nextjs-progressbar";
import { PRIMARY_COLOR } from '../config/Config'
import "lightgallery.js/dist/css/lightgallery.css";
import 'node-snackbar/dist/snackbar.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <PlayListProvider>
      <NextNProgress
        color={PRIMARY_COLOR}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <NavSidebar />
      <PlayList />
      <NabBar />
      <Search />
      <Component {...pageProps} />
    </PlayListProvider>
  );
}

export default MyApp;
