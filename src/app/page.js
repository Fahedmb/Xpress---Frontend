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
        Welcome to Xpress Library – a place where stories come alive and knowledge meets curiosity. <br />Born from a family's passion for literature and learning, Xpress stands as a testament to the timeless power of books. <br />Our journey began more than a sentury ago,since 1896 , inspired by the vision of my grampa ,god bless his soul, who believed in creating a space where the community could come together to share the joy of reading.
        </p>
        <SectionHeaders 
          subheader={''}
          mainheader={'What We Do'}
          />
        <p className="mt-4 mb-4 flex-col gap-4">
        At Xpress, we do more than just lend books. We cultivate a haven for readers of all ages and interests. <br />Our shelves are home to a rich tapestry of genres – from the classic tales that have stood the test of time to the latest bestsellers and educational resources. <br />Whether you're a student, a casual reader, or a research enthusiast, our collection is curated to spark your imagination and satisfy your thirst for knowledge.
        </p>
        <SectionHeaders 
          subheader={''}
          mainheader={'Our Community'}
          />
        <p className="mt-4 mb-4 flex-col gap-4">
        Community is at the heart of everything we do. <br />Xpress is more than a library; it's a meeting ground for minds, a place for cultural exchange, and a hub for lifelong learning. <br />We will soon start host regular events, workshops, and book clubs, fostering a vibrant community of book lovers and learners.
        </p>
        <SectionHeaders 
          subheader={''}
          mainheader={'Our Commitment'}
          />
        <p className="mt-4 mb-4 flex-col gap-4">
        In an ever-evolving digital world, we stay true to the essence of a traditional library while embracing the convenience of modern technology. <br />Our commitment is to provide an accessible, welcoming, and inclusive environment for all. <br />We believe in the power of books to enlighten, educate, and entertain, and we strive to make this wealth of knowledge available to everyone in our community.
        </p>
        <p><br /><br /></p>
        <SectionHeaders 
          subheader={'What are you waiting for?'}
          mainheader={'Join Us'}
          />
        <p className="mt-4 mb-4 flex-col gap-4">
        We invite you to explore our collection, participate in our events, and become a part of the Xpress family. <br />Whether through the pages of a book or in the company of fellow readers!<br />we look forward to sharing and creating stories with you.
        </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
          subheader={'If you have any questions, don\'t hesitate!'}
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
