export default function StatsBanner() {
  return (
    <section className="w-full flex">
      {/* Left green accent */}
      <div className="hidden md:block flex-1 bg-[#AECB3C]" />

      {/* Main content */}
      <div className="flex flex-col md:flex-row w-full md:w-auto md:max-w-[1170px] mx-auto">
        {/* Left purple panel */}
        <div className="bg-[#5B4696] flex-1 flex items-center justify-center p-8 md:p-10">
          <p className="font-poppins font-semibold text-[#AECB3C] text-center text-lg md:text-xl lg:text-2xl leading-tight">
            Crescimento médio anual das escolas parceiras da Electi
          </p>
        </div>

        {/* Center green panel with number */}
        <div className="bg-[#AECB3C] flex-1 flex items-center justify-center p-8 md:p-10">
          <span
            className="font-poppins font-black text-[#5B4696] leading-none text-center"
            style={{ fontSize: "clamp(64px, 8vw, 120px)" }}
          >
            11,4%
          </span>
        </div>

        {/* Right purple panel */}
        <div className="bg-[#5B4696] flex-1 flex items-center justify-center p-8 md:p-10">
          <p className="font-poppins text-white text-center text-sm leading-relaxed">
            Evidência de rematrículas e novos alunos: aumento dos pedidos de
            materiais ano a ano. Média referente ao crescimento de 2024 para
            2025
          </p>
        </div>
      </div>

      {/* Right green accent */}
      <div className="hidden md:block flex-1 bg-[#AECB3C]" />
    </section>
  );
}
