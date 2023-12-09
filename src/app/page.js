import SectionHeaders from '@/components/layout/SectionHeaders';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';


export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders 
          subheader={'Our Story'}
          mainheader={'About us'}
        />
        <div className="max-w-md mx-auto text-gray-500 mt-4 flex-col gap-4">
        <p className="mt-4 mb-4 flex-col gap-4">
        Welcome to HR Pro, your go-to solution for modern and efficient human resources management. At HR Pro, were dedicated to simplifying HR processes, empowering businesses of all sizes to focus on what they do best. 
        </p>
        <SectionHeaders 
          subheader={''}
          mainheader={'Our Mission'}
        />
        <p className="mt-4 mb-4 flex-col gap-4">
        At HR Pro, our mission is to redefine HR management through innovation and user-centric design. We aim to provide organizations with the tools they need to optimize their human capital, foster growth, and build a thriving workplace culture. 
        </p>
        <SectionHeaders 
          subheader={''}
          mainheader={'Meet the HR Pro Team'}
        />
        <p className="mt-4 mb-4 flex-col gap-4">
        Behind HR Pro is a dedicated team of professionals with a passion for enhancing HR experiences. Our team combines expertise in technology, HR, and design to create a product that meets your unique needs. 
        </p>
        <SectionHeaders 
          subheader={''}
          mainheader={'Connect With HR Pro'}
        />
        <p className="mt-4 mb-4 flex-col gap-4">
        Your success is our priority. Connect with us on social media links or reach out to our dedicated customer support for any questions, assistance, or to share your success stories with HR Pro. 
        </p>
        <p className="mt-4 mb-4 flex-col gap-4">Thank you for choosing HR Pro as your HR management partner. Together, lets elevate your HR practices and create a workplace where your team can thrive.</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
          subheader={'Don\'t hesitate'}
          mainheader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+21620731135">
            +216 20 731 135
          </a>
        </div>
      </section>
     </>
  );
}
