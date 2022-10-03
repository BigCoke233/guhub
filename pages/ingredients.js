import { Heading } from '/components';
import Head from 'next/head';

function Ingrdt({ img, title, des, link, imgSize }) {
    return (
        <div className="p-1 md:w-1/3">
            <div className="relative overflow-hidden hover:shadow hover:-translate-y-1 
            flex justify-center items-center h-40
            border-2 border-slate-600 transition duration-300">
                <img src={img} className={"block opacity-40 "+imgSize} />
                <a className="block absolute inset-0 p-4 flex flex-col-reverse bg-white hover:bg-transparent transition duration-300" href={link} target="_blank">
                    <p className="">{des}</p>
                    <h2 className="trunate text-xl font-semibold">{title}</h2>
                </a>
            </div>
        </div>
    )
}

export default function Collections() {
    return (
        <main className="max-w-3xl mx-auto mb-5 mt-20 mb-2 py-2 px-4">

          <Head><title>我的成分 - Eltrac</title></Head>

          <Heading meta="以下这些东西组成了考拉。">我的成分</Heading>

          <section className="content">

            <div className="flex flex-row flex-wrap items-stretch -mx-1">
                <Ingrdt img="ing/Thebackrooms.jpg" 
                    title="Backrooms" 
                    des="世界网友共同构建的怪谈类世界观，我也参与了其中。" 
                    link="https://backrooms-wiki-cn.wikidot.com/" />
                <Ingrdt img="ing/pokemon.jfif" 
                    title="宝可梦" 
                    des="谁不想成为宝可梦训练家呢？" 
                    link="#"
                    imgSize="h-full" />
                <Ingrdt img="ing/mc.jpg" 
                    title="Minecraft" 
                    des="是一个生存建筑党。" 
                    link="https://minecraft.net" />
                <Ingrdt img="ing/ds.png" 
                    title="饥荒" 
                    des="世界第二的沙盒生存游戏。" imgSize="h-full"
                    link="https://www.klei.com/games/dont-starve" />
                <Ingrdt img="ing/rm.jpg" 
                    title="瑞克与莫蒂" 
                    des="全世界第一美漫。" 
                    link="https://www.adultswim.com/videos/rick-and-morty"
                    imgSize="h-full" />
            </div>

          </section>
  
        </main>
    )
  }
  