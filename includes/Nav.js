import Link from 'next/link'
import * as React from 'react';

function Item({link, children}) {
    return <Link href={link}><a className="
    mx-0.5 py-3 md:py-5 px-2 inline-block
    hover:bg-gray-100 transition 
    ">{children}</a></Link>
}

function Drop({link, children}) {
    return <Link href={link}><a className="
    px-5 py-1.5 block border-b border-gray-100
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
                dropdown.classList.remove('hidden')
                nav.setAttribute('style', 'box-shadow: 0 1px 4px 0 rgb(0 0 0 / 0.05)');
            }else{
                if(document.documentElement.scrollTop==0) nav.setAttribute('style', 'box-shadow: 0 0 0 0 #fff');
                dropdown.classList.remove('fadein-animate');
                setTimeout(function(){
                    dropdown.classList.add('hidden')
                }, 280)
            }
        })
    }, []);

    return (
        <div className="
        mx-0.5 py-3 md:py-5 px-2 cursor-pointer
        hover:bg-gray-100 transition inline-block"
        id={id}
        >{text}
            <div className="dropdown hidden fixed top-16 right-4 mt-2 clear
            shadow bg-white rounded-sm overflow-hidden">{children}</div>
        </div>
    )
}


export default function Nav() {
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
    }, [])
    return (
        <header className="
        fixed top-0 inset-x-0 w-full px-4 py-2 md:p-0
        flex flex-row justify-center md:justify-between items-center
        backdrop-filter backdrop-blur-md bg-opacity-70 bg-white transition duration-300
        " id="nav">
            <div className="nav-title hidden p-4 md:block">
                <h1 className="font-bold text-lg">Eltrac</h1>
            </div>
            <div className="nav-content md:mr-4">
                <Item link="/">首页</Item>
                <Item link="/collections">收藏</Item>
                <Dropdown text="更多+" id='more'>
                    <Drop link="/social">社交</Drop>
                    <Drop link="/">关于</Drop>
                </Dropdown>
            </div>
        </header>
    )
}