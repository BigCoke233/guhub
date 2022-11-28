import Head from 'next/head'

import { BsEmojiDizzy } from 'react-icons/bs'

function Prjct({ link, name, des, children }) {
    return (
        <div className="w-full md:w-1/2 p-4">
            <a href={link} target="_blank" className="block border-2 border-gray-700 p-4
            hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-row
            justify-center items-center gap-4 bg-white">
                <div className="text-6xl">
                    {children}
                </div>
                <div className="">
                    <h3 className="text-xl font-bold mb-1">{name}</h3>
                    <p className="text-sm font-normal">{des}</p>
                </div>
            </a>
        </div>
    )
}

export default function Lab(){
    return(
        <div className="page-content text-lg font-semibold">
            <Head><title>玩具房 / Eltrac</title></Head>

            <h2 className="text-3xl text-gray-700 font-bold text-center
            border-t-2 border-b-2 border-gray-700 py-5">玩具房</h2>

            <blockquote className="border-2 border-gray-700 px-6 py-4 bg-white my-6">
                <p className="font-bold">前端实验场，偶尔会开发一些有用或无用的小应用，简称——呃，<strong>玩具</strong>。</p>
            </blockquote>

            <div className="flex flex-wrap -m-4">
                <Prjct link="https://bi.guhub.cn/" name="怪奇灵感生成器"
                des="随机生成文字来激发灵感，原理是「无色的绿色想法愤怒地睡觉」。">
                    <BsEmojiDizzy />
                </Prjct>
            </div>

            <div className="border-t-2 border-gray-700 my-6" />

            <div className="text-center mt-10 motivating-speech">
                <p>咳咳，听好了！</p>
                <p>接下来，伟大的考拉王要发表一段激动人心的演讲！</p>
                <p>咳咳咳咳，肃静，肃静！</p>
                <p>谁都不想错过如此震撼人心的演讲，对吧？</p>
                <p>那么，现在欢迎，考拉王！</p>
                <p>让我们来听听他想要说些什么！</p>
                <p>他对我们的王国赋予了什么厚望？</p>
                <p>他希望我们在今后的生活中怎样努力？</p>
                <p>他会为王国的建设做出怎样的贡献？</p>
                <p>准备听，他就要讲了！</p>
                <p>“Woof Woof Mur Woo Meow~”</p>
                <p>（台下响起了雷鸣般的掌声）</p>
                <p>噢我的上帝啊，我从来没有听过如此美妙的话语！</p>
                <p>我的国王不仅是一位开明的统治者，还是一位有着诗人格调的演说家！</p>
                <p>他的至理名言让我们所有人受益终生！</p>
                <p>能站在这里听他的演讲真是我三生有幸！</p>
                <p>这段演说很有可能改变历史的走向！</p>
                <p>哦，天哪，我都快要哭出来了。</p>
                <p>让我们为他欢呼！</p>
                <style jsx>{`
                .motivating-speech p {
                    margin: 2rem 0
                }
                `}</style>
            </div>
        </div>
    )
}