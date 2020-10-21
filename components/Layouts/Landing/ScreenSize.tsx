export default function ScreenSize() {
  return (
    <div className="fixed top-0 right-0 p-6 w-8 h-8 bg-white border flex justify-center items-center opacity-75">
      <div className="block sm:hidden md:hidden lg:hidden">XS</div>
      <div className="hidden sm:block md:hidden lg:hidden">SM</div>
      <div className="hidden sm:hidden md:block lg:hidden">MD</div>
      <div className="hidden sm:hidden md:hidden lg:block">LG</div>
    </div>
  );
}
