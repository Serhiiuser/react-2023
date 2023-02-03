import React from 'react';
import {useForm} from "react-hook-form";
// import {usersRequests} from "../../api/requests/requestUsers";
import {commentRequest} from "../../api/requests/commentRequest";

export const CommentsForm = ({setcomments}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({

    })
    const submit =  async (data) => {
        await commentRequest.addComment(data).then(({data}) => setcomments((prevState) =>[...prevState, data]));
        reset()
    }

    return (
        <form onSubmit= {handleSubmit(submit)}>
            <input type="text" placeholder= "name of comments" {...register('name')}/>
            <button>Create new comment</button>
        </form>
    );
};

