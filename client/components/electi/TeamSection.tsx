import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/dec64b337b64a2ab96651313ba61c7025cd5fbd8?width=160",
    name: "Lorem ipsum",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#34B7C0",
    isSpecial: false,
  },
  {
    id: 2,
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/2ff1a4d75fa0bf7589cf6a87c3f115924d5e8963?width=160",
    name: "Lorem ipsum",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#AECB3C",
    isSpecial: false,
  },
  {
    id: 3,
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/900fd000ba5960616338c9fc9281518404fe7d40?width=478",
    name: "Lorem ipsum",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#34B7C0",
    isSpecial: true,
  },
  {
    id: 4,
    avatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/2ff1a4d75fa0bf7589cf6a87c3f115924d5e8963?width=160",
    name: "Lorem ipsum",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#AECB3C",
    isSpecial: false,
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
      className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
      aria-label={direction === "left" ? "Anterior" : "Próximo"}
    >
      {direction === "left" ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.6 12L14.6 6L16 7.4L11.4 12L16 16.6L14.6 18L8.6 12Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15.4 12L9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  );
}

export default function TeamSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const prev = () => {
    setStartIndex((i) =>
      i === 0 ? teamMembers.length - visibleCount : i - 1
    );
  };

  const next = () => {
    setStartIndex((i) =>
      i >= teamMembers.length - visibleCount ? 0 : i + 1
    );
  };

  return (
    <section className="bg-[#5B4696] py-16 md:py-20 px-4 md:px-8 lg:px-[56px]">
      <div className="max-w-[1170px] mx-auto flex flex-col gap-12">
        <h2 className="font-poppins font-semibold text-white text-center text-4xl md:text-5xl">
          Nossa equipe
        </h2>

        <div className="flex items-center gap-4 md:gap-6">
          <ArrowButton direction="left" onClick={prev} />

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-3xl p-8 flex flex-col items-center gap-6"
                style={{ backgroundColor: member.color }}
              >
                {member.isSpecial ? (
                  <div className="w-20 h-20 rounded-full bg-[#FAB834] overflow-hidden flex-shrink-0 relative">
                    <img
                      src={member.avatar}
                      alt=""
                      className="absolute -left-6 -top-2 w-44 h-28 object-cover"
                    />
                  </div>
                ) : (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div className="flex flex-col gap-5 w-full">
                  <h3 className="font-poppins text-2xl text-white text-center">
                    {member.name}
                  </h3>
                  <p className="font-poppins text-sm text-black text-center leading-relaxed">
                    {member.bio}
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
