export default function Pricing() {
  return (
    <div className="text-center">
      <section className="p-0">
        <div className="p-0 sm:p-6 pb-16 sm:pb-16">
          <div className="pt-16 sm:py-16 px-6">
            <h2>Check our Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center">
            <div
              data-aos={'fade-right'}
              data-aos-delay={0}
              data-aos-duration={1000}
              data-aos-once={true}
            >
              <div className="py-16">
                <h5>STARTUP</h5>
                <div className="pt-4">
                  <span className="font-bold">$</span>
                  <span className="text-6xl font-bold">0</span>
                  <span className="font-bold">/ MO.</span>
                </div>
                <div className="pad">
                  <p>Up to 5 Documents</p>
                  <p>Up to 3 Reviews</p>
                  <p>5 Team Members</p>
                  <p>Limited Support</p>
                </div>
                <div className="pad">
                  <button className="btn">Get Free</button>
                </div>
              </div>
            </div>
            <div
              data-aos={'fade-up'}
              data-aos-delay={0}
              data-aos-duration={1000}
              data-aos-once={true}
              className="bg-secondary text-white"
            >
              <div className="py-16">
                <h5>PREMIUM</h5>
                <div className="pt-4">
                  <span className="font-bold">$</span>
                  <span className="text-6xl font-bold">10</span>
                  <span className="font-bold">/ MO.</span>
                </div>
                <div className="pad">
                  <p>Up to 15 Documents</p>
                  <p>Up to 10 Reviews</p>
                  <p>25 Team Members</p>
                  <p>Limited Support</p>
                </div>
                <div className="pad">
                  <button className="btn-primary">Get Free</button>
                </div>
              </div>
            </div>
            <div
              data-aos={'fade-left'}
              data-aos-delay={0}
              data-aos-duration={1000}
              data-aos-once={true}
            >
              <div className="py-16">
                <h5>PROFESSIONAL</h5>
                <div className="pt-4">
                  <span className="font-bold">$</span>
                  <span className="text-6xl font-bold">30</span>
                  <span className="font-bold">/ MO.</span>
                </div>
                <div className="pad">
                  <p>Unlimited Documents</p>
                  <p>Unlimited Reviews</p>
                  <p>Unlimited Members</p>
                  <p>Unlimited Support</p>
                </div>
                <div className="pad">
                  <button className="btn">Get Free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
