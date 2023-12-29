"use client";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SigninPage(){
    const [username, setUsername] = useState('');
    const [password,setPassword]=useState('');

    async function handleFormSubmit(ev){
        ev.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:9090/api/auth/signin', {username, password});
            console.log(response.data);
            toast.success('You are Signed in');
    
            // Save the token and role in the local storage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
        } catch (error) {
            console.error('Signin failed', error);
            toast.error('Signin failed');
        }
    }

    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Login
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="text" placeholder="username" value={username} onChange={ ev=>setUsername(ev.target.value)}/>
                <input type="password" placeholder="password"value={password} onChange={ ev=>setPassword(ev.target.value)}/>
                <button type="submit">Login</button>
            </form>
            <ToastContainer />
        </section>
    );
}