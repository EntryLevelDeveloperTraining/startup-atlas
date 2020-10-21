export default function Features() {
  return (
    <div className="text-center">
      <section>
        <div className="py-16">
          <h2>Smartest protection for your site</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div
            data-aos={'fade-up'}
            data-aos-delay={0}
            data-aos-duration={1000}
            data-aos-once={true}
          >
            <img src={'img/smart-protect-1.jpg'} className="mx-auto" />
            <h4>Anti-Spam</h4>
            <div className="pad">
              <p className="text-lg">
                Lorem ipsum dolor sit amet porro his no his deleniti
              </p>
            </div>
          </div>
          <div
            data-aos={'fade-up'}
            data-aos-delay={200}
            data-aos-duration={1000}
            data-aos-once={true}
          >
            <img src={'img/smart-protect-2.jpg'} className="mx-auto" />
            <h4>Phishing Detect</h4>
            <div className="pad">
              <p className="text-lg">
                Ne error antiopam usu. Sed vocen concludaturque ea
              </p>
            </div>
          </div>
          <div
            data-aos={'fade-up'}
            data-aos-delay={400}
            data-aos-duration={1000}
            data-aos-once={true}
          >
            <img src={'img/smart-protect-3.jpg'} className="mx-auto" />
            <h4>Smart Scan</h4>
            <div className="pad">
              <p className="text-lg">
                {' '}
                Et usu ocurreret elaboraret doctus prodesse assueverit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
