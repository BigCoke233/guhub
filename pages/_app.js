import '../styles/global.css';
import '../styles/textretty.css';

import Head from 'next/head';
import { Footer, Nav, Sidebar } from '/includes';
import { GoTop } from '/components';

import * as React from "react";
import Router from "next/router";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {

  React.useEffect(() => {
    //页面切换动画
    const container = document.getElementById('app');
    var pageFade = function(){
      if(container.classList.contains('fadeout')){
        container.classList.remove('fadeout')
      }else{
        container.classList.add('fadeout')
      }
    }
    Router.events.on('routeChangeStart', pageFade);
    Router.events.on('routeChangeComplete', pageFade);

    //监听滚动，隐藏侧边栏
    window.addEventListener('scroll', function(e){
        const main = document.getElementsByTagName('body')[0];
        const navButton = document.getElementById('menu-icon');

        if(main.classList.contains('menu-open') && window.screen.availWidth>768) {
          e.preventDefault();
          main.classList.remove('menu-open');
          navButton.classList.remove('change')
        }
    })
  }, []);

  return (
    <div id="app">
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Abel&family=Noto+Sans+SC:wght@100;300;400;500;700;900&family=Noto+Serif+SC:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
          <meta http-equiv="X-UA-COMPATIBLE" CONTENT="IE=edge,chrome=1" />
          <link rel="icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <header id="header">
        <NextNProgress color="rgb(71,85,105)"/>
      </header>
      <main id="page" className="min-h-screen">
        <Nav />
        <div className="max-w-3xl mx-auto pt-24 pb-10 px-8 md:px-6">
          <Component {...pageProps} />
        </div>
        <GoTop />
        <Footer />
      </main>
      <Sidebar />
    </div>
  )
}