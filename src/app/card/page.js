'use client';

import Image from "next/image";

async function HandleCardInfoUpdate(ev){
}

export default function CardPage() {
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Card
            </h1>
            <form className="max-w-md mx-auto">
                <div className="flex gap-4 items-center">
                    <div className="p-2 rounded-lg relative">
                        <Image className="rounded-lg mb-2" src={'/card.png'} width={250} height={250} alt="avatar" />
                    </div>
                    <div className="grow" onSubmit={HandleCardInfoUpdate}>
                        <input type="number" disabled={true} placeholder="Card number" />
                        <input type="text" disabled={true} placeholder="Card type" />
                        <input type="date" disabled={true} placeholder="Card expiration date" />
                        <input type="date" disabled={true} placeholder="created At" />
                    </div>
                </div>
            </form>
        </section>
    );
}