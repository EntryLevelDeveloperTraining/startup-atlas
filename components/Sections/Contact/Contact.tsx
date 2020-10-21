export default function Contact() {
  return (
    <div className="bg-contact-bk text-white text-center sm:text-left">
      <section>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="pb-6">Contact Us</h2>
              <p className="pady">
                Te iisque labitur eos, nec sale argumentum scribentur, augue
                disputando in vim. Erat fugit sit at, ius lorem.
              </p>
              <p className="pady-thin">
                Email : company@email.com
                <br />
                Phone : 489-613-4200
                <br />
                Address : 987 Black Avenue, Lehi, Utah
              </p>
            </div>
            <div className="pt-6 sm:pt-0">
              <div className="grid grid-cols-2 gap-4 text-primary">
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Your Name
                  </label>
                  <input name="name" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">
                    Your Email
                  </label>
                  <input name="email" />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea name="email" />
                </div>
                <div className="col-span-2">
                  <button className="btn-primary w-full">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
