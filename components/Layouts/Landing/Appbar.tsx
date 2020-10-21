import Nav from './Nav';

export default function Appbar() {
  return (
    <div className="absolute w-full">
      <section>
        <div className="flex justify-between items-center w-full sm:py-8">
          <img src="img/logo.png" className="w-20" />
          <Nav />
        </div>
      </section>
    </div>
  );
}
