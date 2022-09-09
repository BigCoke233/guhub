import Link from 'next/link'

function Item({link, children}) {
    return <Link href={link}><a className="
    mx-0.5 py-3 md:py-5 px-2 md:px-3 rounded-sm
    hover:bg-gray-100 transition 
    ">{children}</a></Link>
}


export default function Nav() {
    return (
        <header className="
        fixed top-0 inset-x-0 w-full p-4 md:p-0
        flex flex-row justify-center md:justify-between items-center
        backdrop-filter backdrop-blur-md bg-opacity-70 bg-white
        " id="nav">
            <div className="nav-title hidden p-4 md:block">
                <h1 className="font-bold text-lg">Eltrac</h1>
            </div>
            <div className="nav-content md:mr-4">
                <Item link="/">首页</Item>
                <Item link="/social">社交</Item>
                <Item link="/collections">收藏</Item>
            </div>
        </header>
    )
}