import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
    const blogs =[
        {
            id : 1,
            title: "blog 1",
            des : "blog 1 description"
        },
        {   id : 2,
            title : "blog 2",
            des : "blog 2 description"
        },
        {   id : 3,
            title : "blog 3",
            des : "blog 3 description"
        },
    ]
  return <div>
    <ul>
        {blogs.map((blog ,index) =>(
         <Link key={index} href={`/blog/${blog.id}`} >   <li className=' cursor-pointer'>{blog.title}</li></Link>
        ))}
    </ul>
  </div>
}
