import Footer from "@/components/UI/Footer/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <Footer />
    </>
  );
}
