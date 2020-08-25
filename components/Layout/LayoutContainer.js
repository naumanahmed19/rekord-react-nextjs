

const Layout = ({ children, layout }) => {
  let containerClasses = "container relative";
  let warpperClasses = "p-md-5 conainter";

  return (
        <div className="page has-sidebar">
        <div className={containerClasses}>
          {children}
        </div>
        </div>

  );
};

export default Layout;
