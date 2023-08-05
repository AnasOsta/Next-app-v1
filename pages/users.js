import Users from '../components/user'
function users({ users }){
    return (
        <>
            {
                users.map((user)=>{
                    return(
                    <dev key={user.id}>
                        <Users user = {user}/>
                    </dev>)
                })
            }
        </>
    )
}

export default users

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            users: data,
        },
    }
}