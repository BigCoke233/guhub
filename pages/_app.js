import '../styles/global.css';

import Head from 'next/head';
import { Nav, Footer } from '/includes';

import * as React from "react";
import Router from "next/router";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {

  React.useEffect(() => {
    //页面切换动画
    const container = document.getElementById('container');
    var pageFade = function(){
      if(container.classList.contains('fadeout')){
        container.classList.remove('fadeout')
      }else{
        container.classList.add('fadeout')
      }
    }
    Router.events.on('routeChangeStart', pageFade);
    Router.events.on('routeChangeComplete', pageFade);
  }, []);

  return (
    <div id="container">
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet" />
          <meta charSet='utf-8' />
          <link rel="icon" href="public/favicon.png" type="image/x-icon" />
      </Head>
      <NextNProgress color="rgb(71,85,105)"/>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}