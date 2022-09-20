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
    } ,[id]);

    const handleNameChange = e => {
        console.log(e.target.value);
    }

    const handleEmailChange = e => {

    }

    const handleUpdateUser = e => {
        e.preventDefault();

    }

    return (
        <div>
            <h2>Update User: {user.name}</h2> 
            <p>ID: <small>{id}</small></p>
            <form onSubmit={handleUpdateUser}>
                <input type="text" value={user.name || ''} onChange={handleNameChange}/>
                <br />
                <input type="text" value={user.email || ''} onChange={handleEmailChange}/>
                <br /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;