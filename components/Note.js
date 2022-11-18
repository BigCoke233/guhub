export default function Note({children}) {
    return(
        <div className="note content-box bg-white border border-slate-300 border-l-4 border-l-slate-700 rounded-sm p-3 px-5 my-2 shadow-sm">
            <article>{children}</article>
        </div>
    )
}