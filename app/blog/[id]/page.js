
import Image from 'next/image'
import img from '@/public/images/img.jpg'
export default async function  BlogPage({params}) {
    const {id} =await params
    console.log(id)
    return <div>
        <p>the blog id is {id}</p>
        <Image src={img} alt="this is a img"/>
    </div>
}