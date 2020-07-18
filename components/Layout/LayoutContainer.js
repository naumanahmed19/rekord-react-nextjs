import { Animated } from "react-animated-css";

const Layout = ({ children, layout }) => {
  let containerClasses = "container-fluid relative";
  let warpperClasses = "p-md-5 r-conainter";
  switch (layout) {
    case "full":
      containerClasses =
        "container-fluid relative p-0";
      warpperClasses = "";
      break;

    default:
      break;
  }

  return (
        <div className="page has-sidebar">
        <div className={containerClasses}>
          <div className={warpperClasses}>{children}</div>
        </div>
        </div>

  );
};

export default Layout;
