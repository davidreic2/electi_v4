import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="w-full relative overflow-hidden" style={{ height: "clamp(300px, 42vw, 600px)" }}>
      <img
        src="/images/c70e893dd1a975547cf09d222f2391cb2b5f81e4.webp"
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        {!playing && (
          <button
            onClick={() => setPlaying(true)}
            aria-label="Reproduzir vídeo"
            className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 4L28 16L8 28V4Z" fill="#5B4696" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
