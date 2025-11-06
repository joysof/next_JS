import Link from "next/link"
import getAllPosts from "../lip/getAllPosts"

export default async function Posts() {
    const posts = await getAllPosts()
    return(
        <div>
            <h1 className="mt-5">All Posts</h1>
            <ul>
                {posts.map((post) =>(
                    <li className="mt-3 bg-indigo-300 text-black" key={post.id}><Link href={`/post/${post.id}`}>{post.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}