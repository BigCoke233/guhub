import Link from 'next/link'

function Item({link, children}) {
    return <Link href={link}><a className="
    mx-0.5 py-1 px-2 rounded-sm
    hover:bg-gray-100 transition 
    ">{children}</a></Link>
}


export default function Nav() {
    return (
        <header className="
        fixed top-0 inset-x-0 w-full
        flex flex-row justify-between items-center p-4 px-6
        backdrop-filter backdrop-blur-md bg-opacity-70 bg-white
        ">
            <div className="nav-title">
                <h1 className="font-bold text-lg">Eltrac</h1>
            </div>
            <div className="nav-content">
                <Item link="/">Home</Item>
                <Item link="/social">Social</Item>
            </div>
        </header>
    )
}