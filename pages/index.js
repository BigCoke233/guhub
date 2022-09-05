import Head from 'next/head';
import { Card, Btn, ExL } from '/components';
//图标
import { FaBook, FaGithub, FaTelegramPlane, FaPhp } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
//获取时间脚本
import moment from 'moment';

function Content({ title, children }) {
  return (
    <section className="content flex flex-row flex-nowrap my-6">
      <h2 className="font-semibold flex-shrink-0">{title}</h2>
      <article className="font-normal pl-3 flex-grow">{children}</article>
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
            <span className="bg-yellow-500 text-white text-sm py-0.5 px-1.5 rounded-sm select-none mr-1">JavaScript</span>
            <span className="bg-indigo-500 text-white text-sm py-0.5 px-1.5 rounded-sm select-none mr-1">PHP</span>
            <span className="bg-blue-300 text-white text-sm py-0.5 px-1.5 rounded-sm select-none mr-1">React</span>
          </Content>
      
          <Content title="我在">
            各个社交平台，以下是推荐的联系方式。
            <div className="flex flex-row my-2 w-full flex-wrap gap-y-2">
              <Card link="mailto:hi@guhub.cn" text="hi@guhub.cn" des="通过邮箱联系我" size="small">
                <span className="text-yellow-400 block"><BsEnvelopeFill/></span>
              </Card>
              <Card link="https://t.me/Eltrac" text="Telegram" des="推荐的即时通讯方式" size="small">
                <span className="text-blue-500 block"><FaTelegramPlane/></span>
              </Card>
            </div>
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