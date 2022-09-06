export default function Heading({children, meta}){
    if (meta!=undefined) {
        return (
            <header className="page-heading my-4">
                <h1 className="text-4xl font-bold my-2">{children}</h1>
                <p className="text-gray-400 text-sm">{meta}</p>
            </header>
        )
    }else{
        return (
            <header className="page-heading my-5">
                <h1 className="text-4xl font-bold">{children}</h1>
            </header>
        )
    }
}