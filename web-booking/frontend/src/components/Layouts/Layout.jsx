import React from "react";
import Footer from "../Footer/Footer.jsx"
import Header from "../Headers/Header.jsx"
import Router from "../../router/Router.jsx";

const Layout = () => {
    return <>
    <Header />
    <Router />
    <Footer />
    </>
};

export default Layout;