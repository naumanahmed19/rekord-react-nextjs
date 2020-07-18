import React, { Component } from "react";
import Router from "next/router";
import Head from "next/head";
// import 'react-bnb-gallery/dist/style.css';
import { Animated } from "react-animated-css";
import { LayoutContainer } from  "..";
import Styles from "../../assets/scss/app.scss";
// @import '../fonts/lineicons.svg';
// @import '../fonts/lineicons.ttf';
// @import '../fonts/lineicons.woff';

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
        <title>{title || "Next.js Starter Project"}</title>
        <style dangerouslySetInnerHTML={{ __html: Styles }} />
      </Head>
      <LayoutContainer layout={layout}>
        <Animated animationIn="fadeIn" isVisible={true}>
          <main id="pageContent">
            {header()}
            {children}
          </main>
        </Animated>
      </LayoutContainer>
    </React.Fragment>
  );
};

export default Layout;
