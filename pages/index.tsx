import { useEffect } from 'react';
import Layout from '@components/Layouts/Landing';
import Header from '@components/Sections/Header';
import Cover from '@components/Sections/Cover';
import Features from '@components/Sections/Features';
import Pricing from '@components/Sections/Pricing';
import WhosUsing from '@components/Sections/WhosUsing';
import Testimonials from '@components/Sections/Testimonials';
import Contact from '@components/Sections/Contact';
import Footer from '@components/Sections/Footer';
import Aos from 'aos';

export default function Index() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Layout>
      <Header />
      <Cover />
      <Features />
      <Pricing />
      <WhosUsing />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  );
}
