
import Comments from "@/app/components/Comments"
import getPost from "@/app/lip/getPost"
import getPostComments from "@/app/lip/getPostComment"
import { Suspense } from "react"
export async function generateMetadata({params}) {
    const {id} =await params
    const post = await getPost(id)
    return{
        title : post.title,
        description : post.body
    }
}

export default async function Post({params}) {
    const {id} = await params
    const postPromise = getPost(id)
    const post = await postPromise
    const commentsPromise =getPostComments(id)
    // const [post , comments] = await Promise.all([postPromise , commentsPromise])

    return(
        <div className="w-[75%]">
            <h2>This is post id {id}</h2>
            <h4 className="bg-indigo-200 text-black">{post.title}</h4>
            <p className="bg-indigo-50 text-black mt-2">{post.body}</p>

            <div className="mt-10">
                <h3>comments</h3>
                <Suspense fallback ="<h1>Loading comments...</h1>">
                <Comments promise ={commentsPromise}/>
                </Suspense>
            </div>
        </div>
    )
}