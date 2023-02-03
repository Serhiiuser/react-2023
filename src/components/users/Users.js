import React, {useEffect, useState} from 'react';
import {usersRequests} from "../../api/requests/requestUsers";

export const Users = ({users}) => {

    return (
        <div>
        Users
            {users.map(item => {
                const {id , username} = item;
                return(
                    <div key={id}>
                        {id} --- {username}
                    </div>
                )
            })

            }
        </div>
    );
};

