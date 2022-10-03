import Link from 'next/link'
import * as React from 'react';

import { CgDarkMode } from 'react-icons/cg' 
import { IoMdArrowDropdown } from 'react-icons/io'

function Item({link, children}) {
    return <Link href={link}><a className="
    mx-0.5 py-3 px-2 inline-block text-lg
    hover:bg-slate-600 hover:text-white transition 
    ">{children}</a></Link>
}

function Drop({link, children}) {
    return <Link href={link}><a className="dropdown-item text-lg
    px-2 md:px-0 py-1.5 inline-block md:block md:border-b border-gray-100 text-black
    hover:bg-slate-600 hover:text-white transition duration-300
    ">{children}</a></Link>
}

function Dropdown({text, children, id}) {
    React.useEffect(() => {
        const nav = document.getElementById('nav');
        var btn = document.getElementById(id);
        var dropdown = btn.getElementsByClassName('dropdown')[0];

        btn.addEventListener('click', function(){
            if(dropdown.classList.contains('hidden')){
                dropdown.classList.add('fadein-animate');
                dropdown.classList.remove('hidden');
                btn.classList.add('open');
                nav.setAttribute('style', 'box-shadow: 0 1px 4px 0 rgb(0 0 0 / 0.05)');
            }else{
                if(document.documentElement.scrollTop==0) nav.setAttribute('style', 'box-shadow: 0 0 0 0 #fff');
                dropdown.classList.remove('fadein-animate');
                btn.classList.remove('open');
                setTimeout(function(){
                    dropdown.classList.add('hidden')
                }, 280)
            }
        })
    }, []);

    return (
        <div className="dropdown-box md:relative z-40
        mx-0.5 py-3 px-2 cursor-pointer text-lg
        hover:bg-slate-600 hover:text-white transition inline-block"
        id={id}
        >{text}<IoMdArrowDropdown/>
            <div className="dropdown hidden fixed top-14 right-1 left-1 md:absolute md:left-0 md:right-0 md:top-14
            mt-2 p-2 md:p-0 text-center border-2 border-slate-600
            shadow bg-opacity-90 bg-white rounded-sm overflow-hidden">{children}</div>
        </div>
    )
}


export default function Nav() {
    return (
        <header className="nav
        fixed top-0 inset-x-0 w-full p-0 z-50
        flex flex-row justify-center md:justify-between items-center
        bg-white transition duration-300
        border-b-2 border-slate-600
        " id="nav">
            <div className="nav-title hidden py-3 px-4 md:block">
                <h1 className="font-bold text-xl">
                    <Link href="/"><a>Eltrac</a></Link>
                </h1>
            </div>
            <div className="nav-content md:mr-4">
                <Item link="/">首页</Item>
                <Item link="/blogpost">文章</Item>
                <Item link="/projects">项目</Item>
                <Dropdown text="更多" id='more'>
                    <Drop link="/social">社交</Drop>
                    <Drop link="/ingredients">成分</Drop>
                    <Drop link="/collections">收藏</Drop>
                </Dropdown>
            </div>
        </header>
    )
}