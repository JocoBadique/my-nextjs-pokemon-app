import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children }) => {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/pokemon.png" />
      </Head>
      <Navbar />
      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
