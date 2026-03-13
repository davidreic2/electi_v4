import Navbar from "@/components/electi/Navbar";
import Footer from "@/components/electi/Footer";

function PhotoGrid({
  large,
  midTop,
  midBottom,
  rightTop,
  rightBottom,
}: {
  large: string;
  midTop: string;
  midBottom: string;
  rightTop: string;
  rightBottom: string;
}) {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[432px] items-stretch gap-3 rounded-2xl overflow-hidden w-full">
      {/* Large left image */}
      <div className="w-full md:w-[40%] flex-shrink-0 rounded-xl md:rounded-l-xl md:rounded-r-none overflow-hidden">
        <img src={large} alt="Electi na prática" className="w-full h-[260px] md:h-full object-cover" />
      </div>

      {/* Middle column */}
      <div className="flex flex-row md:flex-col gap-3 flex-1 min-w-0">
        <img src={midTop} alt="Electi na prática" className="flex-1 w-full h-[180px] md:h-auto object-cover min-h-0 rounded-xl md:rounded-none" />
        <img src={midBottom} alt="Electi na prática" className="flex-1 w-full h-[180px] md:h-auto object-cover min-h-0 rounded-xl md:rounded-none" />
      </div>

      {/* Right column */}
      <div className="flex flex-row md:flex-col gap-3 flex-1 min-w-0">
        <img src={rightTop} alt="Electi na prática" className="flex-1 w-full h-[180px] md:h-auto object-cover min-h-0 rounded-xl md:rounded-none" />
        <div
          className="flex-1 relative overflow-hidden flex items-end p-4 rounded-xl md:rounded-none min-h-[180px] md:min-h-0"
          style={{
            backgroundImage: `url('${rightBottom}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
}

export default function NaPratica() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Navbar />
      <main className="flex-1">
      {/* ── Hero ── */}
      <section
        className="flex flex-col items-center gap-14 pb-16 md:pb-18 pt-28 md:pt-32 px-4"
        style={{
          background: `url('/images/9318f3c52e6a2d81807868aea132233f3a678f7d.webp') #AECB3C center / cover no-repeat`,
        }}
      >
        {/* Heading */}
        <h1
          className="text-center tracking-[0.1px]"
          style={{ fontSize: "clamp(36px, 7vw, 84px)", lineHeight: "1.1" }}
        >
          <span className="font-normal text-[#5B4696]">A Electi</span>{" "}
          <span className="font-bold text-white">na prática</span>
        </h1>
      </section>

      {/* ── Projetos dos estudantes ── */}
      <section className="flex flex-col items-center gap-8 md:gap-10 px-4 md:px-8 lg:px-[135px] py-10 md:py-14 bg-[#FAB834]">
        <h2 className="text-[#5B4696] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center">
          Projetos dos estudantes
        </h2>
        <PhotoGrid
          large="/images/4797d345c0bfa2f649cab5cb79c69614e2679372.webp"
          midTop="/images/461f36c80ade8e5b6da42c48b1924dd6a4fe65b4.webp"
          midBottom="/images/1a68937d6b44f1c020218fcf7458a6b39f7de8c9.webp"
          rightTop="/images/29d7e3acd024caaa349d339f2a64874dbb246b19.webp"
          rightBottom="/images/c2b5928e1c3844197fcda7deeb5a0134fec6e207.webp"
        />
      </section>

      {/* ── Relatório diagnóstico para cada escola ── */}
      <section className="flex flex-col items-center gap-8 md:gap-10 px-4 md:px-8 lg:px-[135px] py-10 md:py-14 bg-[#5B4696]">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center">
          Relatório diagnóstico para cada escola
        </h2>
        <PhotoGrid
          large="/images/ecb409a0c9c78495383c1f98d9f384add95116fe.webp"
          midTop="/images/008f1acd97b56f57960e369a9c1e5fc395e27165.webp"
          midBottom="/images/2a6240884b3361c3f432137b37e1a8d3dbeccce8.webp"
          rightTop="/images/8b14e35c0f4954a7b6f151f64102b07201a154c5.webp"
          rightBottom="/images/dd961f5166d1e66235a884280f3ef94677cd5e51.webp"
        />
      </section>

      {/* ── Guias temáticos e formação continuada ── */}
      <section className="flex flex-col items-center gap-8 md:gap-10 px-4 md:px-8 lg:px-[135px] py-10 md:py-14 bg-[#34B7C0]">
        <h2 className="text-[#5B4696] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center">
          Guias temáticos e formação continuada
        </h2>
        <PhotoGrid
          large="/images/f9d0420bce42e315e68626eb6e2cc90b346875ca.webp"
          midTop="/images/a32736f79e63b97c0681973f6d3333f308a5c621.webp"
          midBottom="/images/e2c6580dda876291dd673d7d4c0b14bc46de259b.webp"
          rightTop="/images/259ac071132526a359cc64563cc5127f498847f8.webp"
          rightBottom="/images/3a2837cea8d1502370f3a6a71a7ad0852d4f40ef.webp"
        />
      </section>

      </main>
      <Footer />
    </div>
  );
}
