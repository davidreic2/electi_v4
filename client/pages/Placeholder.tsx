import Navbar from "@/components/electi/Navbar";
import Footer from "@/components/electi/Footer";

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-4 bg-gray-50">
        <div className="text-center max-w-lg">
          <h1 className="font-poppins font-semibold text-[#5B4696] text-4xl mb-4">
            {title}
          </h1>
          <p className="font-poppins text-gray-500 text-lg leading-relaxed">
            Esta página está sendo construída. Continue conversando para preencher o conteúdo desta seção.
          </p>
          <div className="mt-8 w-24 h-1 bg-[#FAB834] mx-auto rounded-full" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
