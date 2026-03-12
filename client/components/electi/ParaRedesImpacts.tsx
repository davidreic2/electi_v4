const impacts = [
  {
    label: "Escola",
    text: "Reconhecida no mercado por ter uma cultura acolhedora e colaborativa, com foco no desenvolvimento integral das crianças e adolescentes e no fortalecimento de vínculos na comunidade.",
  },
  {
    label: "Famílias",
    text: "Se sentem mais confiantes no trabalho da escola, facilitando a postura de parceria, diálogo e construção de memórias afetivas que enriquecem o desenvolvimento dos estudantes.",
  },
  {
    label: "Educadores",
    text: "Se sentem mais preparados e amparados. Se reconectam com seus valores e motivações, percebem evolução clara nos estudantes e se sentem mais inspirados e realizados com o trabalho.",
  },
  {
    label: "Estudantes",
    text: "Desenvolvem autonomia, autoconhecimento, empatia, criatividade e colaboração. Fortalecimento dos vínculos, autoestima e bem-estar emocional. Ganham maior consciência nas escolhas em todos os âmbitos da vida.",
  },
];

export default function ParaRedesImpacts() {
  return (
    <section className="bg-[#5B4696] px-4 md:px-[135px] py-16 md:py-[80px]">
      <div className="max-w-[1170px] mx-auto flex flex-col gap-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-[48px] leading-tight md:leading-[63px]">
            <span className="text-white">Impactos esperados{"\n"}</span>
            <br className="hidden md:block" />
            <span className="text-[#FAB834]">Nossos desejos</span>
          </h2>
        </div>

        {/* 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {impacts.map((item) => (
            <div key={item.label} className="flex flex-col gap-6">
              <div className="inline-flex">
                <div className="bg-[#FAB834] px-2 py-0.5">
                  <span className="font-poppins font-semibold text-2xl text-[#5B4696]">
                    {item.label}
                  </span>
                </div>
              </div>
              <p className="font-poppins font-normal text-sm text-white leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
