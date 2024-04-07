import MainLayout from "@/layout";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <MainLayout>{children}</MainLayout>
    </main>
  );
}
