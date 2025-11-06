export default async function Comments({promise}) {
    const comments = await promise
    console.log('comments ' , comments)
    return(
         <ul>
                   {
                    comments.map((comment) =>(
                        <li key={comment.id}>{comment.body}</li>
                    ))
                   }
                </ul>
    )
} 