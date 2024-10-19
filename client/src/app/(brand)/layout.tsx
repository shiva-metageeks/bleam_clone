import UserNavbar from "@/components/navbar/userNavbar";

export default function BrandLayout({
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

