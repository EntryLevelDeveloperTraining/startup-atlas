export default function LearnMore() {
  return (
    <>
      <div className="bg-gradient text-center md:text-left">
        <section>
          <div className="py-12 lg:py-24">
            <div className="flex flex-wrap-reverse">
              <div className="w-full md:w-1/2">
                <div
                  data-aos={'fade-right'}
                  data-aos-delay={0}
                  data-aos-duration={1000}
                  data-aos-once={true}
                >
                  <h2 className="pt-6 md:pt-0">Take a look inside</h2>
                  <div className="pady">
                    <p>
                      Te iisque labitur eos, nec sale argumentum scribentur no,
                      augue disputando in vim. Erat fugit sit at, ius lorem
                      deserunt deterruisset no.
                    </p>
                  </div>
                  <div className="pady-thin">
                    <button className="btn-secondary">Learn More</button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div
                  data-aos={'fade-left'}
                  data-aos-delay={0}
                  data-aos-duration={1000}
                  data-aos-once={true}
                >
                  <img src="/img/feature-1.png" className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-primary text-center md:text-left">
        <section>
          <div className="py-8 lg:py-16">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <div
                  data-aos={'fade-right'}
                  data-aos-delay={500}
                  data-aos-duration={1000}
                  data-aos-once={true}
                >
                  <img src="/img/feature-2.png" className="mx-auto sm:mx-0" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div
                  data-aos={'fade-left'}
                  data-aos-delay={500}
                  data-aos-duration={1000}
                  data-aos-once={true}
                >
                  <h2 className="pt-6 md:pt-0">Safe and reliable</h2>
                  <div className="pady">
                    <p>
                      Duo suas detracto maiestatis ad, commodo lucilius invenire
                      nec ad, eum et oratio disputationi. Falli lobortis his ad
                    </p>
                  </div>
                  <div className="pady-thin">
                    <button className="btn-secondary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
