import React, { Component } from "react";
import { useRouter } from "next/router";
// pages/index.js
import Link from "next/link";
import { handleSidebarMenu } from "../helpers/Utils";

const Sidebar = () => {
  const router = useRouter();

  const openSidebarMenu = () => {
    const ele = document.body;
    ele.classList.remove("sidebar-collapse");
  };
  const closeSidebarMenu = () => {
    const ele = document.body;
    ele.classList.add("sidebar-collapse");
  };

  const handleClick = (href) => (e) => {
    e.preventDefault();
    console.log(href);
    router.push(href);
    closeSidebarMenu();
  };
  //   const handleClick = e => {
  //     console.log(e);
  //     // console.log(href);
  //     e.preventDefault();
  //     // router.push(href);
  //   };

  const isActive = (href) => {
    return router.pathname === href ? "active" : "";
  };
  const links = [
    {
      title: "Home",
      icon: "icon-home-1",
      href: "/",
      active: true,
    },
    {
      title: "Albums",
      icon: "icon-windows",
      href: "/albums",
    },
    {
      title: "Videos",
      icon: "icon-video-player-2",
      href: "/videos",
    },
    {
      title: "Events",
      icon: "icon-calendar-6",
      href: "/events",
    },
    {
      title: "Gallery",
      icon: "icon-photo-camera-1",
      href: "/galleries",
    },
    {
      title: "Blog",
      icon: "icon-newspaper",
      href: "/posts",
    },
    {
      title: "Artists",
      icon: "icon-users",
      href: "/artists",
    },
    {
      title: "Podcasts",
      icon: "icon-microphone-1",
      href: "/podcasts",
    },
  ];

  return (
    <aside
      className="main-sidebar fixed offcanvas shadow"
      onMouseEnter={openSidebarMenu}
      onMouseLeave={closeSidebarMenu}
    >
      <div className="sidebar">
        <ul className="sidebar-menu">
          {links.map(({ title, icon, href, active }) => (
            <li key={title}>
              <a
                href={href}
                onClick={handleClick(href)}
                className={isActive(href)}
              >
                <i className={`icon s-24 ${icon}`}></i>
                <span>{title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
