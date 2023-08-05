function User({user}){
    return( 
        <>
            <h1>{user.id}</h1>
            <hr />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <br />
        </>
    )
}

export default User