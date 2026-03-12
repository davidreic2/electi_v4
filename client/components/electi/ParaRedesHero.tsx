export default function ParaRedesHero() {
  return (
    <section className="bg-[#EF7933] px-4 md:px-[135px] pt-12 pb-16 md:pt-[48px] md:pb-[80px] overflow-hidden relative">
      {/* Top-left decorative arc */}
      <div className="absolute -top-12 -left-12 pointer-events-none">
        <svg width="214" height="214" viewBox="0 0 214 214" fill="none">
          <g clipPath="url(#heroArcTL)">
            <path d="M213.67 163.67C123.28 163.67 50 90.39 50 0" stroke="#AECB3C" strokeWidth="100" strokeMiterlimit="10"/>
          </g>
          <defs>
            <clipPath id="heroArcTL">
              <rect width="213.67" height="213.67" fill="white" transform="translate(213.67 213.67) rotate(-180)"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left: Title + asterisk */}
        <div className="flex-shrink-0 lg:max-w-[559px]">
          {/* Star / asterisk decoration */}
          <div className="mb-6">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
              <g clipPath="url(#starClip)">
                <path d="M35.6884 0H32.3115V68H35.6884V0Z" fill="white"/>
                <path d="M52.7686 5.617L49.8638 3.893L15.2262 62.387L18.131 64.111L52.7686 5.617Z" fill="white"/>
                <path d="M64.6055 19.16L62.9844 16.194L3.39904 48.839L5.02017 51.805L64.6055 19.16Z" fill="white"/>
                <path d="M67.8825 36.857L67.9985 33.479L0.114263 31.141L-0.001821 34.52L67.8825 36.857Z" fill="white"/>
                <path d="M61.6948 53.754L63.5151 50.907L6.30482 14.25L4.48446 17.098L61.6948 53.754Z" fill="white"/>
                <path d="M47.7616 65.13L50.7778 63.61L20.2369 2.872L17.2206 4.392L47.7616 65.13Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="starClip">
                  <rect width="68" height="68" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-[84px] leading-tight lg:leading-[90px]">
            <span className="font-normal text-white">Como funciona a </span>
            <span className="font-bold text-white">jornada SER </span>
            <span className="font-bold text-[#5B4696]">para redes?</span>
          </h1>
        </div>

        {/* Right: 4 Icon Cards in 2x2 grid */}
        <div className="relative flex-shrink-0">
          <div className="grid grid-cols-2 gap-6 md:gap-9">
            {/* Card 1: Atendimento - purple circle */}
            <div className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] rounded-full bg-[#5B4696] flex items-start justify-center pt-5 md:pt-7">
              <svg className="w-24 md:w-[125px]" viewBox="0 0 125 99" fill="none">
                <g clipPath="url(#chatIcon)">
                  <path d="M34.312 95.2223C54.2445 102.58 77.3339 98.8517 94.8369 87.0562C96.2087 87.9305 97.3987 88.6069 98.0598 88.9699C105.944 93.3251 115.166 94.348 123.05 89.4813C125.645 87.8811 125.661 84.1197 123.05 82.5194C117.959 79.4015 114.108 76.102 110.803 71.6313C124.042 52.3955 121.232 25.4884 101.481 11.0699C90.3083 2.92021 76.1604 0.462119 62.5911 0.21466C53.1206 0.0496873 35.849 -1.55055 29.4197 7.12701C17.1561 13.5609 5.37172 27.1052 2.38018 35.6343C-6.51179 60.941 10.6606 86.4788 34.312 95.2223Z" fill="white"/>
                  <circle cx="27" cy="52" r="5.5" fill="#5B4696"/>
                  <circle cx="49" cy="45" r="5.5" fill="#5B4696"/>
                  <circle cx="70" cy="40" r="4" fill="#5B4696"/>
                </g>
                <defs>
                  <clipPath id="chatIcon"><rect width="125" height="99" fill="white"/></clipPath>
                </defs>
              </svg>
              {/* Label */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#FAB834] px-2 py-1 whitespace-nowrap">
                <span className="font-poppins font-semibold text-[#5B4696] text-sm md:text-lg lg:text-[22px] leading-tight">
                  Atendimento
                </span>
              </div>
            </div>

            {/* Card 2: Processo de escuta - teal rounded square */}
            <div className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] rounded-[40px] bg-[#2FB6B7] flex items-end justify-center pb-5 md:pb-8">
              <svg className="absolute top-0 w-28 md:w-[141px]" viewBox="0 0 141 144" fill="none">
                <g clipPath="url(#flowerIcon)">
                  <path d="M86.881 142.678C109.835 137.363 125.583 113.444 122.591 90.2871C122.289 87.9887 121.8 85.7476 121.139 83.5641C130.933 77.2432 138.253 67.1874 140.339 55.4077C144.38 32.509 129.955 12.9432 109.245 4.65426C96.7326 -0.359304 80.4092 -0.445497 68.314 5.68858C53.0405 -2.47104 27.4551 -3.08875 17.3015 12.0956C4.73172 21.3183 -1.17924 39.4907 0.187041 54.6175C1.45265 68.6814 9.13257 80.7772 20.4799 87.1698C20.3936 89.6263 20.5949 92.1259 21.1414 94.6543C21.2277 100.156 22.2345 105.558 24.1904 110.356C34.0708 134.404 61.4683 148.568 86.8667 142.693L86.881 142.678Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="flowerIcon"><rect width="141" height="144" fill="white"/></clipPath>
                </defs>
              </svg>
              {/* Label */}
              <div className="absolute bottom-0 right-0 translate-y-1/2 bg-[#AECB3C] px-2 py-1 text-center max-w-[120px] md:max-w-[160px]">
                <span className="font-poppins font-semibold text-[#5B4696] text-sm md:text-base lg:text-xl leading-tight">
                  Processo de escuta aprofundada
                </span>
              </div>
            </div>

            {/* Card 3: Adequação da proposta - green rounded square */}
            <div className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] rounded-[40px] bg-[#AECB3C] flex items-end justify-center pb-5 md:pb-8">
              <svg className="absolute top-0 left-2 w-28 md:w-[143px]" viewBox="0 0 143 153" fill="none">
                <g clipPath="url(#magIcon)">
                  <path d="M104.294 92.8672C102.57 91.8458 100.78 91.8787 99.2692 92.5377C95.755 88.798 91.6496 84.9759 87.3799 83.938C89.5476 81.3844 91.5018 78.5837 93.1275 75.5524C104.475 54.4483 98.2183 27.2817 79.9409 12.1579C69.6774 3.6735 56.1459 -0.494586 42.9264 0.0490771C33.9438 0.411519 15.0917 3.01451 13.4495 14.2173C7.32424 21.4332 2.89039 30.6425 1.18253 38.5833C-3.85892 62.0102 4.99667 57.4113 19.6372 64.0779C31.5504 69.5047 45.471 66.9055 54.8859 58.6184C55.6168 61.5113 58.2569 64.3172 60.777 66.6989C60.0242 70.4074 63.4825 74.105 65.5008 76.7369C71.872 85.0348 78.8977 92.7238 86.458 99.9559C87.5271 100.978 89.4581 101.402 90.7563 100.511C98.8075 94.9858 93.7128 86.7314 89.229 80.7282C83.5997 73.1915 77.5122 66.1116 69.2864 61.3047Z" fill="white"/>
                  <path d="M38.3447 23.2951C34.1572 25.0744 29.1157 29.7696 31.8253 34.5637C32.1209 35.0909 32.7777 35.3381 33.3525 35.1898C36.9324 34.2837 39.1001 30.5604 43.1398 30.8569C49.4622 31.3182 50.431 39.2425 49.5935 44.0861C48.0171 53.2295 39.0344 60.083 40.4467 69.6053C40.89 72.6531 44.7491 72.8014 46.6212 71.2363C50.2011 68.2544 51.8269 63.4767 53.9124 59.3416C55.9487 55.3218 58.0343 51.1208 58.9375 46.6561C60.2348 40.2475 59.3152 32.6692 55.0127 27.5455C50.8744 22.6196 44.3222 20.7415 38.3447 23.2786V23.2951Z" fill="white"/>
                  <circle cx="50" cy="78" r="4.5" fill="white"/>
                </g>
                <defs>
                  <clipPath id="magIcon"><rect width="143" height="153" fill="white"/></clipPath>
                </defs>
              </svg>
              {/* Label */}
              <div className="absolute bottom-0 left-0 -translate-y-0 translate-y-1/2 bg-[#EF7933] px-2 py-1 text-center max-w-[130px] md:max-w-[170px]">
                <span className="font-poppins font-semibold text-[#5B4696] text-sm md:text-base lg:text-xl leading-tight">
                  Adequação da proposta
                </span>
              </div>
            </div>

            {/* Card 4: Experiência e degustação - yellow mixed radii */}
            <div className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] bg-[#FAB834]"
              style={{ borderRadius: "200px 40px 40px 40px" }}>
              <svg className="absolute top-2 left-4 w-28 md:w-[169px]" viewBox="0 0 169 125" fill="none">
                <g clipPath="url(#molIcon)">
                  <path d="M111.43 76.5201C101.524 67.1264 91.393 57.8456 80.6692 49.6385C81.2195 48.5508 81.7415 47.4207 82.1507 46.2059C88.4016 27.8281 72.6968 10.2979 53.7042 13.4056C37.3503 16.0895 27.8399 36.8546 37.1245 50.3589C37.8583 51.6161 38.7049 52.8451 39.7067 54.0034C40.6803 55.1193 41.7245 56.1223 42.811 57.0263C39.354 62.3377 36.2497 67.9739 33.1595 73.031C28.9264 79.9527 24.1006 87.0721 20.5589 94.573C16.0436 92.3834 10.7099 92.8779 6.7731 96.0844C6.43445 96.3669 6.0958 96.6777 5.77126 97.0026C4.40255 97.6383 3.14673 98.6695 2.30011 99.8843C-0.50786 103.91 -0.521971 109.815 1.03017 114.307C4.57188 124.52 16.735 128.433 25.2718 121.511C33.2724 115.041 31.0712 102.78 23.762 96.6777C28.0939 90.1516 31.692 83.018 35.7981 76.4494C39.2129 70.9686 43.319 65.516 47.0864 59.9221C57.2318 65.3465 69.9029 63.1429 77.3814 54.5261C85.89 63.8774 95.3439 72.6355 104.883 81.1534C99.9157 86.6766 98.0814 95.1663 100.141 103.034C104.346 112.4 107.394 115.55 110.936 117.81C119.74 121.172 130.224 119.646 137.604 112.188C148.582 101.099 144.546 80.7441 130.014 73.653C136.941 66.2041 140.074 56.8427 144.124 48.2118C152.66 25.3702 148.582 32.8852 141.076 48.2542C137.252 56.4048 132.666 65.2194 130.154 74.0622Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="molIcon"><rect width="169" height="125" fill="white"/></clipPath>
                </defs>
              </svg>
              {/* Label */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#34B7C0] px-2 py-1 text-center w-[120px] md:w-[160px] lg:w-[200px]">
                <span className="font-poppins font-semibold text-[#5B4696] text-sm md:text-base lg:text-xl leading-tight">
                  Experiência e degustação
                </span>
              </div>
            </div>
          </div>

          {/* Circular arrows between cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <svg width="108" height="120" viewBox="0 0 108 120" fill="none">
              <g clipPath="url(#arrowsIcon)">
                <path d="M67.633 118.864C83.9231 115.452 98.7769 103.199 106.055 88.309C106.548 87.2973 108.189 83.985 107.981 83.1102L89.2218 71.7163C84.5932 80.0345 79.4682 88.0258 71.393 93.374C58.8473 101.689 40.6369 101.527 28.5721 92.3654C27.3095 91.4066 21.2476 85.9213 21.4678 84.6699L27.297 75.4333L0 72.6316L7.13837 105.63L14.1154 95.6746C25.5474 114.232 46.1 123.375 67.633 118.864Z" fill="#5B4696"/>
                <path d="M46.7794 21.9751C60.6622 18.1802 75.8106 21.9938 85.164 33.0888C85.5922 33.5962 86.6531 34.7823 86.5135 35.352L80.6626 44.6103L107.963 47.4152L100.669 14.4227L93.6953 24.3784C87.1123 12.8506 74.9978 4.07174 62.0489 1.1828C38.5676 -4.06275 14.8476 8.66976 3.35977 29.1476C2.76103 30.2185 -0.0217207 35.5793 0.0155068 36.3793C0.0372228 36.8151 0.288508 37.0735 0.635965 37.2852L18.319 48.181L19.2218 48.3367C24.474 36.5599 33.9794 25.4742 46.7794 21.9751Z" fill="#5B4696"/>
              </g>
              <defs>
                <clipPath id="arrowsIcon"><rect width="108" height="120" fill="white"/></clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom-right decorative arc */}
      <div className="absolute -bottom-12 -right-12 pointer-events-none">
        <svg width="214" height="214" viewBox="0 0 214 214" fill="none">
          <g clipPath="url(#heroArcBR)">
            <path d="M0 50C90.39 50 163.67 123.28 163.67 213.67" stroke="#AECB3C" strokeWidth="100" strokeMiterlimit="10"/>
          </g>
          <defs>
            <clipPath id="heroArcBR">
              <rect width="213.67" height="213.67" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}
