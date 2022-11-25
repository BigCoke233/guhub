import Head from 'next/head'

export default function About(){
    return(
        <div className="page-content text-lg font-semibold">
            <Head><title>自述间 / Eltrac</title></Head>

            <blockquote className="border-2 border-gray-700 p-6 bg-white">
                <p className="font-bold"> 
                如果你在不正确的地方从互联网切出，你终将坠入「考拉室」，这里只有过剩的自我意识和格格不入的奇怪文字。
                逻辑至上的交流理想和焦灼与自我价值之实现的迫切欲望在持续地轰鸣。
                倘若你听见有什么东西在附近徘徊，大可不必担心，因为它…… 是一只考拉。
                </p>
            </blockquote>
            <p>以上是我根据「后室」的故事改编的对本站的描述。按照上面的话来说的话，这个页面就是在这个「考拉室」里的「自述间」，也就是关于页面。不过还没写完。</p>
            <style jsx>{`
                .page-content p:not(blockquote p) {
                    margin: 2rem 0
                }
            `}</style>
        </div>
    )
}