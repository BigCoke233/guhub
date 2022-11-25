import Head from 'next/head'

export default function Lab(){
    return(
        <div className="page-content text-lg font-semibold">
            <Head><title>玩具房 / Eltrac</title></Head>

            <h2 className="text-3xl text-gray-700 font-bold text-center
            border-t-2 border-b-2 border-gray-700 py-5">玩具房</h2>

            <blockquote className="border-2 border-gray-700 p-6 bg-white my-6">
                <p className="font-bold">前端实验场，偶尔会开发一些有用或无用的小应用，简称——呃，<strong>玩具</strong>。</p>
                <p>如你所见，这里现在什么也没有，我甚至不知道那只考拉为什么要在这里新建一个页面，
                不过说真的，这些文字和线条还挺好看的你不觉得吗？</p>
                <p>呃... 我为什么要说这么多废话？</p>
                <p>因为你没看到那个页脚都跑到上面来了吗，我必须得多说点话把它压下去啊。</p>
                <p>烦死了烦死了，我知道可以用绝对定位把它弄下去，但是我不喜欢那么做。
                你知道那个侧边栏为什么只能在顶部打开，打开了之后还不能滚动页面吗？定位干的好事。</p>
                <p>当然很有可能是我技术力不够。</p>
                <p>但是，既然都已经说了这么多了，为什么不继续写下去呢，而且你都看到这里了。</p>
                <p>而且你看，这里叫做「玩具房」，玩具就是拿来玩的，玩就是为了开心的，现在我说了这么多废话，但是我很开心，那这些文字放在这里不就是有意义的吗？</p>
                <p>嘿嘿，我还是挺有意思的，对吧？</p>
                <p className="text-right italic font-normal">——后室写多了写出来的翻译腔</p>
            </blockquote>

            <style jsx>{`
            blockquote p {
                margin: 0.5rem 0
            }
            `}</style>
        </div>
    )
}