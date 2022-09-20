import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3001/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2>Available Users: {users.length}</h2> 

            <ul>
                {
                    users.map(user => <li key={user._id}>
                        {user.name} :: {user.email}
                        <button>X</button>
                        <button>Update</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;