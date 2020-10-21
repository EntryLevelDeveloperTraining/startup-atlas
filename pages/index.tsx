import Layout from '@components/Layouts/Landing';
import Cover from '@components/Sections/Cover';
import Features from '@components/Sections/Features';
import LearnMore from '@components/Sections/LearnMore';
import Pricing from '@components/Sections/Pricing';
import Clients from '@components/Sections/Clients';
import Contact from '@components/Sections/Contact';

export default function Index() {
  return (
    <Layout>
      <Cover />
      <Features />
      <LearnMore />
      <Pricing />
      <Clients />
      <Contact />
    </Layout>
  );
}
