import Link from 'next/link';
import * as React from 'react';

export default function Sidebar() {

    function close(){
        const main = document.getElementsByTagName('body')[0];
        const navButton = document.getElementById('menu-icon');
        main.classList.remove('menu-open');
        navButton.classList.remove('change')
    }

    React.useEffect(() => {
        const navClose = document.getElementById('nav-close');
        navClose.addEventListener('click', close)

        const weirdBox = document.getElementById('weird-box');
        weirdBox.addEventListener('click', close)

        const listItems = document.querySelectorAll('.sidebar-list li a');
        listItems.forEach(function(e){
            e.addEventListener('click', close)
        })
    }, [])

    return (
        <aside id="sidebar" className="bg-black fixed inset-y-0 overflow-auto">
            <style jsx>{`
                #sidebar-content {
                    font-family: 'Noto Serif SC', sans-serif;
                }
                #sidebar-title {
                    font-family: 'Abel';
                    font-weight: bolder
                }
                #sidebar-content h3 {
                    font-size: 20px;
                    font-weight: 600
                }
                .sidebar-list {
                    color: #ccc;
                    margin: .5rem 0;
                    letter-spacing: .15rem;
                    line-height: 1.65rem;

                    counter-reset: item
                }

                .sidebar-list li {
                    display: flex;
                    justify-content: space-between
                }
                .sidebar-list li::after {
                    content: counter(item, lower-roman);
                    counter-increment: item;
                    color: #666;
                    letter-spacing: 0
                }

            `}</style>
            <h2 id="sidebar-title" className="text-3xl text-gray-100 tracking-widest m-0 px-8 pt-3 md:pt-6 pb-3 border-b border-gray-600">
                KOALAROOMS
            </h2>
            <div id="sidebar-content" className="p-8 pt-3 md:pt-3 text-gray-200 relative
            flex flex-col justify-between">
                <section>
                    <Link href="/about">
                        <div id="weird-box" className="text-sm border border-gray-100 p-2 mb-5 cursor-pointer font-semibold
                        hover:bg-gray-100 hover:text-black transition duration-300" style={{ boxShadow: '0.23rem 0.23rem 0 #ddd' }}>
                            &emsp;&emsp;如果你在不正确的地方从互联网切出，你终将坠入「考拉室」，这里只有过剩的自我意识和格格不入的奇怪文字。
                        </div>
                    </Link>
                    <h3>层级列表</h3>
                    <ul className="sidebar-list">
                        <li><Link href="/">考拉室</Link></li>
                        <li><Link href="/about">自述间</Link></li>
                        <li><Link href="/friends">友人帐</Link></li>
                    </ul>
                    <h3>实体名单</h3>
                    <ul className="sidebar-list">
                        <li><a href="https://blog.guhub.cn" target="_blank">树袋咖啡</a></li>
                        <li><a href="https://twitter.com/Eltrac233" target="_blank">聒噪蓝鸟</a></li>
                        <li><a href="https://space.bilibili.com/384247770" target="_blank">粉色电视</a></li>
                        <li><a href="https://clovet.org" target="_blank">虹色巨鲸</a></li>
                    </ul>
                </section>
                <button id="nav-close" className="px-2 py-3 text-md text-center block border border-gray-100 text-gray-100 w-full rounded
                transition duration-300 hover:bg-gray-100 hover:text-black mt-2">切出</button>
            </div>
        </aside>
    )
}