import React from 'react';
import {useForm} from "react-hook-form";
import {usersRequests} from "../../api/requests/requestUsers";

export const UsersForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        
    })
    const submit =  async (data) => {
       await usersRequests.createUser(data).then(({data}) => setUsers((prevState) =>[...prevState, data]));
        reset()
    }
    
    return (
        <form onSubmit= {handleSubmit(submit)}>
            <input type="text" placeholder= "username" {...register('username')}/>
            <button>Create new user</button>
        </form>
    );
};

