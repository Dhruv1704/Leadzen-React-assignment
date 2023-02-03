function Pagination(props){
    const {totalPage, postPerPage, setCurrentPage} = props
    const pages = []
    for (let i = 1; i <= Math.ceil(totalPage/postPerPage); i++) {
        pages.push(i)
    }

    const pageChange = (page)=>{
        setCurrentPage(page)
        for (let i = 0; i < pages.length; i++) {
        document.getElementById(`page-button${pages[i]}`).style.background = "#fb3e3e"
        }
        document.getElementById(`page-button${page}`).style.background = "darkred"
    }

    return(
        <div className={"page"}>
            {pages.map((page, index)=>{
                return <button key={index} className={"page-button"} id={`page-button${pages[index]}`} onClick={()=>pageChange(pages[index])}>{page}</button>
            })}
        </div>
    )
}

export default Pagination