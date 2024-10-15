import UserNavbar from "@/components/navbar/userNavbar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <UserNavbar />
      {children}
    </div>
  );
}
