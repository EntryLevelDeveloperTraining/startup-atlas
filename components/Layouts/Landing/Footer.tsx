export default function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-secondary">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center md:justify-start items-center">
              Copyright &copy; {new Date().getFullYear()} Entry Level Developer
              Training
            </div>
            <div className="flex justify-center md:justify-end items-center pt-6 md:pt-0">
              <div className="pad-thin">
                <a
                  href="https://www.youtube.com/channel/UCHo5peSzuo7c19MB69QJYdA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social-media"
                >
                  <i className="fab fa-youtube-square" />
                </a>
              </div>
              <div className="pad-thin">
                <a
                  href="https://www.instagram.com/entryleveldevelopertraining"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social-media"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="pad-thin">
                <a
                  href="https://twitter.com/entryleveldeve1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social-media"
                >
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
