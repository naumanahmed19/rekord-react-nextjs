import React, { Component } from "react";
import Router from "next/router";
import Head from "next/head";
import Styles from "../assets/scss/app.scss";
// import 'react-bnb-gallery/dist/style.css';
import {Animated} from "react-animated-css";
import {LayoutContainer} from '.';
// @import '../fonts/lineicons.svg';
// @import '../fonts/lineicons.ttf';
// @import '../fonts/lineicons.woff';

const Layout = ({children,title,subtitle,layout}) => {

  const header  =  ()=> {
    if (title ||subtitle) {
      return (
        <div className="relative my-5">
          <h1 className="mb-2 text-primary">{title}</h1>
          <p>{subtitle}</p>
        </div>
      );
    }
    return;
  }
 return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title || "Next.js Starter Project"}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          <style dangerouslySetInnerHTML={{ __html: Styles }} />
        </Head>
        <LayoutContainer layout={layout}>
          {header()}
          {children}
        </LayoutContainer>
      </React.Fragment>
    );
};

export default Layout;
