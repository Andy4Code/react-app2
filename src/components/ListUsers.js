import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUsers()
{

    const [users,setUsers] = useState([]);
    useEffect(()=>{
        getUsers();
    },[]);

    function getUsers(){
        axios.get('http://localhost/react/api/users').then(response => {
            console.log(response.data)
            setUsers(response.data);
        });
    }


    const deleteUser = id => {
        axios.delete(`http://localhost/react/api/user/${id}/delete  `)
        .then((response)=>{
            console.log(response.data);
            console.log('delete')
            getUsers();
        })
    }
    return(
    <>
        <h1>ListUsers</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,key)=>
                        <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>
                            <Link to={`user/${user.id}/edit`}>Edit</Link>
                            <button onClick={()=> deleteUser(user.id)}>Del</button>
                        </td>
                    </tr>
                    )}
                
            </tbody>
        </table>
    </>
    );
}