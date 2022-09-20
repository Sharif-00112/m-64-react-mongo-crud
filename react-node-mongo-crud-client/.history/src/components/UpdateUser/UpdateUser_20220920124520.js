import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect(()=>{
        const url = `http://localhost:3001/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    } ,[])

    return (
        <div>
            <h2>Update User: {user.name}</h2> 
            <p>ID: <small>{id}</small></p>
        </div>
    );
};

export default UpdateUser;