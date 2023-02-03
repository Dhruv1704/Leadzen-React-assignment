import {useState, useEffect} from "react";
import Card from "./Card"

function MainPage(){
    const [article, setArticle] = useState([]);

    useEffect(()=>{
        const update = async ()=>{
            const url = `https://jsonplaceholder.typicode.com/users`
            const response = await fetch(url)
            const json = await response.json()
            setArticle(json)
            console.log(json)
        }

        update()
        // eslint-disable-next-line
    },[])



    return(
        <div className={"row"}>
            {article.slice(0,3).map((element, index)=>{
                return <Card name={element.name} username = {element.username} address = {element.address} company={element.company}
                             phone={element.phone} website={element.website} email={element.email} key={index} index={index}/>
            })}
        </div>
    )

}

export default MainPage