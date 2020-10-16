export default function Cover() {
  return (
    <section
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(img/banner-bk.jpg)' }}
    >
      <div
        data-aos="fade"
        data-aos-duration={1000}
        data-aos-once={true}
        className="container mx-auto px-8 pt-20 pb-10 sm:px-20 sm:pt-40 sm:pb-20"
      >
        <h1 className="text-5xl sm:text-6xl font-bold my-10 leading-none">
          A New Way
          <br />
          To Start Business
        </h1>
        <p className="my-10 text-xl font-light">
          Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico
          mentitum duo.
          <br />
          Illum iusto laoreet his te. Lorem partiendo mel ex. Ad vitae admodum
          voluptatum per.
        </p>
        <div className="text-center sm:text-left">
          <a href="#" className="btn my-2 sm:my-5">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
