"use client";
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage(){
    const [username, setUsername] = useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    async function handleFormSubmit(ev){
        ev.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:9090/api/auth/signup', {username, password, email});
            console.log(response.data);
            toast.success('Signup successful');
        } catch (error) {
            console.error('Registration failed', error);
            toast.error('Registration failed');
        }
    }

    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="text" placeholder="username" value={username} onChange={ ev=>setUsername(ev.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={ ev=>setEmail(ev.target.value)}/>
                <input type="password" placeholder="password"value={password} onChange={ ev=>setPassword(ev.target.value)}/>
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">Or login with provider</div>
                <button className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt={''} width={24} height={24}/>
                    Log in with google
                </button>
            </form>
            <ToastContainer />
        </section>
    );
}