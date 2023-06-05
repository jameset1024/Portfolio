import React from "react";
import Header from "@app/components/layout/header";
import './styles.scss';
import Sidebar from "@app/components/layout/sidebar";
import Footer from "@app/components/layout/footer";

type LayoutProp = {
  children: React.ReactNode
}
export default ({ children }: LayoutProp) => (
  <>
    <Header />
    <main>
      <Sidebar />

      <section>
        {children}
      </section>
    </main>
    <Footer />
  </>
);
