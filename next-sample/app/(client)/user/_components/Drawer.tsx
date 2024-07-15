export default function Drawer(props: { open: boolean }) {
  const { open } = props;
  return (
    <nav
      className={`w-full text-left absolute bg-[#F4F4F4] left-0 h-screen flex flex-col px-3 ease-linear duration-100 z-20  ${
        open ? "top-0 justify-start pt-[50px]" : "justify-center top-[-100%]"
      }`}
    ></nav>
  );
}
