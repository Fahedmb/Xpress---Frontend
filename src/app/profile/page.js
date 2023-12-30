'use client';

import Image from "next/image";

async function HandleProfileInfoUpdate(ev){
}
async function handlePictureChange(ev){
}


export default function ProfilePage() {
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Profile
            </h1>
            <form className="max-w-md mx-auto">
                <div className="flex gap-4 items-center">
                    <div className="p-2 rounded-lg relative">
                        <Image className="rounded-lg h-full w-full mb-2" src={'/newuser.png'} width={250} height={250} alt="avatar" />
                        <label>
                            <input type="file" className="hidden" onChange={handlePictureChange}/>
                            <span className="block border border-grey-300 cursor-pointer rounded-lg p-2 text-center">Upload</span>
                        </label>
                    </div>
                    <div className="grow" onSubmit={HandleProfileInfoUpdate}>
                        <label className="text-gray-500">Username</label>
                        <input type="text" placeholder="Username" />
                        <label className="text-gray-500">Email</label>
                        <input type="email" disabled={true} placeholder="email" />
                        <label className="text-gray-500">Joined since:</label>
                        <input type="date" disabled={true} placeholder="Joined since:" />
                        <div className="flex gap-4 items-center">
                            <div>
                                <label className="text-gray-500">Borrowed books:</label>
                                <input type="number" disabled={true} placeholder="Borrowed books:" />
                            </div>
                            <div>
                                <label className="text-gray-500">Role</label>
                                <input type="text" disabled={true} placeholder="Role" />
                            </div>
                        </div>
                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
        </section>
    );
}