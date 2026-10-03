import Banner from '@/components/homepage/Banner';
import Books from '@/components/homepage/Books';
import Footer from '@/components/shared/Footer';

const page = () => {
  return (
    <div>
      <Banner/>
      <Books/>
      <Footer/>
    </div>
  );
};

export default page;