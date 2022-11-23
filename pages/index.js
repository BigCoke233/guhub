import * as React from 'react';
import Head from 'next/head';
import Parser from "rss-parser";

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

export default function Index(data){

  //启用 tippy
  React.useEffect(() => {
    tippy('[data-tippy-content]:not(#avatar)', {
        placement: 'bottom',
        theme: 'material'
      }
    );
  }, []);

  //获取博客文章
  var post = data.data.items
  let date = new Date(post[0].pubDate).toLocaleDateString('zh-cn').replaceAll('/','-');
  let excerpt = post[0]["contentSnippet"];
  console.log(post[0])

  return(
      <div id="page">
        <Head><title>Eltrac / 一只考拉</title></Head>
        <div id="page-container">

          <section id="latest-post-box" className="mb-10">
            <article id="latest-post" className="bg-white border-2 border-gray-700 p-10"
            style={{boxShadow: '1rem 1rem 0 #555'}}>
              <div id="post-excerpt" className="text-xl md:text-2xl font-semibold">{excerpt}
              <a href={post[0].link} className="bg-gray-700 text-white hover:text-black hover:bg-gray-200 
              px-1 mx-1 transition duration-300">继续阅读</a></div>
              <h3 className="text-lg mt-4 flex justify-between">
                <a className="underline underline-offset-8 transition duration-300 px-1
                hover:no-underline hover:bg-gray-700 hover:text-white" 
                href={post[0].link}>{post[0].title}</a>
                <span className="text-gray-500">{date} / 博客文章</span>
              </h3>
            </article>
          </section>

          <section className="text-3xl text-center my-20 font-semibold">没错，这个考拉又又又又又又又重写个人主页了<br />估计需要几天才能弄好。</section>
        </div> 
      </div>
  )
}

export async function getStaticProps() {
  //获取博客文章
  const parser = new Parser();
  const data = await parser.parseURL("https://blog.guhub.cn/feed/");

  return {
    props: { data: data },
    revalidate: 30 * 60, // 至少 30 分钟後去产生新页面
  }
}