import React from "react";
import Head from "next/head";
import { LayoutContainer } from  "..";
import Styles from "../../assets/scss/app.scss";
import Animate from "animate.css-react";

const Layout = ({ children, title, subtitle, layout }) => {
  const header = () => {
    if (title || subtitle) {
      return (
        <div className="relative my-5">
          <h1 className="mb-2 text-primary">{title}</h1>
          <p>{subtitle}</p>
        </div>
      );
    }
    return;
  };
  return (
    <React.Fragment>
      <Head>
        <title>{title || "REKORD - Music React Template"}</title>
        <style dangerouslySetInnerHTML={{ __html: Styles }} />
      </Head>
      <LayoutContainer layout={layout}>
        <Animate appear="fadeIn">
          <main id="pageContent">
            {header()}
            {children}
          </main>
        </Animate>
      </LayoutContainer>
    </React.Fragment>
  );
};

export default Layout;
