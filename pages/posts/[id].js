function Post(props){
    return (
        <div>
            <h1>{props.posts.id}</h1>
            <hr />
            <p>{props.posts.title}</p>
            <p>{props.posts.body} </p>
        </div>
    )
}

export async function getServerSideProps(context){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id)
    const data = await response.json()
    
    return {
        props: {
            posts: data,
        },
    }
}


export default Post