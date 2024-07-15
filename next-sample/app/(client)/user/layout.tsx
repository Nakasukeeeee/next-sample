import HeaderAndDrawer from "./_components/HeaderAndDrawer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col relative items-center min-h-screen max-w-[750px] w-full">
        <HeaderAndDrawer />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}
