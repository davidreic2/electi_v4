export default function HeroSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/dd2c25a6cf7fcb46388960a6e98b45f4d088a8de.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "clamp(400px, 55vw, 671px)",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 md:py-20">
        <h1
          className="font-poppins font-bold text-white leading-none text-center"
          style={{ fontSize: "clamp(56px, 9vw, 134px)", lineHeight: "82.8%" }}
        >
          Socioemocional
        </h1>
        <p
          className="font-poppins text-[#FAB834] text-center mt-4 leading-tight"
          style={{ fontSize: "clamp(24px, 4vw, 60px)", lineHeight: "1.1" }}
        >
          <span className="font-normal">que escuta a </span>
          <span className="font-bold">sua escola</span>
        </p>
      </div>
    </section>
  );
}
