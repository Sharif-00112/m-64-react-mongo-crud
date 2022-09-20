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

    // UPDATE user
    const handleNameChange = e => {
        // updating Name using option-1
        const updatedName = e.target.value;
        const updatedUser = {name: updatedName, email: user.email};
        setUser(updatedUser);
    }

    const handleEmailChange = e => {
        // updating Email using option-2
        const updatedEmail = e.target.value;
        const updatedUser = {...user};
        updatedUser.email = updatedEmail;
        setUser(updatedUser);
    }

    const handleUpdateUser = e => {
        e.preventDefault();
        const url = `http://localhost:3001/users/${id}`;
        fetch (url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully!')
                setUser({});
            }
        })
    }

    return (
        <div>
            <h2>Update User: {user.name}, {user.email}</h2> 
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