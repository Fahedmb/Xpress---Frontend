import Image from "next/image";
import In from "../icons/in";
import Right from "../icons/Right";


export default function Hero(){
    return(
        <section className="hero mt-4">
        <div className="py-16">
            <h1 className="text-4xl font-semibold">
            Elevate&nbsp; <span className="text-primary">HR</span><br />
            Using&nbsp; <span className="text-primary">HRPRO</span>
            </h1>
            <p className="mt-8 text-gray-500 text-sm"> At HR Pro, we believe in the power of seamless HR management. Our innovative tools are crafted to simplify complexities, secure your data with utmost precision, and empower your business for success. We're not just redefining HR; we're revolutionizing the way you experience it. With HR Pro, embrace a future where efficiency meets empowerment, and where every HR task is a step towards a brighter, more productive workplace.<br/> Welcome to the era of HR Pro – where simplicity, security, and success converge seamlessly.</p>
            <div className="flex gap-4 text-sm mt-8">
              <button className="bg-primary text-white px-4 py-2 rounded-full flex gap-2 uppercase items-center">
                Enroll now
                <In />
              </button>
              <button className="flex gap-2 py-2 text-gray-500 text-semibold">
                Learn More
                <Right />
              </button>
            </div>
        </div>
        <div className="relative">
          <Image src={'/pngwing.png'} layout={'fill'} objectFit={'contain'} alt={'HRPro'} />
        </div>
    </section>
    );
}