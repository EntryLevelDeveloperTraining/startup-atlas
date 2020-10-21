import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aos from 'aos';

interface Props {
  children: React.ReactNode;
}

export default function Landing(props: Props) {
  const { children } = props;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
