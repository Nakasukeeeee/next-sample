import { HamburgerBtn, HamburgerBtnProps } from "./HamburgerBtn";

export default function Header(props: HamburgerBtnProps) {
  return (
    <header className="shadow-md flex justify-between items-center z-30 w-full bg-[#fff] sticky top-0">
      <div>物品管理</div>
      <div>
        <HamburgerBtn {...props} />
      </div>
    </header>
  );
}
