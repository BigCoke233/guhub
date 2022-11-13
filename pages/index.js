import * as React from 'react';
import Head from 'next/head';
import Parser from "rss-parser";

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

function NameCard({ name, pronounce, description }) {
  return (<header className="namecard md:flex flex-row justify-items-center mb-6">
    <div data-tippy-content="给大佬磕个头" id="avatar" className="namecard-avatar flex-shrink w-1/3 mx-auto md:w-16 mt-1 rounded-full border-2 border-slate-600 bg-slate-600">
      <img src="/favicon.png" className="w-max block cursor-pointer select-none transition scale-125" />
    </div>
    <div className="namecard-profile flex-grow flex flex-col justify-center text-center mt-5 md:mt-0 md:text-left md:ml-5 leading-5">
      <h1 className="text-3xl font-bold mb-2">{name} <small className="text-xl text-gray-400 font-normal">[{pronounce}]</small></h1>
      <p className="text-slate-600">{description}</p>
    </div>
  </header>)
}

function Section({ title, more, link, children }) {
  if(more==undefined || link==undefined){
    return (
      <section className="my-3">
        <h2 className="text-xl font-bold my-1">{title}
        </h2>
        {children}
      </section>
    )
  }
  else {
    return (
      <section className="my-5">
        <h2 className="text-xl font-bold my-1">{title}
          <a data-tippy-content={more}
          className="float-right font-normal text-sm inline-block mt-2" 
          target="_blank" href={link}>查看更多</a>
        </h2>
        <div className="mt-3">{children}</div>
      </section>
    )
  }
}

function Prjct({ link, icon, name, tooltip }){
  return(
    <div className="w-1/2 md:w-1/4">
      <a href={link} className="block border-2 border-slate-600
      transition-all duration-3000 hover:-translate-y-1 hover:shadow-lg"
      data-tippy-content={tooltip}>
        <div className="text-center text-5xl pt-4 bg-slate-200">
          <span className="block">{icon}</span>
        </div>
        <div className="p-2 font-semibold text-lg text-center">{name}</div>
      </a>
    </div>
  )
}

export default function Index(data){

  //头像点击动画
  React.useEffect(() => {
    const avatar_tip = tippy('#avatar', {
      trigger: 'click',
      arrow: false,
      placement: 'bottom',
      theme: 'material'
    });
    const avatar = document.getElementById('avatar');
    if(avatar!=undefined){
        avatar.addEventListener('click', function(){ 
            avatar.setAttribute('style','animation: shake 1s');
            setTimeout(function(){
                avatar.setAttribute('style','animation: none');
                avatar_tip[0].hide()
            }, 1000)
        })
    }

    tippy('[data-tippy-content]:not(#avatar)', {
      placement: 'bottom',
      theme: 'material'
    }
  );
  }, []);

  //获取博客文章
  var post = data.data.items
  var postList=''; var i=0;
  post.forEach(function(){
    if(i<3){
      var content = post[i]['content'];
      let date = new Date(post[i].pubDate).toLocaleDateString('zh-cn');
      postList = postList+
      '<article class="w-full md:w-1/3"><a href='+post[i].link+' class="block border-2 border-slate-600 p-4 transition-all duration-3000 hover:border-slate-500 hover:-translate-y-1 hover:shadow"><h3 class="text-md truncate">'+post[i].title+'</h3>'+
      '<div class="mt-1 flex flex-row items-center justify-between flex-nowrap"><div class="text-sm text-gray-600 truncate">'+date+'</div></div></a></article>'
      i++;
    }
  });

  return(
      <div id="page">
        <Head><title>Eltrac</title></Head>

        <NameCard name="Eltrac" pronounce="'eltræk" 
        description="半吊子前端攻城狮，有很多奇怪的想法。" />

        <div id="index">
          <Section title="最新文章" link="https://blog.guhub.cn" more="访问我的博客">
            <div id="blogpost" className="flex flex-wrap" dangerouslySetInnerHTML={{__html: postList}} />
          </Section>

          <Section title="代表作品" more="访问我的 GitHub 页面" link="https://github.com/BigCoke233">
            <div id="works" className="flex flex-wrap">
              <Prjct name="Matcha" link="https://github.com/BigCoke233/matcha" 
                     icon="🍵" tooltip="简洁大气的 Typecho 主题" 
              />
              <Prjct name="Miracles" link="https://github.com/BigCoke233/miracles" 
                     icon="🎉" tooltip="华丽不张扬的单栏 Typecho 主题" 
              />
              <Prjct name="Textretty" link="https://github.com/BigCoke233/textretty.css" 
                     icon="✒️" tooltip="前端文字排版方案" 
              />
              <Prjct name="Toaster" link="https://github.com/BigCoke233/toaster.js" 
                     icon="🍞" tooltip="简单的提示框 jQuery 插件" 
              />
            </div>
          </Section>

          <Section title="我的笔记">
            <p className="text-lg">这个功能正在开发中。</p>
          </Section>
        </div> 
      </div>
  )
}

export async function getStaticProps() {
  const parser = new Parser();
  const data = await parser.parseURL("https://blog.guhub.cn/feed/");

  return {
    props: { data: data },
    revalidate: 30 * 60, // 至少 30 分钟後去产生新页面
  }
}