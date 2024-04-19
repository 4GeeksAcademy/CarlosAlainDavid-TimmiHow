import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Consumer } from "./pages/consumer/Consumer";
import { Provider } from "./pages/provider/Provider";
import { Topics } from "./pages/topics/Topics";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import Footer from "./component/footer";

const Layout = () => {

    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Consumer />} path="/consumer" />
                        <Route element={<Provider />} path="/provider" />
                        <Route element={<Topics />} path="/topics/:category" />
                        <Route element={<h1>Not found!</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
