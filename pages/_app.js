import '../styles/global.css';
import "nprogress/nprogress.css";

import Head from 'next/head';
import { Nav, Footer } from '/includes';

import * as React from "react";
import Router from "next/router";
import NProgress from "nprogress"

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

    //启用 nProgress
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);
    return () => {
        Router.events.off("routeChangeStart", handleRouteStart);
        Router.events.off("routeChangeComplete", handleRouteDone);
        Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <div id="container">
      <Head>
          <title>Eltrac</title>
          <link rel="icon" href="/favicon.webp" />
          <meta charSet='utf-8' />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}