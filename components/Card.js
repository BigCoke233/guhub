export default function Card({ size, children, text, des, link }){
    if(size=='small'){
        return (
        <a href={link} target="_blank" className="card-body block w-full md:w-1/2">
            <div className="card flex flex-row items-center w-full
            px-3 py-2 bg-gray-50 border rounded-sm 
            transition duration-300 hover:bg-gray-100">
                <div className="card-icon text-2xl p-2 px-3 border rounded-full bg-white">{children}</div>
                <div className="card-content pl-2">
                    <h3 className="text-md font-semibold">{text}</h3>
                    <p className="text-sm text-gray-500">{des}</p>
                </div>
            </div>
        </a>
        )
    }
}