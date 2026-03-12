const impacts = [
  {
    label: "Escola",
    color: "bg-[#FAB834]",
    text: "Reconhecida no mercado por ter uma cultura acolhedora e colaborativa, com foco no desenvolvimento integral das crianças e adolescentes e no fortalecimento de vínculos na comunidade.",
  },
  {
    label: "Famílias",
    color: "bg-[#FAB834]",
    text: "Se sentem mais confiantes no trabalho da escola, facilitando a postura de parceria, diálogo e construção de memórias afetivas que enriquecem o desenvolvimento dos estudantes.",
  },
  {
    label: "Educadores",
    color: "bg-[#FAB834]",
    text: "Se sentem mais preparados e amparados. Se reconectam com seus valores e motivações, percebem evolução clara nos estudantes e se sentem mais inspirados e realizados com o trabalho.",
  },
  {
    label: "Estudantes",
    color: "bg-[#FAB834]",
    text: "Desenvolvem autonomia, autoconhecimento, empatia, criatividade e colaboração. Fortalecimento dos vínculos, autoestima e bem-estar emocional. Ganham maior consciência nas escolhas em todos os âmbitos da vida.",
  },
];

export default function AElectiImpacts() {
  return (
    <section className="bg-[#5B4696]">
      <div className="px-4 md:px-8 lg:px-[135px] py-20 max-w-[1440px] mx-auto flex flex-col gap-12">
        {/* Title */}
        <h2 className="font-poppins font-semibold text-4xl md:text-[48px] leading-[63px] text-center">
          <span className="text-white">Impactos esperados{"\n"}</span>
          <br className="hidden md:block" />
          <span className="text-[#FAB834]">Nossos desejos</span>
        </h2>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16">
          {impacts.map((item) => (
            <div key={item.label} className="flex flex-col gap-6">
              <div className={`inline-flex px-2 py-0.5 ${item.color} self-start`}>
                <span className="font-poppins font-semibold text-2xl text-[#5B4696]">
                  {item.label}
                </span>
              </div>
              <p className="font-poppins text-sm text-white leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
