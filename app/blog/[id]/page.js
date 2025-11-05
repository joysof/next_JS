export default async function  BlogPage({params}) {
    const {id} =await params
    console.log(id)
    return <div>
        <p>the blog id is {id}</p>
    </div>
}