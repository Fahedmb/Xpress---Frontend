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
                        <input type="text" placeholder="Username" />
                        <input type="email" disabled={true} placeholder="email" />
                        <input type="text" disabled={true} placeholder="Joined since:" />
                        <input type="text" disabled={true} placeholder="Borrowed books:" />
                        <input type="text" disabled={true} placeholder="Role" />
                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
        </section>
    );
}