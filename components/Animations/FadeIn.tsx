import { Transition } from '@headlessui/react';

interface Props {
  children: React.ReactNode;
}

export default function FadeIn(props: Props) {
  const { children } = props;
  return (
    <Transition
      show={true}
      appear={true}
      enter="transition-opacity delay-500 duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}
