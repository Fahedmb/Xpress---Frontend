export default function SectionHeaders({subheader,mainheader}){
    return(
        <>
        <h3 className="uppercase text-gray-500 text-semibold leading-4">
        {subheader}
        </h3>
        <h2 className="text-primary font-bold text-2xl italic">
            {mainheader}
        </h2>
        </>
    );
}