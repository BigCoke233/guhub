export default function Progress({ text, children }){

    var classList = 'progress-bar h-3 bg-indigo-400 select-none w-'+children;

    return(
        <section className="md:flex md:flex-row md:flex-nowrap">

            <p className="text-gray my-2 md:my-0 md:w-1/5 md:pr-3 whitespace-nowrap text-ellipsis">{text}</p>
            <div className="progress my-auto h-3 bg-gray-100 w-full rounded-full overflow-hidden select-none">
                <div className={classList}> </div>
            </div>
            
        </section>
    )
    
}