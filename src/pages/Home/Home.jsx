import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slide from "../../components/Slide/Slide";
import ProductList from "../../components/ProductList/ProductList";

export default function Home() {
  return (
    <>
      <Header />
      <Slide />
      <ProductList />
      <Footer />
    </>
  );
}
