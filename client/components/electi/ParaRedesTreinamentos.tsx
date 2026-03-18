const trainings = [
  {
    period: "Semanal / Quinzenal (opcional)",
    participants: "Gestor Célula + Gestão SE Rede",
    objective: "Operacionalização, escuta de campo, ajuste fino",
  },
  {
    period: "Mensal",
    participants: "Lideranças da rede + Lideranças Electi",
    objective: "Avaliação geral, alinhamentos estratégicos",
  },
  {
    period: "Trimestral",
    participants: "Direção + gestão + célula",
    objective: "Avaliação de impacto, redefinição de metas",
  },
];

function ArrowButton() {
  return (
    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#AECB3C] flex items-center justify-center shadow-md">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15.4 12L9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12Z" fill="#5B4696" />
      </svg>
    </div>
  );
}

export default function ParaRedesTreinamentos() {
  return (
    <section className="bg-[#EF7933] px-4 md:px-[135px] py-16 md:py-[80px]">
      <div className="max-w-[1170px] mx-auto flex flex-col gap-12">
        {/* Heading */}
        <h2 className="font-poppins font-semibold text-3xl md:text-[48px] text-white text-center leading-tight">
          Treinamentos <span className="italic font-normal">iniciais</span>
        </h2>

        {/* Cards row */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
          {trainings.map((training, index) => (
            <div key={training.period} className="flex flex-col md:flex-row items-center gap-4 flex-1 w-full">
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 flex flex-col gap-6 flex-1 w-full self-stretch">
                {/* Period */}
                <div className="flex flex-col gap-0">
                  <span className="font-poppins font-semibold text-2xl text-[#5B4696]">
                    {training.period}
                  </span>
                </div>

                {/* Participants */}
                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-normal text-xl text-[#EF7933]">
                    Participantes
                  </span>
                  <span className="font-poppins font-normal text-sm text-black">
                    {training.participants}
                  </span>
                </div>

                {/* Objective */}
                <div className="flex flex-col gap-2">
                  <span className="font-poppins font-normal text-xl text-[#EF7933]">
                    Objetivo
                  </span>
                  <span className="font-poppins font-normal text-sm text-black">
                    {training.objective}
                  </span>
                </div>
              </div>

              {/* Arrow between cards (not after the last) */}
              {index < trainings.length - 1 && (
                <div className="flex-shrink-0 mx-2 md:mx-4">
                  <ArrowButton />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
