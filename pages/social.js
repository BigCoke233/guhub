import Head from 'next/head';
import { Heading, Card } from '/components';
import { Nav, Footer } from '/includes';

import { FaTelegramPlane, FaStore } from "react-icons/fa";
import { BsEnvelopeFill, BsTwitter } from "react-icons/bs";
import { RiBilibiliLine, RiDoubanFill } from "react-icons/ri";

export default function Social() {
    return (
      <div className="container">
        <Head>
          <title>Eltrac</title>
          <link rel="icon" href="/favicon.webp" />
          <meta charSet='utf-8' />
        </Head>
  
        <Nav />
  
        <main className="max-w-3xl mx-auto my-12 py-2 px-4">

          <Heading meta="在互联网上找到我的踪迹。">社交媒体</Heading>

          <section className="content">

            <p className="my-5 mb-3">你可以通过以下方式直接联系我，通常不接受 QQ/微信 好友申请。</p>

            <div className="flex flex-row my-2 w-full flex-wrap gap-y-2 -mx-1">
                <Card link="mailto:hi@guhub.cn" text="hi@guhub.cn" des="通过邮箱联系我" size="tiny">
                    <span className="text-yellow-400 block"><BsEnvelopeFill/></span>
                </Card>
                <Card link="https://t.me/Eltrac" text="Telegram" des="推荐的即时通讯方式" size="tiny">
                    <span className="text-blue-500 block"><FaTelegramPlane/></span>
                </Card>
            </div>

            <p className="my-5  mb-3">以下是我活跃的社交平台，如果你对我在这些平台的动态感兴趣，可以考虑关注。</p>

            <div className="flex flex-row my-2 w-full flex-wrap gap-y-2 -mx-1">
                <Card link="https://twitter.com/Eltrac233" text="Twitter" des="推特，日常发牢骚。" size="tiny">
                    <span className="text-blue-400 block"><BsTwitter/></span>
                </Card>
                <Card link="https://space.bilibili.com/384247770" text="Bilibili" des="偶尔做做搬运和听译。" size="tiny">
                    <span className="text-pink-400 block"><RiBilibiliLine/></span>
                </Card>
                <Card link="https://www.douban.com/people/eltrac/" text="豆瓣" des="其实不怎么活跃。" size="tiny">
                    <span className="text-green-500 block"><RiDoubanFill/></span>
                </Card>
                <Card link="https://storeweb.cn/member/o/626" text="个站商店" des="站长们的社交平台。" size="tiny">
                    <span className="text-yellow-500 block"><FaStore/></span>
                </Card>
            </div>

          </section>
  
          <Footer/>
  
        </main>
      </div>
    )
  }
  