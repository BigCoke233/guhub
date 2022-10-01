export default function Heading({children, meta}){

    var headerClass='page-heading my-4 text-center md:text-left';

    if (meta!=undefined) {
        return (
            <header className={headerClass}>
                <h1 className="text-4xl font-bold my-2">{children}</h1>
                <p className="text-gray-400">{meta}</p>
            </header>
        )
    }else{
        return (
            <header className={headerClass}>
                <h1 className="text-4xl font-bold">{children}</h1>
            </header>
        )
    }
}