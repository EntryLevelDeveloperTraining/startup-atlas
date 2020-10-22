import { Transition } from '@headlessui/react';

export default function Cover() {
  return (
    <div className="bg-banner-bk text-white text-center md:text-left">
      <Transition
        as="div"
        show={true}
        appear={true}
        enter="transition-opacity delay-500 duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <section>
          <div className="h-32" />
          <h1 className="pady">
            A New Way
            <br />
            To Start Business
          </h1>
          <p className="pady">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            dolor adipisci
            <br />
            dicta dolores qui quaerat iure cumque perspiciatis mollitia
            accusamus ex aliquam et.
          </p>
          <div className="pady">
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="h-8 sm:h-16" />
        </section>
      </Transition>
    </div>
  );
}
