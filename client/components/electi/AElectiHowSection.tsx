import { useState } from "react";

const steps = [
  {
    number: "1",
    title: "Diagnóstico Socioemocional",
    description:
      "Escuta do ambiente escolar e suas dinâmicas, incluindo relações entre alunos, professores e gestores. Cocriamos objetivos e prioridades para cuidar do socioemocional da escola.",
  },
  {
    number: "2",
    title: "Formação de facilitadores (educadores)",
    description:
      "A formação inicial em facilitação de aprendizagem ativa e socioemocional, aliada à formação continuada, oferece uma experiência transformadora para os educadores.",
  },
  {
    number: "3",
    title: "Implementação das trilhas no currículo",
    description:
      "Os estudantes vivenciam os projetos da Jornada SER através de uma experiência de aprendizagem ativa, tornando-se protagonistas em projetos reais e significativos.",
  },
  {
    number: "4",
    title: "Assessoria Pedagógica",
    description:
      "Nosso modelo de assessoria oferece apoio emocional e formativo aos educadores, ajudando-os a trazer o melhor de si para os estudantes. Com essa abordagem, os educadores se sentem cuidados e amparados, promovendo um ambiente escolar mais saudável e produtivo.",
  },
  {
    number: "5",
    title: "Envolvimento das famílias",
    description:
      "Contamos com uma comunidade online que oferece conteúdos sobre socioemocional e parentalidade, atividades para serem realizadas em casa e encontros específicos para as famílias de cada escola parceira.",
  },
];

export default function AElectiHowSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#AECB3C]">
      <div className="px-4 md:px-8 lg:px-[135px] py-16 max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Title */}
        <h2 className="font-poppins text-3xl md:text-4xl lg:text-[48px] font-semibold text-center">
          <span className="text-[#5B4696]">E como fazemos </span>
          <span className="text-[#EF7933]">tudo isso?</span>
        </h2>

        {/* Accordion */}
        <div className="flex flex-col gap-4 max-w-[1170px] mx-auto w-full">
          {steps.map((step, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={step.number}
                className="rounded-[20px] bg-[#5B4696] overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-10 pt-3 pb-3 text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="font-poppins font-black text-4xl text-[#AECB3C] leading-none w-10 shrink-0">
                      {step.number}
                    </span>
                    <span className="font-poppins font-semibold text-lg md:text-2xl text-white leading-tight">
                      {step.title}
                    </span>
                  </div>
                  {/* Chevron */}
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M6.17 16.33L18.67 28.83C18.85 29 19.05 29.14 19.28 29.23C19.51 29.33 19.75 29.38 20 29.38C20.25 29.38 20.49 29.33 20.72 29.23C20.95 29.14 21.16 29 21.33 28.83L33.83 16.33C34.18 15.97 34.38 15.5 34.38 15C34.38 14.5 34.18 14.02 33.83 13.67C33.48 13.32 32.99 13.12 32.5 13.12C32.01 13.12 31.52 13.32 31.17 13.67L20 24.84L8.83 13.67C8.47 13.32 7.99 13.12 7.5 13.12C7.01 13.12 6.52 13.32 6.17 13.67C5.82 14.02 5.62 14.5 5.62 15C5.62 15.5 5.82 15.97 6.17 16.33Z"
                      fill="white"
                    />
                  </svg>
                </button>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
                >
                  <p className="font-poppins text-sm text-white leading-relaxed px-16 pr-16">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
