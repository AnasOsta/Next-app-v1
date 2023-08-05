import Link from 'next/link';
function Home(){
  return(
    <> 
      <h1>home page</h1>
      
      <Link href="/posts">
        <h4>Posts</h4>
      </Link>
    </>
  )
}
export default Home