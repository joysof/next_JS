export default async function getAllPosts(){
    const result = await fetch("https://jsonplaceholder.typicode.com/posts")

    return result.json()
}
export async function getPost(id){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return result.json()
}