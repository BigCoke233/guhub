import * as React from 'react';
import Head from 'next/head';
import Parser from "rss-parser";

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

import { GiSpermWhale, GiCoffeeMug, GiDodging } from 'react-icons/gi'

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
  let excerpt = post[0]["contentSnippet"]

  return(
      <div id="page">
        <style jsx>{`
          #latest-post {
            box-shadow: 0.25rem 0.25rem 0 #555;
            transition: 0.3s
          }
          @media screen and (min-width: 768px){
            #latest-post:hover {
              box-shadow: 1rem 1rem 0 #555;
              transform: translate3D(-0.5rem, -0.5rem, 0)
            }
          }

          #page-container section {
            margin: 2rem 0
          }
          #page-container section:first-child {
            margin-top: 0
          }
          #page-container section:last-child {
            margin-bottom: 0
          }
        `}</style>

        <Head><title>Eltrac / 一只考拉</title></Head>
        <div id="page-container">

          <section id="latest-post-box">
            <a href={post[0].link} target="_blank">
              <article id="latest-post" className="bg-white border-2 border-gray-700 p-6 md:p-10">
                <div id="post-excerpt" className="text-xl md:text-2xl font-semibold">{excerpt}</div>
                <h3 className="text-lg mt-4 flex flex-col md:flex-row md:justify-between">
                  <a className="underline underline-offset-8" 
                  href={post[0].link}>{post[0].title}</a>
                  <span className="text-gray-500">{date} / 博客文章</span>
                </h3>
              </article>
            </a>
          </section>

          <section id="related-links">
            <div className="flex flex-wrap md:flex-nowrap -m-3">
              <Rlink title="咖啡厅" link="https://blog.guhub.cn" subTitle="考拉咖啡馆"
              des="一个清净的好去处，有一只考拉在这里胡言乱语。">
                <GiCoffeeMug />
              </Rlink>

              <Rlink title="虹色巨鲸" link="https://clovet.org" subTitle="Clovet 性少数社区"
              des="当外面的世界对你太残酷，偶尔可以躲进鲸鱼的柜子里。">
                <GiSpermWhale />
              </Rlink>

              <Rlink title="异闻录" subTitle="敬请期待"
              des="探索脱离于现实的怪异之地和未曾发现的生物。">
                <GiDodging />
              </Rlink>
            </div>
          </section>

          <section className="border-t-2 border-b-2 border-gray-700 py-5">
            <h2 className="text-3xl text-gray-700 font-bold text-center">页面正在装修</h2>
          </section>
        </div> 
      </div>
  )
}

function Rlink({ children, title, subTitle, des, link}){
  //Related links
  return (
    <a href={link} target="_blank" className="w-full md:w-1/3 p-3 bg-white">
      <div className="border-2 border-gray-700 p-6 h-full relative overflow-hidden
      transition duration-300 hover:shadow-lg hover:-translate-y-2
      flex flex-col justify-between">
        <div id="link-text">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="my-4">{des}</p>
        </div>
        <div id="link-icon" className="absolute opacity-30"
        style={{right: '-1rem', bottom: '-1rem', fontSize: '5rem'}}>{children}</div>
        <div id="link-subtitle" className="text-gray-400">
          {subTitle}
        </div>
      </div>
    </a>
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