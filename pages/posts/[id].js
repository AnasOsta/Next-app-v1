function Post(props){
    return (
        <div>
            <h1>Id : {props.posts.id}</h1>
            <hr />
            <p>Title : {props.posts.title}</p>
            <p>Body : {props.posts.body} </p>
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