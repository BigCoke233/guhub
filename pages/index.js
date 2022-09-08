import Head from 'next/head';
import { Card, Btn, ExL } from '/components';
import { Nav, Footer } from '/includes';
//图标
import { FaBook, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { data } from 'autoprefixer';

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

const Index = ({ gh }) => (
    <div className="container">

      <Head>
        <title>Eltrac</title>
        <link rel="icon" href="/favicon.webp" />
        <meta charSet='utf-8' />
      </Head>

      <Nav />

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
      
          <Content title="我有">
            <p>
              <span className="font-semibold">{gh.followers}</span> 个 GitHub 关注者，
              <span className="font-semibold">{gh.public_repos}</span> 个仓库
            </p>
          </Content>

          <Content title="我想">
            <ul className="list-disc ml-4">
              <li>写出令自己满意的小说</li>
              <li>创作出像 Undertale 那样的游戏</li>
              <li>拥有一台 PlayStation</li>
              <li>有一个懂我的朋友或爱人</li>
              <li>养一只萨摩耶，一只鹦鹉和两只猫</li>
              <li>永远积极快乐</li>
            </ul>
          </Content>

          <h2 className="text-center text-gray-600 text-lg bg-gray-50 rounded-sm py-3">该页面还在装修中</h2>
        </section>

        <Footer/>

      </main>
    </div>
)

export async function getStaticProps() {
  const gh = await fetch('https://api.github.com/users/BigCoke233?client_id=fdff1c9b6c604f37a215&client_secret=f94cf7fc0eb31a438b270044bc354bdc8ede6480').then(res => res.json());

  return {
    props: {
      gh
    }
  }
}

export default Index;
