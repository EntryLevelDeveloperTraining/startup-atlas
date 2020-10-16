import Feature from './Feature';

export default function Features() {
  return (
    <section>
      <div className="container mx-auto p-5 lg:p-10">
        <h2 className="text-4xl sm:text-5xl font-semibold p-6 sm:p-12 leading-none text-center">
          Smartest protection for your site
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 min-height-full">
          <Feature img="img/smart-protect-1.jpg" title="Anti-Spam" delay={0}>
            Lorem ipsum dolor sit amet porro his no his deleniti
          </Feature>
          <Feature
            img="img/smart-protect-2.jpg"
            title="Phishing Detect"
            delay={200}
          >
            Ne error antiopam usu. Sed vocen concludaturque ea
          </Feature>
          <Feature img="img/smart-protect-3.jpg" title="Smart Scan" delay={400}>
            Et usu ocurreret elaboraret doctus prodesse assueverit.
          </Feature>
        </div>
      </div>
      <div
        className="h-screen"
        style={{
          background: 'linear-gradient(168deg, #ffffff 55%, #00FFAD 0)',
        }}
      ></div>
    </section>
  );
}
