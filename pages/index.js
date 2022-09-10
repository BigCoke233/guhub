import * as React from 'react';
import { Progress, Btn, ExL, Tag } from '/components';
//图标
import { FaBook, FaGithub } from "react-icons/fa";

function Content({ title, children }) {
  return (
    <section className="content flex flex-row flex-nowrap my-6">
      <h2 className="font-bold flex-shrink-0 text-md">{title}</h2>
      <article className="font-normal pl-3 flex-grow">{children}</article>
    </section>
  );
}

function NameCard({ name, pronounce, description }) {
  return (<header className="namecard md:flex flex-row justify-items-center">
    <div className="namecard-avatar flex-shrink w-1/3 mx-auto md:w-16">
      <img src="/favicon.webp" id="avatar" className="w-max block cursor-pointer select-none transition" />
    </div>
    <div className="namecard-profile mx-3 flex-grow flex flex-col justify-center text-center md:text-left">
      <h1 className="text-2xl font-bold">{name} <small className="text-lg text-gray-400 font-normal">[{pronounce}]</small></h1>
      <p className="text-gray-600">{description}</p>
    </div>
  </header>)
}

export default function Index(){

  //头像点击动画
  React.useEffect(() => {
    const avatar = document.getElementById('avatar');
    if(avatar!=undefined){
        avatar.addEventListener('click', function(){ 
            avatar.setAttribute('style','animation: shake 2s');
            setTimeout(function(){
                avatar.setAttribute('style','animation: none');
            }, 500)
        })
    }
  }, []);

  return(
      <main className="max-w-xl mx-auto mt-16 mb-2 py-2 px-4">

        <NameCard name="Eltrac" pronounce="'eltræk" description="Developer / Blogger / Designer" />

        <section className="quick-link my-4">
          <p className="flex flex-row justify-center md:block">
            <Btn link="https://blog.guhub.cn"><FaBook/> 博客</Btn>
            <Btn link="https://github.com/BigCoke233"><FaGithub/> GitHub</Btn>
          </p>
        </section>

        <section className="content">
          <Content title="我是">
            一只来自重庆的考拉，目前还是学生，对前端和游戏设计很感兴趣<br/>
            一个博主，在维护自己的<ExL link="https://blog.guhub.cn">独立博客</ExL>，时不时产出一些垃圾文字<br/>
            一个开源工作者，在 GitHub 上有一些项目
          </Content>

          <Content title="我用">
            <div className="class-init hidden
            bg-yellow-500 bg-indigo-500 bg-blue-300 bg-slate-700 bg-blue-600 bg-blue-500 bg-green-500"></div>

            <p className="leading-8 md:leading-6">
              <Tag color="yellow-500">JavaScript</Tag>
              <Tag color="blue-500">TypeScript</Tag>
              <Tag color="indigo-500">PHP</Tag>
              <Tag color="blue-300">React</Tag>
              <Tag color="slate-700">Next.js</Tag>
              <Tag color="green-500">Lua</Tag>
            </p>
          </Content>
          
          <Content title="我会">

            <div className="class-init hidden w-0 w-1/2 w-1/3 w-2/3 w-1/4 w-3/4 w-1/5 w-2/5 w-3/5 w-4/5 w-1/6 w-5/6 w-1/12 w-5/12 w-7/12 w-11/12"></div>

            <div className="-mt-2 md:mt-0">
              <Progress text="内容创作">3/5</Progress>
              <Progress text="前端设计">2/3</Progress>
              <Progress text="后端">5/12</Progress>
              <Progress text="编故事">7/12</Progress>
              <Progress text="搞砸事情">11/12</Progress>
              <Progress text="社交">1/12</Progress>
            </div>
            
          </Content>

          <Content title="我想">
            <ul className="list-disc ml-4">
              <li>写出令自己满意的小说</li>
              <li>创作出像 Undertale 那样的游戏</li>
              <li>拥有一台 PlayStation</li>
              <li>有一个懂我的朋友或爱人</li>
              <li>养一只萨摩耶，一只鹦鹉和两只猫</li>
              <li>被人记住，哪怕只有很少的一些</li>
            </ul>
          </Content>

          <Content title="我说">
            <p className="text-shadow font-semibold antialiased">「永远对自己坦诚相见。」💜</p>
          </Content>

        </section>

      </main>
  )
}