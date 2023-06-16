import { readFileSync } from 'fs'
import path from "path"

import Head from 'next/head'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import * as ReactDOM from 'react-dom';

export default function Friends({data}){
    return(
        <div>
            <Head><title>友人帐 / Eltrac</title></Head>

            <h2 className="text-3xl text-gray-700 font-bold text-center
            border-t-2 border-b-2 border-gray-700 py-5">友人帐</h2>
            <ul id="friend-list" className="flex flex-wrap -mx-2 my-6">
                {
                    data.map((item) => {
                        return (
                            <li className="w-1/2 sm:w-1/3 md:w-1/4 p-2 link-item">
                                <style jsx>{`
                                .link-item a:hover .link-icon {
                                    opacity: 0.6
                                }
                                `}</style>
                                <a className="text-center border-2 border-gray-700 block py-4 px-1 bg-white
                                transition duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
                                 href={item.link} target="_blank">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <div className="link-icon absolute opacity-30 inset-y-0
                                    transition duration-300" style={{right: '-1.5rem'}}>
                                        <img className="h-full rounded-full block" src={item.img} />
                                    </div>
                                 </a>
                            </li>
                        )
                    })
                }
            </ul>

            <h2 className="text-3xl text-gray-700 font-bold text-center
            border-t-2 border-b-2 border-gray-700 py-5">关于友链</h2>
            <article className="text-lg font-semibold my-6" id="content">
                <p className="font-bold mb-3">本着「先友后链」的原则，本站只接受脸熟的朋友交换友情链接。</p>

                <p>本站交换友情链接的基本标准是：</p>
                <ul className="list-square m-1 ml-6">
                    <li>网站内容以原创为主；</li>
                    <li>网站是由个人维护的独立博客，即拥有独立的域名；</li>
                    <li>网站内容不包含任何违反法律和色情淫秽内容；</li>
                    <li>网站内容不全是技术类文章。</li>
                </ul>

                <p>如果你发现您在本站的链接被撤下而没有收到任何通知，那么原因可能是以下几点之一：</p>
                <ol className="list-roman m-1 ml-6">
                    <li>贵站长与我的交流太少，不足以为「友」；</li>
                    <li>贵站在排除被墙以外的因素下长期无法访问；</li>
                    <li>贵站在一年以内没有任何更新。</li>
                </ol>

                <p className="mt-3">若您想要交换友情链接或在被撤下后想要重新添加友情链接，
                请访问 <a href="https://github.com/BigCoke233/guhub/">GitHub 仓库</a>
                并修改<a href="https://github.com/BigCoke233/guhub/tree/main/data/friends.json">这个 JSON 文件</a>，提交 Pull Request，之后就能在这个页面看到您的链接。
                但在您做这些之前，请现在您的站点添加上本站链接。</p>

                <style jsx>{`
                #content p a {
                    text-decoration: underline;
                    text-underline-offset: 4px
                }
                `}</style>
            </article>
        </div>
    )
}

export async function getStaticProps() {

    const data = readFileSync(path.join(process.cwd(), 'data', `friends.json`), 'utf-8')
  
    return {
      props: {
        data: JSON.parse(data),
      },
    }
  
  }