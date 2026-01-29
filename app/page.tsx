import Image from "next/image";

const PRODUCTS = [
  {
    id: "one",
    label: "Kashmiri Chilli",
    title: "KLTEN Pure Kashmiri chilli",
    description:
      "Vibrant colour and gentle heat, sourced from select Kashmiri harvests.",
    image: "/products/kashmiri-chilli.jpg.jpeg",
    alt: "KLTEN Pure Kashmiri chilli",
  },
  {
    id: "two",
    label: "Turmeric Powder",
    title: "KLTEN Pure Turmeric Powder",
    description:
      "Deep-golden turmeric, stone-ground to retain aroma and curcumin richness.",
    image: "/products/turmeric-powder.jpg.jpeg",
    alt: "KLTEN Pure Turmeric Powder",
  },
  {
    id: "three",
    label: "Chilli Powder",
    title: "KLTEN Pure Chilli Powder",
    description: "Clean, bold heat with no added colours or fillers.",
    image: "/products/chilli-powder.jpg.jpeg",
    alt: "KLTEN Pure Chilli Powder",
  },
  {
    id: "four",
    label: "Coriander Powder",
    title: "KLTEN Pure Coriander Powder",
    description: "Warm, citrusy notes from freshly milled coriander seeds.",
    image: "/products/coriander-powder.jpg.jpeg",
    alt: "KLTEN Pure Coriander Powder",
  },
] as const;

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen bg-[#FDFCF8] flex flex-col items-center justify-center p-6 text-center"
    >
      {/* Brand Identity */}
      <div id="contact" className="mb-12 flex flex-col items-center scroll-mt-28">
        <Image
          src="/logo.svg"
          alt="KLTEN AGRI logo"
          width={240}
          height={240}
          className="mb-6"
        />
      </div>

      {/* Hero Text */}
      <div className="max-w-3xl space-y-8">
        <h2 className="text-6xl md:text-8xl font-serif text-[#004924] leading-[1.1]">
          Purely Sourced. <br /> 
          <span className="italic font-light text-[#85C346]">Patiently Curing.</span>
        </h2>
        <p className="text-stone-600 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
          Bringing the authentic flavors of the Western Ghats to your kitchen. Our digital storefront is under cultivation.
        </p>
      </div>

      {/* Product Preview Cards */}
      <div id="products" className="mt-16 w-full max-w-4xl scroll-mt-28">
        <p className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-6">
          Our Products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white/60 backdrop-blur-sm p-6 shadow-sm"
            >
              <Image
                src={product.image}
                alt={product.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 object-cover opacity-25"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/60" />

              <div className="relative">
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-400">
                  {product.label}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-[#004924]">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">
                  {product.description}
                </p>
                <span className="absolute top-4 right-4 rounded-full bg-[#004924] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wide text-white">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Email Capture */}
      <div id="notify" className="mt-16 w-full max-w-sm scroll-mt-28">
        <div className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-6 py-4 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#85C346]/30 focus:border-[#004924] bg-white/50 backdrop-blur-sm transition-all"
          />
          <button className="bg-[#004924] text-white px-8 py-4 rounded-full font-medium shadow-lg hover:bg-[#00663A] transition-all active:scale-95">
            Notify Me on Launch
          </button>
        </div>
      </div>
    </main>
  );
}