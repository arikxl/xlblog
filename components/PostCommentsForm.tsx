import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    _id: string;
    name: string;
    email: string;
    comment: string;
}
type Props = {
    postId: string
}


const PostCommentsForm = ({ postId }: Props) => {

    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        fetch("/api/createComment", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(() => {
                setSubmitted(true)
        }).catch((error) => {
            setSubmitted(false)
        })

    }

    return (
        <div>
            <p className="text-xs text-secondaryColor uppercase font-titleFont font-bold">
                Enjoyed this post?
            </p>
            <h3 className="text-3xl font-titleFont font-bold">Leave a comment below!</h3>
            <hr className="py-3 mt-2" />
            <input {...register("_id")} type="hidden" name="_id" value={postId} />
            <form className="mt-7 flex flex-col gap-6"
                onSubmit={handleSubmit(onSubmit)}>
                <label className="flex flex-col">
                    <span className="font-titleFont font-semibold text-base">Name</span>
                    <input
                        {...register("name", { required: true })}
                        type="text" placeholder='Who are you?'
                        className="text-base placeholder:text:sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor" />
                </label>

                <label className="flex flex-col">
                    <span className="font-titleFont font-semibold text-base">Email</span>
                    <input
                        {...register("email", { required: true })}
                        type="email" placeholder='whats your mail?'
                        className="text-base placeholder:text:sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor" />
                </label>

                <label className="flex flex-col">
                    <span className="font-titleFont font-semibold text-base">Comment</span>
                    <textarea
                        {...register("comment", { required: true })}
                        placeholder='Comment here please' rows={5}
                        className="text-base placeholder:text:sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor" />
                </label>

                <button type="submit"
                    className="bg-bgColor w-full text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300">
                    Submit
                </button>

            </form>
        </div>
    )
}

export default PostCommentsForm