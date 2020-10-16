interface Props {
  children: React.ReactNode;
}

export default function Landing(props: Props) {
  const { children } = props;
  return <>{children}</>;
}
