function OrgChart() {
  return (
    <div className="bg-white/95 rounded-2xl p-4 md:p-6 shadow-lg w-full max-w-[480px]">
      {/* Top row: Rede + Electi */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {/* Rede box */}
        <div className="border-2 border-[#AECB3C] rounded-xl overflow-hidden">
          <div className="bg-[#AECB3C] text-[#5B4696] font-poppins font-semibold text-sm px-3 py-1.5 text-center">
            Rede
          </div>
          <div className="p-3 flex flex-col gap-1.5">
            <div className="bg-[#f0f9e0] rounded px-2 py-1 text-xs font-poppins text-[#5B4696] text-center">
              Coordenação
            </div>
            <div className="bg-[#f0f9e0] rounded px-2 py-1 text-xs font-poppins text-[#5B4696] text-center">
              Gestão SE
            </div>
          </div>
        </div>

        {/* Electi box */}
        <div className="border-2 border-[#5B4696] rounded-xl overflow-hidden">
          <div className="bg-[#5B4696] text-white font-poppins font-semibold text-sm px-3 py-1.5 text-center">
            Electi
          </div>
          <div className="p-3 flex flex-col gap-1.5">
            <div className="bg-[#ede8f7] rounded px-2 py-1 text-xs font-poppins text-[#5B4696] text-center">
              Direção
            </div>
            <div className="bg-[#ede8f7] rounded px-2 py-1 text-xs font-poppins text-[#5B4696] text-center">
              Gestão Célula
            </div>
          </div>
        </div>
      </div>

      {/* Connector line */}
      <div className="flex justify-center mb-1">
        <div className="w-0.5 h-4 bg-[#5B4696]" />
      </div>

      {/* Célula de Assessoria */}
      <div className="flex justify-center mb-3">
        <div className="bg-[#EF7933] text-white font-poppins font-semibold text-xs px-4 py-1.5 rounded-lg text-center">
          Célula de Assessoria
        </div>
      </div>

      {/* Connector line */}
      <div className="flex justify-center mb-1">
        <div className="w-0.5 h-4 bg-[#5B4696]" />
      </div>

      {/* Escolas box */}
      <div className="border-2 border-[#AECB3C] rounded-xl overflow-hidden mb-3">
        <div className="bg-[#AECB3C] text-[#5B4696] font-poppins font-semibold text-sm px-3 py-1.5 text-center">
          Escolas
        </div>
        <div className="p-3 grid grid-cols-3 gap-1.5">
          <div className="bg-[#f0f9e0] rounded px-1 py-1 text-xs font-poppins text-[#5B4696] text-center">
            Direção
          </div>
          <div className="bg-[#f0f9e0] rounded px-1 py-1 text-xs font-poppins text-[#5B4696] text-center">
            Coordenação
          </div>
          <div className="bg-[#f0f9e0] rounded px-1 py-1 text-xs font-poppins text-[#5B4696] text-center">
            Educadores
          </div>
        </div>
      </div>

      {/* Connector line */}
      <div className="flex justify-center mb-1">
        <div className="w-0.5 h-4 bg-[#5B4696]" />
      </div>

      {/* Bottom services row */}
      <div className="grid grid-cols-3 gap-2">
        {["Prestativa", "Centro de recursos", "Formação Contínua"].map((item) => (
          <div
            key={item}
            className="bg-[#FAB834] rounded-lg px-2 py-2 text-xs font-poppins font-semibold text-[#5B4696] text-center leading-tight"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ParaRedesEspecialistas() {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo */}
      <img
        src="/images/f80668706c074f3936f1820cfa6c78852f3f767a.webp"
        alt="Workshop Electi"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#EF7933]/90 via-[#EF7933]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-4 md:px-[135px] py-16 md:py-[80px]">
        <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Title */}
          <div className="lg:max-w-[460px]">
            <h2 className="font-poppins text-4xl md:text-5xl lg:text-[64px] leading-tight font-semibold">
              <span className="text-[#AECB3C]">Especialistas </span>
              <span className="text-white">em Electi e na sua rede</span>
            </h2>
          </div>

          {/* Right: Org chart */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <OrgChart />
          </div>
        </div>
      </div>
    </section>
  );
}
