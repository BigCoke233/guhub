import { Heading, ExL } from '/components';
import Head from 'next/head';
import Parser from "rss-parser";

export default function Collections(data) {
    var post = data.data.items
    var postList=''; var i=0;
    post.forEach(function(){
        if(i<8){
            var content = post[i]['content'];
            let date = new Date(post[i].pubDate).toLocaleDateString('zh-cn');
            postList = postList+
            '<article class="blogpost-item my-5 shadow border border-slate-600 border-2 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"><h2 class="text-2xl font-semibold mb-2"><a href='+post[i].link+'>'+post[i].title+'</a></h2><p class="text-gray-500">'+content+'</p>'+
            '<div class="mt-2 flex flex-row items-center justify-between flex-nowrap"><div class="text-sm text-gray-600">'+date+'</div><div><a href="'+post[i].link+'" target="_blank" class="hover:bg-gray-100 px-2 py-1 rounded transition">查看全文</a></div></div></article>'
            i++;
        }
    });
    return (
        <main className="max-w-3xl mx-auto mt-20 mb-2 py-2 px-4">
          <Head><title>博客文章 - Eltrac</title></Head>
          <div className="class-init hidden items-center text-sm flex flex-row justify-between flex-nowrap p-4 text-xl font-semibold mb-2 my-2 border border-slate-200 rounded-sm text-gray-500" />

          <Heading meta="我博客的最新文章列表">博客文章</Heading>
          <div className="post-list" dangerouslySetInnerHTML={{__html: postList}} />
          <p className="text-center text-gray-400 my-6 text-lg">阅读更多请访问<ExL link="https://blog.guhub.cn/">考拉咖啡馆</ExL></p>
        </main>
    )
}
  
export async function getStaticProps() {
    const parser = new Parser();
    const data = await parser.parseURL("https://blog.guhub.cn/feed/");
  
    return {
      props: { data: data },
      revalidate: 30 * 60, // 至少 30 分钟後去产生新页面
    }
}