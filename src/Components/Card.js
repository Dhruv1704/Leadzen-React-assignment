import {useState} from "react";
import MoreInfo from "./MoreInfo"

function Card(props){
    //eslint-disable-next-line
    const {name, username, email, address, phone, website, company} = props
    const [button, setButton] = useState("View");

    const viewDetails = ()=>{
        if(button === "View"){
            setButton("Hide")
        }else{
            setButton("View")
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
                    <button onClick={viewDetails} className={"button"}>{button} Details</button>
                </div>
                <MoreInfo name={name} username = {username} address = {address} company={company}
                          phone={phone} website={website} email={email}/>
            </div>
        </div>
    )
}

export default Card;