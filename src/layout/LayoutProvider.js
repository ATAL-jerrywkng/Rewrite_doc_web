import React from "react";

// layout components
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Content } from "./content/Content";
import { Outlet } from "react-router-dom";

export const LayoutProvider = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};
