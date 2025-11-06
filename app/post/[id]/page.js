import { getPost } from "@/app/lip/getAllPosts"
export async function generateMetadata({params}) {
    const {id} = await params
    const post = await getPost(id)
    return{
        title : post.title,
        description : post.body
    }
}

export default async function post({params}) {
    const {id} = await params
    const post = await getPost(id)
    console.log(post)
    return(
        <div className="w-[75%]">
            <h2>This is post id {id}</h2>
            <h4 className="bg-indigo-200 text-black">{post.title}</h4>
            <p className="bg-indigo-50 text-black mt-2">{post.body}</p>

        </div>
    )
}