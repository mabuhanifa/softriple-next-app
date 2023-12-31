/* eslint-disable @next/next/no-page-custom-font */
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import store from "@/redux/store/store";
import "@/styles/globals.css";

import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Online Mega Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
