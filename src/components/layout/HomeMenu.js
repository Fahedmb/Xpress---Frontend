
import HomeGrid from '@/components/Grid/HomeGrid'; // Import the 'HomeGrid' component
import SectionHeaders from '@/components/layout/SectionHeaders'; // Import the 'SectionHeaders' component
export default function HomeMenu(){
    return(
        <section className="">
                        <div className="text-center mb-4">
                            <SectionHeaders 
                                subheader={'What we bring to the table'}
                                mainheader={'Features'}/>
                        </div>
            <div className="grid grid-cols-3 gap-4">
            <HomeGrid
                tit={'Speed'}
                txt={'HR Pro accelerates your HR processes, ensuring swift and efficient management. Experience the power of lightning-fast tasks, so you can focus on what truly matters – building a thriving workplace.'}
                im={'/LightEmojie.png'}
            />
               <HomeGrid
                tit={'Security'}
                txt={'Your data\'s fortress – HR Pro prioritizes the security of your sensitive information. With robust measures in place, trust that your HR data is handled with the utmost confidentiality and integrity.'}
                im={'/secure.png'}
               />
               <HomeGrid
                tit={'Flexibility'}
                txt={'HR Pro adapts to your business needs. Whether you\'re a startup or an enterprise, our app offers unparalleled flexibility, making it easy to customize and scale your HR management effortlessly.'}
                im={'/Flexibility.png'}
               />
               <HomeGrid
                tit={'Innovation'}
                txt={'Stay ahead in HR practices with HR Pro\'s innovative features. We\'re committed to continuous improvement, providing you with cutting-edge tools that keep your HR strategies modern and effective.'}
                im={'/Innovation.png'}
               />
               <HomeGrid
                tit={'User-Friendly'}
                txt={'Navigate HR tasks with ease. HR Pro\'s user-friendly interface ensures a seamless experience, making HR management simple and accessible to all levels of users within your organization.'}
                im={'/User-Friendly.png'}
               />
               <HomeGrid
                tit={'Connectivity'}
                txt={'Connect and collaborate effortlessly with HR Pro. Our app fosters communication and teamwork, bringing your entire organization together to enhance HR processes and create a more connected workplace.'}
                im={'/Connectivity.png'}
               />
               
            </div>
        </section>
    );
}