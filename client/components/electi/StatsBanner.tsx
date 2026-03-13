export default function StatsBanner() {
  return (
    <section className="w-full flex">
      {/* Left green accent */}
      <div className="hidden lg:block flex-1 bg-[#AECB3C]" />

      {/* Main content */}
      <div className="flex flex-col md:flex-row w-full lg:max-w-[1170px]">
        {/* Left purple panel */}
        <div className="bg-[#5B4696] md:w-[33%] flex items-center justify-center p-8 md:px-10 md:py-14">
          <p className="font-poppins font-semibold text-[#AECB3C] text-center text-lg md:text-xl leading-tight max-w-[260px]">
            Crescimento médio anual das escolas parceiras da Electi
          </p>
        </div>

        {/* Center green panel with number */}
        <div className="bg-[#AECB3C] md:w-[34%] flex items-center justify-center p-8 md:py-14">
          <span
            className="font-poppins font-black text-[#5B4696] leading-none text-center"
            style={{ fontSize: "clamp(48px, 5vw, 80px)" }}
          >
            11,4%
          </span>
        </div>

        {/* Right purple panel */}
        <div className="bg-[#5B4696] md:w-[33%] flex items-center justify-center p-8 md:px-10 md:py-14">
          <p className="font-poppins text-white text-center text-sm leading-relaxed max-w-[280px]">
            Evidência de rematrículas e novos alunos: aumento dos pedidos de
            materiais ano a ano. Média referente ao crescimento de 2024 para
            2025
          </p>
        </div>
      </div>

      {/* Right green accent */}
      <div className="hidden lg:block flex-1 bg-[#AECB3C]" />
    </section>
  );
}
