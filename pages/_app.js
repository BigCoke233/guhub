import '../styles/global.css';

import Head from 'next/head';
import { Nav, Footer } from '/includes';

import * as React from "react";
import Router from "next/router";
import NextNProgress from "nextjs-progressbar";
import Darkmode from 'darkmode-js';

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

  //启用夜间模式
  const options = {
    bottom: '1em',
    right: '1em',
    time: '0.5s', // default: '0.3s'
    buttonColorDark: 'rgb(34,197,94)',  // default: '#100f2c'
    buttonColorLight: 'rgb(221,58,161)', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '💡', // default: ''
  }
  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  return (
    <div id="container">
      <Head>
          <link rel="icon" href="/favicon.webp" />
          <meta charSet='utf-8' />
      </Head>
      <NextNProgress color="rgb(34,197,94)"/>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}