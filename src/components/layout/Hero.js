import Image from "next/image";
import In from "../icons/in";
import Right from "../icons/Right";
import Link from "next/link";


export default function Hero(){
    return(
        <section className="hero mt-4">
        <div className="py-16">
            <h1 className="text-4xl font-semibold">
            Your Nook of &nbsp; <span className="text-primary">Stories and Serenity.</span>
            </h1>
            <p className="mt-8 text-gray-500 text-sm">Welcome to Xpress, a quaint corner where the joy of reading and the warmth of a familiar space come together. <br />Our library, rooted in family tradition, offers you a tranquil retreat from the rush of daily life. Picture a cozy living room, shelves lined with tales of yesteryear and today, waiting to be discovered and cherished. At Xpress, we believe in the simple pleasure of a good book and the quiet moments of reflection it brings. <br />Whether you're revisiting an old favorite or seeking a new adventure in the pages of an unexplored title, our doors are open. <br /><br />Join us in this peaceful haven, find your comfortable spot, and let the world of books envelop you in its embrace.</p>
            <div className="flex gap-4 text-sm mt-8">
              <button className="bg-Raw_umber text-white flex justify-center px-4 py-2 rounded-full gap-2 uppercase items-center">
                Enroll now
                <In />
              </button>
              <button className="flex gap-2 py-2 border-0 items-center text-gray-500 text-semibold">
                Learn More
                <Right />
              </button>
            </div>
        </div>
        <div className="relative">
          <Image src={'/books.png'} layout={'fill'} objectFit={'contain'} alt={'HRPro'} />
        </div>
    </section>
    );
}