import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '../sanity';
import { Post } from "../typings";


type Props = {
    post: Post;
}

const PostPreview = ({ post }: Props) => {

    return (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border-[1px] border-secondaryColor border-opacity-40
             h-[450px] group ">
                <div className="h-3/5 w-full overflow-hidden">
                    <Image width={380} height={350} alt={post.title}
                        src={urlFor(post.mainImage).url()!}
                        className="w-full h-full object-cover brightness-75
                         group-hover:brightness-100 duration-300 group-hover:scale-110"
                    />
                </div>
                <div className="h-2/5 w-full flex flex-col justify-center">
                    <div className="flex justify-between items-center px-4 py-1 border-b-[1px] border-b-gray-500">
                        <p className="font-titleFont text-xl font-bold">{post.title}</p>
                        <img src={urlFor(post.author.image).url()!}
                            alt={post.author.name}
                            className="rounded-full w-12 h-12 object-cover" />
                    </div>
                    <p className="py-2 px-4 text-base">
                        {post.description.substring(0, 60)}...  by -
                        <span className="font-semibold">{post.author.name}</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default PostPreview