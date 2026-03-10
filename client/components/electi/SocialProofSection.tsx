const metrics = [
  {
    value: "9,1",
    label: (
      <>
        <span className="font-semibold text-[#5B4696]">Flexibilidade</span> e{" "}
        <span className="font-semibold text-[#5B4696]">adaptação </span>
        à realidade escolar (segundo gestores)
      </>
    ),
    showNota: true,
  },
  {
    value: "9,6",
    label: (
      <>
        Assessoria{" "}
        <span className="font-semibold text-[#5B4696]">mais recomendada</span>{" "}
        por educadores entre as que já tiveram contato
      </>
    ),
    showNota: true,
  },
  {
    value: "85%",
    label: (
      <>
        dos educadores relatam que as formações da Electi{" "}
        <span className="font-semibold text-[#5B4696]">
          transformaram completamente
        </span>{" "}
        sua prática
      </>
    ),
    showNota: false,
  },
  {
    value: "8,2",
    label: (
      <>
        Avaliação dos{" "}
        <span className="font-semibold text-[#5B4696]">estudantes</span> sobre a
        experiência com a Electi
      </>
    ),
    showNota: true,
  },
];

export default function SocialProofSection() {
  return (
    <section className="bg-[#FAB834] py-16 md:py-20 px-4 md:px-8 lg:px-[135px]">
      <div className="max-w-[1170px] mx-auto flex flex-col gap-12">
        <h2
          className="font-poppins font-semibold text-center leading-tight"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.3" }}
        >
          <span className="text-white">O que as </span>
          <span className="text-[#5B4696]">escolas parceiras</span>
          <span className="text-white"> dizem?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-6"
            >
              {/* Score circle */}
              <div className="w-[134px] h-[134px] rounded-full bg-[#EF7933] flex flex-col items-center justify-center flex-shrink-0">
                {metric.showNota && (
                  <span className="font-poppins font-semibold text-sm text-[#5B4696] leading-none">
                    NOTA
                  </span>
                )}
                <span className="font-poppins font-black text-white leading-none text-5xl md:text-[56px]">
                  {metric.value}
                </span>
              </div>

              {/* Label */}
              <p className="font-poppins text-lg md:text-xl text-center leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
