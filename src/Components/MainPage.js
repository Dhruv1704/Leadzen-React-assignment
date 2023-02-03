import {useState, useEffect} from "react";
import Card from "./Card"
import Pagination from "./Pagination";

function MainPage() {
    const [article, setArticle] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(3);

    const lastIndex = currentPage * postPerPage
    const firstIndex = lastIndex - postPerPage

    useEffect(() => {
        const update = async () => {
            const url = `https://jsonplaceholder.typicode.com/users`
            const response = await fetch(url)
            const json = await response.json()
            setArticle(json)
            console.log(json)
        }

        update()
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <div className={"row"}>
                {article.slice(firstIndex, lastIndex).map((element, index) => {
                    return <Card name={element.name} username={element.username} address={element.address}
                                 company={element.company}
                                 phone={element.phone} website={element.website} email={element.email} key={index}
                                 index={index}/>
                })}
                <Pagination totalPage={article.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
            </div>
        </>
    )

}

export default MainPage