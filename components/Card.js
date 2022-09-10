export default function Card({ size, children, text, des, link, tag }){
    var classDefault = 'card-body block w-full';
    var classFinal = classDefault;
    if(size=='small'){
        classFinal = classDefault+' card-small md:w-1/2'
    }
    else if(size=='tiny'){
        classFinal = classDefault+' card-tiny md:w-1/3'
    }

    if(tag!=undefined) tag = <span className="hidden md:inline-block rounded-full ml-1 bg-slate-500 text-white text-xs px-2 py-0.5">{tag}</span>
    
    return (
        <a href={link} target="_blank" className={classFinal}>
            <div className="card flex flex-row items-center w-full
            px-3 py-2 bg-gray-50 border rounded-sm 
            transition duration-300 hover:bg-gray-100">
                <div className="card-icon text-2xl p-2 border rounded-full bg-white">{children}</div>
                <div className="card-content pl-2">
                    <h3 className="text-md font-semibold flex flex-row items-center">{text}{tag}</h3>
                    <p className="text-sm text-gray-500">{des}</p>
                </div>
            </div>
        </a>
    )
    
}