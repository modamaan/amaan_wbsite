export function LogoMarquee() {
  const items = [
    "Software Development",
    "Product Building",
    "Startup",
    "App Development",
    "UI/UX",
    "SEO",
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-6 md:py-16 -rotate-[5deg] mt-16 md:mt-32 mb-8 md:mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-6 md:gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-16">
              <span className="text-xl sm:text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
                {item}
              </span>
              <span className="text-xl sm:text-3xl md:text-5xl text-[#FFC224]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
