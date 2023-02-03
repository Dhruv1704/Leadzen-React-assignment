function Pagination(props){
    const {totalPage, postPerPage, setCurrentPage} = props
    const pages = []
    for (let i = 1; i <= Math.ceil(totalPage/postPerPage); i++) {
        pages.push(i)
    }

    const pageChange = (page)=>{
        setCurrentPage(page)
    }

    return(
        <div className={"page"}>
            {pages.map((page, index)=>{
                return <button key={index} className={"page-button"} onClick={()=>pageChange(pages[index])}>{page}</button>
            })}
        </div>
    )
}

export default Pagination