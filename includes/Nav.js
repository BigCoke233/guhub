import Link from 'next/link'
import * as React from 'react';
import Darkmode from 'darkmode-js';

import { CgDarkMode } from 'react-icons/cg' 
import { IoMdArrowDropdown } from 'react-icons/io'

function Item({link, children}) {
    return <Link href={link}><a className="
    mx-0.5 py-3 md:py-5 px-2 inline-block
    hover:bg-gray-100 transition 
    ">{children}</a></Link>
}

function Drop({link, children}) {
    return <Link href={link}><a className="dropdown-item
    px-2 md:px-0 py-1.5 inline-block md:block md:border-b border-gray-100
    hover:bg-gray-50 transition duration-300
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
        mx-0.5 py-3 md:py-5 px-2 cursor-pointer
        hover:bg-gray-100 transition inline-block"
        id={id}
        >{text}<IoMdArrowDropdown/>
            <div className="dropdown hidden fixed top-14 right-1 left-1 md:absolute md:left-0 md:right-0 md:top-14
            mt-2 p-2 md:p-0 text-center
            shadow bg-opacity-90 bg-white rounded-sm overflow-hidden">{children}</div>
        </div>
    )
}


export default function Nav() {
    //启用夜间模式
    const options = {
        time: '0.5s', // default: '0.3s'
        saveInCookies: false // default: true,
    }
    const darkmode = new Darkmode(options);

    React.useEffect(() => {
        const nav = document.getElementById('nav');
        var headroom = function(){
            if(document.documentElement.scrollTop!=0){
                nav.setAttribute('style', 'box-shadow: 0 1px 4px 0 rgb(0 0 0 / 0.05)');
            }else{
                nav.setAttribute('style', 'box-shadow: 0 0 0 0 #fff');
            }
        }
        headroom();
        window.addEventListener('scroll', headroom);

        const darkBtn = document.getElementById('darkmode');
        darkBtn.addEventListener('click', function(){
            darkmode.toggle();
        });
    }, [])
    return (
        <header className="
        fixed top-0 inset-x-0 w-full px-4 py-2 md:p-0 z-50
        flex flex-row justify-center md:justify-between items-center
        backdrop-filter backdrop-blur-md bg-opacity-70 bg-white transition duration-300
        " id="nav">
            <div className="nav-title hidden p-4 md:block">
                <h1 className="font-bold text-lg">
                    <Link href="/"><a>Eltrac</a></Link>
                </h1>
            </div>
            <div className="nav-content md:mr-4">
                <Item link="/">首页</Item>
                <Item link="/blogpost">文章</Item>
                <Item link="/collections">收藏</Item>
                <Dropdown text="更多" id='more'>
                    <Drop link="/social">社交</Drop>
                    <Drop link="https://blog.guhub.cn">博客</Drop>
                    <Drop link="https://doc.guhub.cn">文档</Drop>
                </Dropdown>
                <button className="
                mx-0.5 py-3 md:py-5 px-2 inline-block
                hover:bg-gray-100 transition 
                " id="darkmode"><CgDarkMode/></button>
            </div>
        </header>
    )
}