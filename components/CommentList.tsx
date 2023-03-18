import React from 'react';
import { Comment } from '../typings';

type Props = {
    comments: [Comment]
}

const CommentList = ({ comments }: Props) => {
    return (
        <div className="w-full flex flex-col p-10 my-10 mx-auto shadow-bgColor shadow-lg space-y-2">
            <h3 className="text-3xl font-titleFont font-semibold">Comments</h3>
            <hr />
            {
                comments.map(comment => (
                    <div key={comment._id}>
                        <p>
                            <span className="text-secondaryColor">
                            {comment.name} :  </span>
                             {comment.comment}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default CommentList