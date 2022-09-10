import { Heading, Card } from '/components';
import Head from 'next/head';

import { FaTelegramPlane, FaStore, FaGithub, FaSteam } from "react-icons/fa";
import { BsEnvelopeFill, BsTwitter } from "react-icons/bs";
import { RiBilibiliLine, RiDoubanFill } from "react-icons/ri";

export default function Social() {
    return (
        <main className="max-w-3xl mx-auto mt-12 mb-2 py-2 px-4">

          <Head><title>社交媒体 - Eltrac</title></Head>

          <Heading meta="在互联网上找到我的踪迹。">社交媒体</Heading>

          <section className="content">

            <p className="my-4">你可以通过以下方式直接联系我，通常不接受 QQ/微信 好友申请。</p>

            <div className="flex flex-row my-2 w-full flex-wrap gap-y-2 -mx-1">
                <Card link="mailto:hi@guhub.cn" text="hi@guhub.cn" des="通过邮箱联系我" size="tiny">
                    <span className="text-yellow-400 block"><BsEnvelopeFill/></span>
                </Card>
                <Card link="https://t.me/Eltrac" text="Telegram" des="推荐的即时通讯方式" size="tiny">
                    <span className="text-blue-500 block"><FaTelegramPlane/></span>
                </Card>
            </div>

            <p className="my-4">以下是我活跃的社交平台，如果你对我在这些平台的动态感兴趣，可以考虑关注。</p>

            <div className="flex flex-row my-2 w-full flex-wrap gap-y-2 -mx-1">
                <Card link="https://twitter.com/Eltrac233" text="Twitter" des="推特，日常发牢骚。" size="tiny">
                    <span className="text-blue-400 block"><BsTwitter/></span>
                </Card>
                <Card link="https://space.bilibili.com/384247770" text="Bilibili" des="偶尔做做搬运和听译。" size="tiny">
                    <span className="text-pink-400 block"><RiBilibiliLine/></span>
                </Card>
                <Card link="https://steamcommunity.com/profiles/76561198812226260" text="Steam" des="我主要的游戏平台" size="tiny">
                    <span className="text-blue-800 block"><FaSteam/></span>
                </Card>
                <Card link="https://www.douban.com/people/eltrac/" text="豆瓣" des="其实不怎么活跃。" size="tiny">
                    <span className="text-green-500 block"><RiDoubanFill/></span>
                </Card>
                <Card link="https://github.com/BigCoke233" text="GitHub" des="程序员的社交平台。" size="tiny">
                    <span className="text-black block"><FaGithub/></span>
                </Card>
                <Card link="https://storeweb.cn/member/o/626" text="个站商店" des="站长们的社交平台。" size="tiny">
                    <span className="text-yellow-500 block"><FaStore/></span>
                </Card>
            </div>

            <p className="my-4">以上并不是所有社交平台我都常用，如果你想要联系我，建议通过邮箱或者 Telegram 直接联系，在中午和晚上和节假日我一般有空回复邮件和消息。
            更推荐发邮件，因为我并不常看 Telegram，当你有实时沟通的需求是才建议使用 Telegram。</p>

          </section>
  
        </main>
    )
  }
  