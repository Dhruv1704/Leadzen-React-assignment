import {useState} from "react";
import MoreInfo from "./MoreInfo"

function Card(props){
    //eslint-disable-next-line
    const {name, username, email, address, phone, website, company, index} = props
    const [button, setButton] = useState("View");

    const viewDetails = (index)=>{
        if(button === "View"){
            setButton("Hide")
            document.getElementsByClassName("more-info")[index].style.display = "block"
        }else{
            setButton("View")
            document.getElementsByClassName("more-info")[index].style.display = "none"
        }
    }

    return(
        <div className={"card"}>
            <div className={"detail"}>
                <div className={"info"}>
                    {company.name}
                </div>
                <div className={"info"}>
                    <b>CONTACT</b>
                    {name}
                </div>
                <div className={"info"}>
                    <b>CITY</b>
                    {address.city}
                </div>
                <div className={'info'}>
                    <b>Website</b>
                    {website}
                </div>
                <div className={"info"}>
                    <button onClick={()=>viewDetails(index)} className={"button"}>{button} Details</button>
                </div>
            </div>
            <MoreInfo name={name} username = {username} address = {address} company={company}
                      phone={phone} website={website} email={email}/>
        </div>
    )
}

export default Card;