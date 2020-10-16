import FadeUp from '@components/Animations/FadeUp';

interface Props {
  img: string;
  title: string;
  delay: number;
  children: React.ReactNode;
}

export default function Feature(props: Props) {
  const { img, title, delay, children } = props;
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration={1000}
      data-aos-once={true}
      className="mx-auto"
    >
      <img src={img} className="mx-auto" />
      <h4 className="text-center text-2xl">{title}</h4>
      <p className="text-center lg:px-10">{children}</p>
    </div>
  );
}
