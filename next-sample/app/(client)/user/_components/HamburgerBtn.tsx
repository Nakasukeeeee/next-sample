export interface HamburgerBtnProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HamburgerBtn(props: HamburgerBtnProps) {
  const { open, setOpen } = props;
  const handleOpen = () => {
    setOpen((prevState: boolean) => !prevState);
  };
  return (
    <button
      onClick={handleOpen}
      className={`hamburger-btn ${open && "active"}`}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
