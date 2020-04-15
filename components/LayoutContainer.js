import { Animated } from "react-animated-css";

const Layout = ({ children, layout }) => {
  let containerClasses = "container-fluid relative";
  let warpperClasses = "p-5 r-conainter";
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
    <Animated animationIn="fadeIn" isVisible={true}>
      <main id="pageContent" className="page has-sidebar">
        <div className={containerClasses}>
          <div className={warpperClasses}>{children}</div>
        </div>
      </main>
    </Animated>
  );
};

export default Layout;
