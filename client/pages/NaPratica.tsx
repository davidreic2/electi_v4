import Navbar from "@/components/electi/Navbar";
import Footer from "@/components/electi/Footer";

const GRID_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"
      fill="#5B4696"
    />
  </svg>
);

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
    <div className="flex h-[432px] items-stretch gap-3 rounded-2xl overflow-hidden w-full">
      {/* Large left image */}
      <div className="w-[40%] flex-shrink-0 rounded-l-xl overflow-hidden">
        <img src={large} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Middle column */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <img src={midTop} alt="" className="flex-1 w-full object-cover min-h-0" />
        <img src={midBottom} alt="" className="flex-1 w-full object-cover min-h-0" />
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <img src={rightTop} alt="" className="flex-1 w-full object-cover min-h-0" />
        {/* Bottom-right with overlay button */}
        <div
          className="flex-1 relative overflow-hidden flex items-end p-4"
          style={{
            backgroundImage: `url('${rightBottom}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="flex items-center justify-center gap-2 w-full bg-white rounded-xl px-4 py-2.5 shadow-md font-roboto text-sm font-medium text-[#5B4696] leading-5 tracking-wide">
            {GRID_ICON}
            Mostrar todas as fotos
          </button>
        </div>
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
        className="flex flex-col items-center gap-14 pb-18 pt-10"
        style={{
          background: `url('/images/9318f3c52e6a2d81807868aea132233f3a678f7d.webp') #AECB3C center / cover no-repeat`,
        }}
      >
        {/* Heading */}
        <h1 className="text-center leading-[90px] tracking-[0.1px]" style={{ fontSize: "84px" }}>
          <span className="font-normal text-[#5B4696]">A Electi</span>{" "}
          <span className="font-bold text-white">na prática</span>
        </h1>
      </section>

      {/* ── Projetos dos estudantes ── */}
      <section className="flex flex-col items-center gap-10 px-[135px] py-14 bg-[#FAB834]">
        <h2 className="text-[#5B4696] text-5xl font-semibold leading-[63px]">
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
      <section className="flex flex-col items-center gap-10 px-[135px] py-14 bg-[#5B4696]">
        <h2 className="text-white text-5xl font-semibold leading-[63px] text-center">
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
      <section className="flex flex-col items-center gap-10 px-[135px] py-14 bg-[#34B7C0]">
        <h2 className="text-[#5B4696] text-5xl font-semibold leading-[63px] text-center">
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
