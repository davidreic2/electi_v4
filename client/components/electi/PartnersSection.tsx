export default function PartnersSection() {
  const logos = [
    {
      src: "/images/99fb7de39f6493524e3b2ab9ce817bd36b1ebd6c.webp",
      alt: "Nicholas",
    },
    {
      src: "/images/6985badf6290344494185ec36edc60dad72223f9.webp",
      alt: "Colégio Elvira Brandão",
    },
    {
      src: "/images/54ed1c7bd4a4dfad8e63c5686b88ce8649d0e10d.webp",
      alt: "Santo",
    },
    {
      src: "/images/021bcfec3ecb4f2dcb9e2e4d0f7d349fda6cc350.webp",
      alt: "Colégio Gonoscenza",
    },
    {
      src: "/images/e169a5b1e45b47c8aecbd2cab67d056b43947599.webp",
      alt: "Sphere",
    },
    {
      src: "/images/e689342c32918564e9945323210e2d4d4381331f.webp",
      alt: "Carolina Patrício",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-8 px-4 md:px-8 lg:px-14 overflow-hidden">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-14">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-12 md:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
}
