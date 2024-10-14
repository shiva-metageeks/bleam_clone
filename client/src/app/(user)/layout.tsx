import { Navbar } from "@/components/user/navbar/navbar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white">
      <Navbar />
      {children}
    </div>
  );
}
