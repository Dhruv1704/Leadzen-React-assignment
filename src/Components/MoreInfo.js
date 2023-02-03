function MoreInfo(props) {
    const {name, username, email, address, phone, website, company} = props

    return (
        <div className={"more-info"}>
            <h3>Description</h3>
            {company.catchPhrase}. {company.bs}
            <div className={'more-info-col'}>
                <div>
                    <div>
                        <h3>Contact Person</h3>
                        {name}
                    </div>
                    <div>
                        <h3>Username</h3>
                        {username}
                    </div>
                    <div>
                        <h3>Email</h3>
                        {email}
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Address</h3>
                        {address.suite} {address.street} {address.city} {address.zipcode}
                    </div>
                    <div>
                        <h3>Website</h3>
                        {website}
                    </div>
                    <div>
                        <h3>Phone</h3>
                        {phone}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo