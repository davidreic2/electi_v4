export default function AboutSection() {
  return (
    <section className="bg-white py-10 md:py-16 px-4 md:px-8 lg:px-[135px] overflow-hidden">
      {/* Photos row */}
      <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 mb-10 md:mb-14 max-w-[1170px] mx-auto">
        <img
          src="/images/d4d90086027c4d2a1484dad84d6c121c628b1c50.webp"
          alt="Electi formação"
          className="flex-1 min-h-[220px] md:h-[358px] object-cover rounded-3xl border-[12px] border-[#FAB834]"
        />
        <img
          src="/images/bae2740d20a5c8e9e4a9a5925caeb75d9622c723.webp"
          alt="Electi equipe"
          className="w-full md:w-[358px] md:h-[358px] h-[260px] object-cover rounded-3xl border-[12px] border-[#34B7C0] flex-shrink-0"
        />
      </div>

      {/* Text content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-8 max-w-[1170px] mx-auto">
        <h2
          className="font-poppins font-semibold text-[#5B4696] leading-tight"
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: "1.3" }}
        >
          Clima escolar como estratégia de crescimento
        </h2>

        <p className="font-poppins text-sm text-black leading-relaxed">
          A Electi é a parceira que ajuda a gestão a transformar clima escolar
          em fidelização e crescimento sustentável.
          <br />
          <br />
          Nossa atuação respeita o território, potencializa o que já funciona e
          cria um ambiente emocional seguro, condição essencial para
          aprendizagem, retenção e reputação.
        </p>

        <p className="font-poppins text-sm text-black leading-relaxed">
          A partir da tecnologia social da escuta, de experiências de
          aprendizagem estruturadas e do respeito às escolhas de cada escola,
          unimos uma pesquisa diagnóstica, formação pedagógica, material didático
          e acompanhamento contínuo para mediar conflitos, fortalecer vínculos e
          tornar a escola mais atraente para as famílias.
        </p>
      </div>
    </section>
  );
}
