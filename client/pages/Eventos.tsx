import { useState } from "react";
import Navbar from "@/components/electi/Navbar";
import Footer from "@/components/electi/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Event {
  id: number;
  date: string;
  month: string;
  year: string;
  title: string;
  description: string;
  location: string;
  category: "formacao" | "workshop" | "palestra" | "vivencia";
  tag: string;
  color: string;
  tagColor: string;
  tagTextColor: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const events: Event[] = [
  {
    id: 1,
    date: "14",
    month: "AGO",
    year: "2025",
    title: "Formação de Educadores: Escuta Ativa em Sala de Aula",
    description:
      "Uma jornada prática e reflexiva para educadores que desejam aprofundar sua escuta e transformar a dinâmica das relações em sala de aula.",
    location: "São Paulo – SP (Presencial)",
    category: "formacao",
    tag: "Formação",
    color: "#5B4696",
    tagColor: "#FAB834",
    tagTextColor: "#5B4696",
  },
  {
    id: 2,
    date: "22",
    month: "AGO",
    year: "2025",
    title: "Workshop: Jogos Cooperativos na Educação Infantil",
    description:
      "Aprenda a aplicar jogos cooperativos como mediadores lúdicos das emoções e fortaleça o senso de pertencimento entre os alunos.",
    location: "Online (Zoom)",
    category: "workshop",
    tag: "Workshop",
    color: "#34B7C0",
    tagColor: "#34B7C0",
    tagTextColor: "#FFF",
  },
  {
    id: 3,
    date: "05",
    month: "SET",
    year: "2025",
    title: "Palestra: Metodologia Autoral Electi – 8 Pilares",
    description:
      "Conheça a fundo a metodologia que guia nossas trilhas socioemocionais e descubra como implementá-la em sua escola.",
    location: "São Paulo – SP (Presencial)",
    category: "palestra",
    tag: "Palestra",
    color: "#EF7933",
    tagColor: "#EF7933",
    tagTextColor: "#FFF",
  },
  {
    id: 4,
    date: "18",
    month: "SET",
    year: "2025",
    title: "Vivência: Presença Ativa e Responsabilidade",
    description:
      "Uma imersão vivencial nos pilares da presença ativa. Para educadores e coordenadores que buscam transformar sua prática pedagógica.",
    location: "Online (Zoom)",
    category: "vivencia",
    tag: "Vivência",
    color: "#AECB3C",
    tagColor: "#AECB3C",
    tagTextColor: "#5B4696",
  },
  {
    id: 5,
    date: "02",
    month: "OUT",
    year: "2025",
    title: "Formação: Diagnóstico Socioemocional nas Escolas",
    description:
      "Entenda como mapear o clima socioemocional da sua escola e crie planos de ação baseados em dados e escuta.",
    location: "São Paulo – SP (Presencial)",
    category: "formacao",
    tag: "Formação",
    color: "#5B4696",
    tagColor: "#FAB834",
    tagTextColor: "#5B4696",
  },
  {
    id: 6,
    date: "16",
    month: "OUT",
    year: "2025",
    title: "Workshop: Envolvimento das Famílias na Escola",
    description:
      "Estratégias práticas para aproximar famílias da comunidade escolar e construir relações de confiança e corresponsabilidade.",
    location: "Online (Zoom)",
    category: "workshop",
    tag: "Workshop",
    color: "#34B7C0",
    tagColor: "#34B7C0",
    tagTextColor: "#FFF",
  },
];

const categories = [
  { key: "todos", label: "Todos" },
  { key: "formacao", label: "Formação" },
  { key: "workshop", label: "Workshop" },
  { key: "palestra", label: "Palestra" },
  { key: "vivencia", label: "Vivência" },
];

// ─── Section: Hero ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-[#EF7933] px-6 md:px-[135px] py-16 md:py-24">
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="font-poppins font-semibold text-5xl md:text-[64px] leading-tight">
            <span className="text-white">Nossos</span>
            <br />
            <span className="text-[#5B4696]">Eventos</span>
          </h1>
          <p className="font-poppins font-normal text-white text-base md:text-lg leading-relaxed max-w-[480px]">
            Formações, workshops, palestras e vivências para educadores,
            coordenadores e escolas que querem transformar o cuidado
            socioemocional em prática real.
          </p>
          <div className="flex flex-col gap-4">
            {[
              "Encontros presenciais e online",
              "Conteúdos baseados nos 8 pilares Electi",
              "Certificado de participação",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 pl-6 border-l-[12px] border-[#34B7C0]"
              >
                <span className="font-poppins font-semibold text-white text-lg md:text-2xl">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Illustrated card */}
        <div className="flex-shrink-0 w-full md:w-[480px]">
          <div className="rounded-3xl border-[12px] border-[#FAB834] bg-white p-8 flex flex-col gap-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FAB834] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.11 22 21 21.1 21 20V6C21 4.9 20.11 4 19 4ZM19 20H5V9H19V20ZM5 7V6H19V7H5ZM7 11H9V13H7V11ZM11 11H13V13H11V11ZM15 11H17V13H15V11ZM7 15H9V17H7V15ZM11 15H13V17H11V15ZM15 15H17V17H15V15Z"
                    fill="#5B4696"
                  />
                </svg>
              </div>
              <span className="font-poppins font-semibold text-[#5B4696] text-xl">
                Agenda 2025
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { month: "AGO", count: 2, color: "#FAB834" },
                { month: "SET", count: 2, color: "#34B7C0" },
                { month: "OUT", count: 2, color: "#AECB3C" },
              ].map((m) => (
                <div key={m.month} className="flex items-center gap-4">
                  <div
                    className="w-14 h-8 rounded flex items-center justify-center"
                    style={{ background: m.color }}
                  >
                    <span className="font-poppins font-bold text-[#5B4696] text-sm">
                      {m.month}
                    </span>
                  </div>
                  <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(m.count / 3) * 100}%`,
                        background: m.color,
                      }}
                    />
                  </div>
                  <span className="font-poppins text-[#5B4696] text-sm font-semibold">
                    {m.count} eventos
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Formação", "Workshop", "Palestra", "Vivência"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded font-poppins font-semibold text-[#5B4696] text-sm"
                  style={{ background: "#FAB834" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Filter bar ──────────────────────────────────────────────────────
function FilterBar({
  active,
  onChange,
}: {
  active: string;
  onChange: (k: string) => void;
}) {
  return (
    <section className="bg-[#5B4696] px-6 md:px-[135px] py-5">
      <div className="max-w-[1170px] mx-auto flex items-center gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onChange(cat.key)}
            className={`px-4 py-2 rounded-xl font-poppins font-medium text-sm transition-all ${
              active === cat.key
                ? "bg-[#FAB834] text-[#5B4696] shadow-lg"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}

// ─── Event Card ───────────────────────────────────────────────────────────────
function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] overflow-hidden flex flex-col hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] transition-shadow">
      {/* Color bar top */}
      <div className="h-2" style={{ background: event.color }} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Date + tag */}
        <div className="flex items-start justify-between gap-3">
          {/* Date badge */}
          <div
            className="flex-shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center"
            style={{ background: event.color }}
          >
            <span className="font-poppins font-black text-white text-2xl leading-none">
              {event.date}
            </span>
            <span className="font-poppins font-semibold text-white text-xs leading-none mt-0.5">
              {event.month}
            </span>
          </div>

          {/* Tag */}
          <span
            className="px-3 py-1 rounded font-poppins font-semibold text-sm"
            style={{
              background: event.tagColor,
              color: event.tagTextColor,
            }}
          >
            {event.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-semibold text-[#5B4696] text-xl leading-snug">
          {event.title}
        </h3>

        {/* Description */}
        <p className="font-poppins text-sm text-gray-600 leading-relaxed flex-1">
          {event.description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
              fill="#9D9D9D"
            />
          </svg>
          <span className="font-poppins text-sm text-gray-500">
            {event.location}
          </span>
        </div>

        {/* Year */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="font-poppins text-xs text-gray-400">
            {event.month} {event.year}
          </span>
          <button
            className="font-poppins font-semibold text-sm px-4 py-2 rounded-xl text-white transition-colors"
            style={{ background: event.color }}
          >
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Section: Events Grid ─────────────────────────────────────────────────────
function EventsGrid({ filter }: { filter: string }) {
  const filtered =
    filter === "todos"
      ? events
      : events.filter((e) => e.category === filter);

  return (
    <section className="bg-white px-6 md:px-[135px] py-16">
      <div className="max-w-[1170px] mx-auto">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <h2 className="font-poppins font-semibold text-[#5B4696] text-4xl md:text-[48px] leading-tight">
            Próximos{" "}
            <span className="text-[#FAB834]">Eventos</span>
          </h2>
          <p className="font-poppins text-gray-500 text-base mt-3">
            {filtered.length} evento{filtered.length !== 1 ? "s" : ""}{" "}
            encontrado{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="font-poppins text-gray-400 text-lg">
              Nenhum evento encontrado para esta categoria.
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Section: Featured / CTA ──────────────────────────────────────────────────
function FeaturedCta() {
  return (
    <section
      className="px-6 md:px-[135px] py-20"
      style={{
        background:
          "url('/images/23b42b6f13c3e413f568486eb4d85df17502d3eb.webp') #5B4696 center / cover no-repeat",
      }}
    >
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-poppins font-semibold text-white text-4xl md:text-[48px] leading-tight">
            Quer receber nossa{" "}
            <span className="text-[#FAB834]">agenda</span>?
          </h2>
          <p className="font-poppins text-white/90 text-base leading-relaxed max-w-[480px]">
            Cadastre-se e receba em primeira mão informações sobre novos
            eventos, formações e conteúdos Electi diretamente no seu e-mail.
          </p>
        </div>

        {/* Form card */}
        <div className="flex-shrink-0 w-full md:w-[440px]">
          <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col gap-4">
            <h3 className="font-poppins font-semibold text-[#5B4696] text-2xl">
              Fique por dentro
            </h3>
            <input
              type="text"
              placeholder="Seu nome"
              className="font-poppins text-sm px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#5B4696] transition-colors"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="font-poppins text-sm px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-[#5B4696] transition-colors"
            />
            <button className="w-full py-3 rounded-xl bg-[#6750A4] text-white font-poppins font-semibold text-sm hover:bg-[#5B4696] transition-colors">
              Quero receber a agenda
            </button>
            <p className="font-poppins text-xs text-gray-400 text-center">
              Sem spam. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Parceiros / CTA conversa ───────────────────────────────────────
function CtaConversa() {
  return (
    <section className="bg-[#FAB834] px-6 md:px-[135px] py-16">
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-poppins font-semibold text-[#5B4696] text-3xl md:text-[40px] leading-tight">
            Quer trazer um evento{" "}
            <br className="hidden md:block" />
            para a sua escola?
          </h2>
          <p className="font-poppins text-[#5B4696] text-base leading-relaxed max-w-[500px]">
            Realizamos formações e workshops exclusivos para escolas e redes de
            ensino. Entre em contato e vamos construir juntos uma experiência
            sob medida para a sua comunidade.
          </p>
        </div>
        <button className="flex-shrink-0 px-8 py-4 rounded-2xl bg-[#5B4696] text-white font-poppins font-semibold text-base hover:bg-[#4a3880] transition-colors shadow-lg">
          Marque uma conversa
        </button>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Eventos() {
  const [activeFilter, setActiveFilter] = useState("todos");

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FilterBar active={activeFilter} onChange={setActiveFilter} />
        <EventsGrid filter={activeFilter} />
        <FeaturedCta />
        <CtaConversa />
      </main>
      <Footer />
    </div>
  );
}
