import * as React from "react";
import axios from 'axios';
import { useState, useEffect } from "react"
import User from './User';

function UsersList() {
    const [users, setUsers] = useState([{
        avatar_url: "",
        login: "",
        id: 1
    }])
    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);

    return (
        <div>
            {users.map(user => (
                <User avatar_url={user.avatar_url} login={user.login} key={user.id} />
            ))}
        </div>
    )
}

export default UsersList;
