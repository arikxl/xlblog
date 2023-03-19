import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react"


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

    const { data: session } = useSession();
    const [submitted, setSubmitted] = useState(false);
    const [userError, setUserError] = useState("");
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

    const handleUserErr = () => {
        if (!session) {
            setUserError("Please sign in before you comment")
        } else {
            setUserError("")
        }
    }

    const Message = () => {
        return (
            <div className="flex flex-col items-center gap-2 p-10 my-10
                     bg-bgColor text-white mx-auto">
                <h1 className="text-2xl font-bold">Thank you for commenting!</h1>
                <p>Once it has been approved, it will be appear below</p>
            </div >
        )
    };

    return (
        <>
            {submitted
                ? <Message />
                : (
                    <div>
                        <p className="text-xs text-secondaryColor uppercase font-titleFont font-bold">
                            Enjoyed this post?
                        </p>
                        <h3 className="text-3xl font-titleFont font-bold">
                            Leave a comment below!
                        </h3>
                        <hr className="py-3 mt-2" />
                        <input {...register("_id")} type="hidden" name="_id" value={postId} />
                        <form className="mt-7 flex flex-col gap-6"
                            onSubmit={handleSubmit(onSubmit)}>
                            <label className="flex flex-col">
                                <span className="font-titleFont font-semibold text-base">Name</span>
                                <input
                                    {...register("name", { required: true })}
                                    type="text" placeholder='Who are you?'
                                    value={session ? session?.user!.name! : ""}
                                    className="text-base placeholder:text:sm border-b-[1px]
                         border-secondaryColor py-1 px-4 outline-none
                         focus-within:shadow-xl shadow-secondaryColor" />
                            </label>

                            <label className="flex flex-col">
                                <span className="font-titleFont font-semibold text-base">Email</span>
                                <input
                                    {...register("email", { required: true })}
                                    type="email" placeholder='whats your mail?'
                                    value={session ? session?.user!.email! : ""}
                                    className="text-base placeholder:text:sm border-b-[1px]
                         border-secondaryColor py-1 px-4 outline-none
                          focus-within:shadow-xl shadow-secondaryColor" />
                            </label>

                            <label className="flex flex-col">
                                <span className="font-titleFont font-semibold text-base">Comment</span>
                                {errors.comment && (
                                    <p className="text-sm font-titleFont font-semibold text-red-500 my-1 px-4">Don't forget to comment...</p>  
                                ) }
                                <textarea
                                    {...register("comment", { required: true })}
                                    placeholder='Comment here please' rows={5}
                                    className="text-base placeholder:text:sm border-b-[1px]
                                     border-secondaryColor py-1 px-4 outline-none
                                    focus-within:shadow-xl shadow-secondaryColor" />
                            </label>

                            <button type={session ? "submit" : "button"}
                                onClick={session ? handleSubmit(onSubmit) : handleUserErr}
                                className="bg-bgColor w-full text-white text-base
                                font-titleFont font-semibold tracking-wider uppercase py-2
                                 rounded-sm hover:bg-secondaryColor duration-300">
                                Submit
                            </button>
                        </form>
                        {userError && (
                            <p className="text-sm font-titleFont text-center font-semibold
                                  text-red-500 underline underline-offset-2 my-1 px-4 animate-bounce">
                                {userError}
                            </p>
                        )}
                    </div>
                )
            }
        </>
    )
}

export default PostCommentsForm