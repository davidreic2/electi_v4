import { useState } from "react";

const testimonials = [
  {
    id: 1,
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/a421198468ea05f570a941b8c377330fef10dbef?width=128",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    author: "Lorem ipsum",
  },
  {
    id: 2,
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/1f9bb38fc79cf2c6eb037410ba1c61b8cda5534f?width=128",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    author: "Lorem ipsum",
  },
  {
    id: 3,
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/806ed48eb51ea00568ae399a9ddcc84eddd8013c?width=408",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    author: "Lorem ipsum",
    isImage: true,
  },
  {
    id: 4,
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/a421198468ea05f570a941b8c377330fef10dbef?width=128",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    author: "Lorem ipsum",
  },
];

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-14 h-14 rounded-full bg-[#5B4696] flex items-center justify-center hover:bg-[#4a3880] transition-colors"
      aria-label={direction === "left" ? "Anterior" : "Próximo"}
    >
      {direction === "left" ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.6 12L14.6 6L16 7.4L11.4 12L16 16.6L14.6 18L8.6 12Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15.4 12L9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
}

export default function TestimonialsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => {
    setStartIndex((i) =>
      i === 0 ? testimonials.length - visibleCount : i - 1
    );
  };

  const next = () => {
    setStartIndex((i) =>
      i >= testimonials.length - visibleCount ? 0 : i + 1
    );
  };

  const visible = testimonials.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="relative bg-[#EF7933] w-full">
      {/* Yellow top accent bar */}
      <div className="h-1 bg-[#FAB834]" />

      <div className="px-4 md:px-8 lg:px-[56px] pb-12">
        {/* Cards overlap from above */}
        <div className="flex items-center gap-4 md:gap-6 -mt-16 md:-mt-20">
          <ArrowButton direction="left" onClick={prev} />

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {visible.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 md:p-8 flex flex-col gap-5 shadow-md"
              >
                {t.isImage ? (
                  <div className="w-16 h-16 rounded-full bg-[#FAB834] overflow-hidden flex-shrink-0 relative">
                    <img
                      src={t.avatar}
                      alt=""
                      className="absolute -left-4 -top-2 w-36 h-24 object-cover"
                    />
                  </div>
                ) : (
                  <img
                    src={t.avatar}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div className="flex flex-col gap-5 flex-1">
                  <p className="font-poppins text-sm text-black leading-relaxed">
                    {t.text}
                  </p>
                  <p className="font-poppins text-base text-[#9D9D9D]">
                    {t.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}
