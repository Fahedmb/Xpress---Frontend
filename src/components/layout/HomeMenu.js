
import HomeGrid from '@/components/Grid/HomeGrid'; // Import the 'HomeGrid' component
import SectionHeaders from '@/components/layout/SectionHeaders'; // Import the 'SectionHeaders' component


export default function HomeMenu(){
    return(
        <section className="">
            
            <div className="text-center mb-4">
                <SectionHeaders 
                    subheader={'As a reader at Xpress, here are some of your'}
                    mainheader={'Privilages:'}/>
            </div>
            <div className="grid grid-cols-3 gap-4">
            <HomeGrid
                tit={'Safe & Secure'}
                txt={'Your privacy matters. Enjoy peace of mind knowing your personal information is always protected with us.'}
                im={'/secure.png'}
               />
                <HomeGrid
                tit={'Books Galore'}
                txt={'Discover your next favorite read from our vast selection of books for all ages and interests.'}
                im={'/bookg.png'}
                 />
               <HomeGrid
                tit={'Quick Service'}
                txt={'No delays here! We\'re all about getting you the books you want, fast and hassle-free.'}
                im={'/LightEmojie.png'}
               />
               <HomeGrid
                tit={'Stay Informed'}
                txt={'Get timely updates on new books and when your requested titles are ready to pick up.'}
                im={'/notifications.png'}
               />
               <HomeGrid
                tit={'Student Friendly'}
                txt={'Special resources and discounts for students to support your learning and exploration.'}
                im={'/student.png'}
               />
               <HomeGrid
                tit={'VIP & Loyalty'}
                txt={'Enjoy special perks and rewards as a thank-you for being our loyal or VIP member.'}
                im={'/star.png'}
               />
               
            </div>
        </section>
    );
}