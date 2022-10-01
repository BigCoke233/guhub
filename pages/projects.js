import { Heading, Tag } from '/components';
import Head from 'next/head';

function Prjct({ name, des, link }) {
    return (
          <div className="w-1/2 p-2">
            <a className="flex flex-col justify-between block p-4 border border-slate-600 border-2 shadow hover:border-slate-900 hover:shadow-md hover:-translate-y-1 transition duration-300" href={link} target="_blank">
              <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-gray-500 my-1">{des}</p>
              </div>
              <p className="text-sm text-gray-400 nowrap truncate">{link}</p>
            </a>
          </div>
    )
}

export default function Collections() {
    return (
        <main className="max-w-3xl mx-auto mb-5 mt-20 mb-2 py-2 px-4">

          <Head><title>我的项目 - Eltrac</title></Head>

          <Heading meta="我设计、编写并维护的开源程序和网站。">我的项目</Heading>

          <section className="content">

            <div className="flex flex-row flex-wrap items-stretch -mx-2">
              <Prjct name="Clovet" 
                  des="一个国内性少数群体的社区，致力于帮助性少数群体建立自我认同，提倡相互理解与尊重"
                  link="https://www.clovet.org"></Prjct>
              <Prjct name="考拉咖啡馆" 
                  des="我的博客，经常产出一些垃圾文字，谈谈自己的想法，也算是我的项目之一"
                  link="https://blog.guhub.cn"></Prjct>
              <Prjct name="Textretty" 
                  des="网页文字排版方案"
                  link="https://bigcoke233.github.io/textretty.css/"></Prjct>
              <Prjct name="无尾熊文档" 
                  des="建设中，一个集成式的个人文档站点"
                  link="https://doc.guhub.cn"></Prjct>
              <Prjct name="Theme Matcha for Typecho" 
                  des="功能强大、简洁大气的 Typecho 双栏主题"
                  link="https://github.com/BigCoke233/matcha"></Prjct>
              <Prjct name="Theme Miracles for Typecho" 
                  des="生为奇迹，有 400+ star 的主题"
                  link="https://github.com/BigCoke233/miracles"></Prjct>
            </div>

          </section>
  
        </main>
    )
  }
  