import Head from 'next/head';
import Btn from '/components/Btn.js';
import ExL from '/components/ExLink.js';
import moment from 'moment';
import { FaBook, FaGithub } from "react-icons/fa";

function Content({ title, children }) {
  return (
    <section className="content flex flex-row flex-nowrap my-3">
      <h2 className="font-semibold flex-shrink-0">{title}</h2>
      <article className="font-normal pl-3">{children}</article>
    </section>
  );
}

function NameCard({ name, pronounce, description }) {
  return (<header className="namecard md:flex flex-row justify-items-center">
    <div className="namecard-avatar flex-shrink w-1/3 mx-auto md:w-16">
      <img src="/favicon.webp" id="avatar" className="w-max block cursor-pointer select-none" />
    </div>
    <div className="namecard-profile mx-3 flex-grow flex flex-col justify-center text-center md:text-left">
      <h1 className="text-2xl font-bold">{name} <small className="text-lg text-gray-400 font-normal">[{pronounce}]</small></h1>
      <p className="text-gray-600">{description}</p>
    </div>
  </header>)
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Eltrac</title>
        <link rel="icon" href="/favicon.webp" />
        <meta charSet='utf-8' />
      </Head>

      <main className="max-w-xl mx-auto my-12 py-2 px-4">

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
          <Content title="我会">
            PHP、JavaScript、React <del>等单词的拼写</del><br/>
          </Content>
          <Content title="我在">
            <a href="mailto:hi@guhub.cn" className="text-purple-300">hi@guhub.cn</a><br/>
            <a href="https://t.me/Eltrac" className="text-purple-300">Telegram</a><br/>
            <a href="https://twitter.com/Eltrac233" className="text-purple-300">Twitter</a>
          </Content>
          <h2 className="text-center text-gray-600 text-lg bg-gray-50 rounded-sm py-3">该页面还在装修中</h2>
        </section>

        <footer className="text-gray-400 text-sm mt-5">
          <p>Proudly powered by Next.js & Tailwind.css</p>
          <p>&copy; {moment().format('YYYY')} Eltrac, all rights reserved.</p>
        </footer>

      </main>
    </div>
  )
}
