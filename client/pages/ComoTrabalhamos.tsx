import { useState } from "react";
import Navbar from "@/components/electi/Navbar";
import Footer from "@/components/electi/Footer";

const SUB_TABS = [
  "Diagnóstico Socioemocional",
  "Formação de Educadores",
  "Implementação das Trilhas no Currículo",
  "Assessoria Pedagógica",
  "Envolvimento das Famílias",
];

const PENSADORES = [
  "Jean Piaget",
  "Donald A. Schön",
  "Paulo Freire",
  "César Coll",
  "Constance Kamii",
  "Zygmunt Bauman",
  "Antoni Zabala",
  "Marilyn Fleer",
  "Teresa Lemos",
  "Jorge Larossa",
];

const BNCC_TAGS = ["Campos de Experiência", "Diretrizes de Aprendizagem"];

const REGGIO_ITEMS = [
  "A criança como protagonista do próprio aprendizado",
  "As \"100 linguagens da criança\"",
  "O ambiente como terceiro educador",
];

const FRAMEWORKS = [
  "Thinking Skills",
  "Research Skills",
  "Communication Skills",
  "Social Skills",
  "Self-Management Skills",
];

const ELECTI_PILARES_TAGS = [
  "Planejar, Olhar, Sentir e Planejar",
  "Escutar para conectar",
  "Presença Ativa e Responsabilidade",
  "Fluxo de Energia",
  "Equilíbrio de Poder",
  "Leitura de Grupos e Seus integrantes",
  "Ambiente Emocional Positivo",
  "Relacionamento, Afeto e Comprometimento",
];

const EXPERIENCIA_TAGS = [
  "Jogos cooperativos e dinâmicas",
  "Rodas de conversa e partilhas",
  "Brincar livre e simbólico",
  "Registro e significação do que foi vivenciado",
  "Expressão em diversas linguagens",
];

const PILARES = [
  { number: 1, title: "Planejar, olhar, sentir e planejar" },
  { number: 2, title: "Escutar para conectar" },
  { number: 3, title: "Presença Ativa e Responsabilidade" },
  { number: 4, title: "Fluxo de Energia" },
  { number: 5, title: "Equilíbrio de Poder" },
  { number: 6, title: "Leitura de Grupos e Seus integrantes" },
  { number: 7, title: "Ambiente Emocional Positivo" },
  { number: 8, title: "Relacionamento, Afeto e Comprometimento" },
];

function YellowTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 bg-[#FAB834] text-[#5B4696] font-semibold text-sm font-poppins">
      {children}
    </span>
  );
}

export default function ComoTrabalhamos() {
  const [activeTab, setActiveTab] = useState(2);
  const [currentPilar, setCurrentPilar] = useState(0);

  const prevPilar = () => setCurrentPilar((p) => Math.max(0, p - 1));
  const nextPilar = () => setCurrentPilar((p) => Math.min(PILARES.length - 2, p + 1));

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Navbar />
      <main className="flex-1">
      {/* ── Sub-tabs ── */}
      <section className="bg-[#EF7933] px-4 md:px-8 pt-24 md:pt-28 pb-4 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {SUB_TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`text-sm font-medium rounded-xl px-4 py-2.5 transition-all ${
                activeTab === i
                  ? "bg-[#FAB834] text-[#5B4696] shadow-[0_8px_12px_6px_rgba(0,0,0,0.15),0_4px_4px_0_rgba(0,0,0,0.30)]"
                  : "bg-[#6750A4] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* ── Hero ── */}
      <section className="bg-[#EF7933] px-4 md:px-8 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Left */}
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="text-white">Implementação</span>
              <span className="text-[#5B4696]"> das </span>
              <span className="text-white">Trilhas</span>
              <span className="text-[#5B4696]"> no Currículo</span>
            </h1>
            <p className="text-white text-sm leading-normal max-w-md">
              22 encontros por semestre para que cada educador tenha possibilidade
              de escolher o que faz mais sentido para sua turma
            </p>
            <div className="flex flex-col gap-2">
              {[
                "Encontros essenciais",
                "Encontros de aprofundamento",
                "Encontros de competências",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 border-l-[12px] border-[#34B7C0] pl-4 py-1"
                >
                  <span className="text-white text-lg md:text-2xl font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – screenshot */}
          <img
            src="/images/3a64075bbd832108aa2ed569de3f759a0fcf9f7e.webp"
            alt="Mural Electi"
            className="w-full lg:w-[520px] h-[220px] md:h-[300px] object-cover rounded-3xl border-[8px] md:border-[12px] border-[#FAB834] flex-shrink-0"
          />
        </div>
      </section>

      {/* ── Fundamentações 1 (dark bg with pattern) ── */}
      <section
        className="py-14 md:py-24 px-4 md:px-8"
        style={{
          background:
            "url('/images/23b42b6f13c3e413f568486eb4d85df17502d3eb.webp') lightgray 50% / cover no-repeat",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight">
            <span className="text-white">E assim construimos nossas{"\n"}</span>
            <span className="text-[#FAB834]">Fundamentações</span>
            <span className="text-white"> e </span>
            <span className="text-[#FAB834]">Abordagens</span>
          </h2>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {/* Left column */}
            <div className="flex flex-col gap-5 md:gap-7">
              {/* Pensadores */}
              <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col gap-6">
                <h3 className="text-[#5B4696] text-xl md:text-2xl font-semibold">
                  Pensadores que nos inspiram
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PENSADORES.map((p) => (
                    <YellowTag key={p}>{p}</YellowTag>
                  ))}
                </div>
              </div>

              {/* BNCC */}
              <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col gap-6">
                <h3 className="text-[#5B4696] text-xl md:text-2xl font-semibold">
                  BNCC + DNCEI
                </h3>
                <div className="flex flex-wrap gap-2">
                  {BNCC_TAGS.map((t) => (
                    <YellowTag key={t}>{t}</YellowTag>
                  ))}
                </div>
              </div>
            </div>

            {/* Center column */}
            <div className="flex flex-col gap-5 md:gap-7">
              {/* Reggio Emilia */}
              <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col gap-4">
                <h3 className="text-[#5B4696] text-xl md:text-2xl font-semibold">
                  Reggio Emilia (infantil)
                </h3>
                <ul className="flex flex-col gap-1">
                  {REGGIO_ITEMS.map((item) => (
                    <li key={item} className="text-[#5B4696] text-sm font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frameworks */}
              <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col gap-6">
                <h3 className="text-[#5B4696] text-xl md:text-2xl font-semibold">
                  Frameworks internacionais
                </h3>
                <div className="flex flex-wrap gap-2">
                  {FRAMEWORKS.map((f) => (
                    <YellowTag key={f}>{f}</YellowTag>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5 md:gap-7">
              {/* Metodologia Electi */}
              <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col gap-6">
                <h3 className="text-[#5B4696] text-xl md:text-2xl font-semibold">
                  Metodologia Electi (8 pilares)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ELECTI_PILARES_TAGS.map((t) => (
                    <YellowTag key={t}>{t}</YellowTag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fundamentações 2 (white bg) ── */}
      <section className="bg-white py-14 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight">
            <span className="text-[#5B4696]">E assim construimos nossas{"\n"}</span>
            <span className="text-[#FAB834]">Fundamentações</span>
            <span className="text-[#5B4696]"> e </span>
            <span className="text-[#FAB834]">Abordagens</span>
          </h2>

          {/* Photos row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-stretch">
            <img
              src="/images/79e57492c58ea105be42b6a7c9d20f00b7fdcd44.webp"
              alt="Atividade em sala"
              className="flex-1 h-[220px] md:h-[290px] object-cover rounded-3xl border-[8px] md:border-[12px] border-[#FAB834]"
            />
            <img
              src="/images/d78d8dca4b53ebeced4a1a6f9446bc108949b333.webp"
              alt="Criança com fantasia"
              className="w-full md:w-[290px] h-[220px] md:h-[290px] object-cover rounded-3xl border-[8px] md:border-[12px] border-[#34B7C0] flex-shrink-0"
            />
            <img
              src="/images/38757c54fef551a2732c49a135e1a374d291ad80.webp"
              alt="Projeto escolar"
              className="w-full md:w-[290px] h-[220px] md:h-[290px] object-cover rounded-3xl border-[8px] md:border-[12px] border-[#AECB3C] flex-shrink-0"
            />
          </div>

          {/* Metodologias de projetos */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            <h3 className="text-[#5B4696] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:w-[380px] lg:flex-shrink-0">
              Metodologias de projetos
            </h3>
            <p className="text-black text-sm leading-normal flex-1">
              Os projetos permitem que a trilha seja viva, flexível e adaptável ao que já existe em cada
              escola.{"\n"}Estas metodologias também facilitam e fortalecem o senso de pertencimento os
              vínculos e as habilidades de cooperação e de realização (empreendedorismo). A presença dos
              mascotes, no ciclo infantil e anos iniciais, funciona como mediador lúdico das emoções.
            </p>
          </div>

          {/* Mascots row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 justify-items-center">
            {/* Swallow – circle yellow */}
            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[170px] rounded-full bg-[#FAB834] flex-shrink-0">
              <img
                src="/images/d4eb26617991262160d516cf6d58e4ac9f93aac9.webp"
                alt="Andorinha mascote"
                className="absolute bottom-0 left-3 md:left-4 w-[85px] md:w-[110px] object-contain"
              />
            </div>

            {/* Leopard – rounded square teal */}
            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[170px] rounded-[30px] md:rounded-[40px] bg-[#2FB6B7] flex-shrink-0 overflow-visible">
              <img
                src="/images/5cce40378e2efeeb58cc8b662e0bfaec5d2be101.webp"
                alt="Onça mascote"
                className="absolute -top-4 md:-top-6 left-1 md:left-2 w-[100px] md:w-[130px] object-contain"
              />
            </div>

            {/* Dolphin – rounded square green */}
            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[170px] rounded-[30px] md:rounded-[40px] bg-[#AECB3C] flex-shrink-0 overflow-visible">
              <img
                src="/images/b47bfbf700d85093886f85e709a3359ae274d7b8.webp"
                alt="Boto mascote"
                className="absolute -top-4 md:-top-5 -left-3 md:-left-4 w-[160px] md:w-[210px] object-contain"
              />
            </div>

            {/* Frog – mixed border-radius orange */}
            <div
              className="relative w-[130px] h-[130px] md:w-[170px] md:h-[170px] flex-shrink-0 bg-[#EF7933] overflow-visible"
              style={{ borderRadius: "200px 40px 40px 40px" }}
            >
              <img
                src="/images/1c40150a47e3ebfd360dfa3de5bd804aad930661.webp"
                alt="Boana mascote"
                className="absolute top-8 md:top-10 left-6 md:left-8 w-[85px] md:w-[115px] object-contain"
              />
            </div>
          </div>

          {/* Aprendizagem pela experiência */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            <h3 className="text-[#5B4696] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight lg:w-[380px] lg:flex-shrink-0">
              Aprendizagem pela experiência
            </h3>
            <div className="flex flex-wrap gap-3 flex-1">
              {EXPERIENCIA_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 bg-[#FAB834] text-[#5B4696] font-semibold text-base md:text-xl lg:text-2xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8 Pilares (yellow bg) ── */}
      <section className="bg-[#FAB834] px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left text */}
            <div className="flex flex-col gap-6 lg:w-[340px] lg:flex-shrink-0">
              <h2 className="text-[#5B4696] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Metodologia autoral{" "}
                <span className="text-[#EF7933]">8 pilares</span>
              </h2>
              <p className="text-[#5B4696] text-sm leading-normal">
                Os pilares da nossa formação de facilitadores são uma série de propostas de percepções,
                reflexões e ações que tem como objetivo alcançar uma atitude e postura sensível e estimulados
                por parte de um facilitador ao longo de uma vivência. Elas também formam uma lógica que
                permite a trabalho desenvolvida para Electi, possibilitando assim que mais pessoas se
                empoderem da metodologia para facilitar as vivências que desejam.
              </p>
            </div>

            {/* Carousel */}
            <div className="flex items-center gap-3 md:gap-4 flex-1 overflow-hidden w-full">
              {/* Prev button */}
              <button
                onClick={prevPilar}
                disabled={currentPilar === 0}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#5B4696] flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15.4 12L9.4 6L8 7.4L12.6 12L8 16.6L9.4 18L15.4 12Z" fill="white" transform="scale(-1,1) translate(-24,0)" />
                </svg>
              </button>

              {/* Cards */}
              <div className="flex gap-4 md:gap-6 overflow-hidden flex-1">
                {PILARES.slice(currentPilar, currentPilar + 2).map((pilar) => (
                  <div
                    key={pilar.number}
                    className="flex-1 min-w-0 bg-white rounded-2xl md:rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-3 md:p-4 lg:p-6 flex flex-col items-center gap-2 md:gap-3 justify-center"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FAB834] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#EC6C05] text-2xl md:text-3xl font-black leading-none">
                        {pilar.number}
                      </span>
                    </div>
                    <p className="text-[#5B4696] text-sm md:text-base lg:text-xl font-medium text-center leading-snug break-normal">
                      {pilar.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={nextPilar}
                disabled={currentPilar >= PILARES.length - 2}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#5B4696] flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8.6 12L14.6 6L16 7.4L11.4 12L16 16.6L14.6 18L8.6 12Z" fill="white" transform="scale(-1,1) translate(-24,0)" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
