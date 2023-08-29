import React from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import './styles.scss';
import Header from "@app/components/layout/header";
import Footer from "@app/components/layout/footer";
import { ToastContainer } from "react-toastify";
import Loading from "@app/components/elements/loading";

type LayoutProp = {
  children: React.ReactNode
  location: string
}
export default ({ children}: LayoutProp) => (
  <>
    <Loading />
    <Header />
    <main>
      {children}
    </main>
    <Footer />
    <ToastContainer />
  </>
);
