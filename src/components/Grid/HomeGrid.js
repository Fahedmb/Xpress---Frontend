import Image from "next/image";

export default function HomeGrid({tit,txt,im}){
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-primary/40">
            <div className="text-center">
                <img src={im} className="max-h-auto w-24 block mx-auto" alt="emoji"/>
            </div>
        <h4 className="font-semibold text-xl my-4">
            {tit}
        </h4>
        <p className="text-gray-500 text-sm">
            {txt} 
        </p>
    </div>
    );
}