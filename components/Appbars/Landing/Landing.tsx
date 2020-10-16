import Navbar from '@components/Navigation/Navbar';

export default function Landing() {
  return (
    <div className="container mx-auto px-10 py-5 sm:px-20 sm:py-16">
      <div className="flex justify-between items-center w-full">
        <div>
          <img src="img/logo.png" className="w-20" />
        </div>
        <div className="text-white">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
