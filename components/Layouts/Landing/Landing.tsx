import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export default function Landing(props: Props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
