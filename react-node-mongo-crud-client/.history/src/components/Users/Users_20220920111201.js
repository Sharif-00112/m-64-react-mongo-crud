import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [users])

    //DELETE an user
    const handleDeleteUser = id =>{
        const url = `http://localhost:3001/users/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deleteCount > 0){
                alert('Deleted Successfully!')
            }
        })
    }

    return (
        <div>
            <h2>Available Users: {users.length}</h2> 

            <ul>
                {
                    users.map(user => <li key={user._id}>
                        {user.name} :: {user.email}
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                        <button>Update</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;