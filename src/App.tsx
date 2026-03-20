import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Menu, 
  ArrowRight, 
  Plus, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  MoveRight,
  Globe,
  Share,
  CheckCircle2,
  Leaf,
  Award,
  Trash2,
  Minus,
  X,
  Wind,
  Droplets,
  Zap,
  Maximize2,
  Filter,
  Star,
  Gauge,
  Snowflake,
  Timer
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

// --- Components ---

const Navbar = ({ onCartClick, onLogoClick, onMensClick, currentView }: { 
  onCartClick: () => void, 
  onLogoClick: () => void, 
  onMensClick: () => void,
  currentView: string 
}) => (
  <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-8 py-6">
    <div 
      className="text-3xl font-black tracking-tighter text-on-surface uppercase logo-ktx cursor-pointer"
      onClick={onLogoClick}
    >
      KTX
    </div>
    <div className="hidden md:flex items-center gap-12">
      <a 
        className={`text-lg font-medium tracking-wide transition-colors ${['mens', 'productDetail'].includes(currentView) ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-on-surface'}`} 
        href="#" 
        onClick={(e) => { e.preventDefault(); onMensClick(); }}
      >
        Men
      </a>
      <a className="text-on-surface-variant hover:text-on-surface transition-colors text-lg font-medium tracking-wide" href="#">Women</a>
      <a className="text-on-surface-variant hover:text-on-surface transition-colors text-lg font-medium tracking-wide" href="#">Gear</a>
    </div>
    <div className="flex items-center gap-6">
      <button 
        className="scale-95 active:scale-90 transition-transform text-on-surface-variant hover:text-primary"
        onClick={onCartClick}
      >
        <ShoppingBag className="w-6 h-6" />
      </button>
      <button className="md:hidden text-on-surface-variant">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen w-full flex items-center overflow-hidden bg-surface-container-lowest">
    <div className="absolute inset-0 z-0 opacity-60">
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo8DNmS5CLCDjQPuzSprsPGONaI15xyyftjfKEOt5_bVxSHl-aVvfoSFN04u80x-aBp5MrDErcZYCWoKQR97ie3buqalCbzPG4i7227IZtZp5HLsh7vImd00SKJf6OsuxL8oXnB4pDX1rYwEX6lnP1Ackuo1K-yiurpi95GBLlwElzoI1eqTCsRGmXon5M1rWFZr4Ds_XcS8mACNibLBIxUxjP3bdPE1WsUrRE19S53dFppbtbZHnNaZRrY72-rEQ9E7sknoJyNN2u" 
        alt="Pro cyclist climbing a mountain pass at dawn" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
    </div>
    <div className="relative z-10 px-8 md:px-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl space-y-8"
      >
        <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase rounded-full font-label">
          Evolution of Speed
        </span>
        <h1 className="text-6xl md:text-9xl font-black font-headline tracking-tighter uppercase leading-[0.85] text-on-surface">
          ENGINEERED <br /> <span className="text-primary">FOR MOTION.</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-medium tracking-wide leading-relaxed">
          Precision-cut silhouettes meeting high-performance textiles. The new 2024 KTX collection defines the boundary of aerodynamic art.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          <button className="px-10 py-5 bg-primary text-on-primary rounded-full font-bold text-lg uppercase tracking-wider hover:bg-on-primary-container transition-all duration-300 scale-95 active:scale-90 shadow-[0_12px_24px_rgba(255,181,158,0.15)]">
            Explore Men
          </button>
          <button className="px-10 py-5 bg-transparent border border-outline-variant/30 text-on-surface rounded-full font-bold text-lg uppercase tracking-wider hover:bg-surface-container-high transition-all duration-300 scale-95 active:scale-90">
            Explore Women
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const NewSeasonDrops = ({ onProductClick }: { onProductClick: () => void }) => (
  <section className="py-24 px-8 md:px-24 bg-surface">
    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div>
        <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter text-on-surface">New Season Drops</h2>
        <p className="mt-4 text-on-surface-variant text-lg font-medium tracking-wide max-w-xl">Fresh releases featuring our patented AeroVent™ mesh and Italian compression fabrics.</p>
      </div>
      <a className="text-primary font-bold uppercase tracking-widest flex items-center gap-2 group" href="#" onClick={(e) => { e.preventDefault(); onProductClick(); }}>
        View All Releases
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Large Feature Card */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low h-[600px] cursor-pointer"
        onClick={onProductClick}
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvAoDdp68KVABrX9mfcKKQrGvIFoaNNpv6Xt3N6rmrZtgLoY4mxN3bxCNQlC9xewMCgVYC6uTdbY7QKaIwy3sc24W5CYMUVUktR1mK4d3CEcLIKk931gXHGG8C_234uwg7SDn3n1hEkPXXwXpdTJumSO7TOA3OyBeoT7X88d84Riff3280NmtW-2wtmP0_KqFD1ZrNz1uAkbf0Jf-jzzfjZpyPMMjA-SUgnF-fsPtrkXBT19X5e99Y6a-qIYlXK8ljIIkmjbrq-3XF" 
          alt="KTX Pro Aero Jersey" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 p-10 w-full">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Featured</span>
          <h3 className="text-3xl font-black font-headline text-on-surface mt-2 uppercase tracking-tight">KTX Pro Aero Jersey</h3>
          <p className="text-on-surface-variant mt-2 max-w-sm">Optimized for high-velocity stages and extreme heat management.</p>
          <button className="mt-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-on-primary group-hover:w-full transition-all duration-500 overflow-hidden whitespace-nowrap">
            <Plus className="w-6 h-6 shrink-0" />
            <span className="ml-2 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Add to Kit</span>
          </button>
        </div>
      </motion.div>

      {/* Secondary Cards */}
      <div className="group relative overflow-hidden rounded-xl bg-surface-container-low h-[288px] cursor-pointer" onClick={onProductClick}>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgoJCcEBItR7xsbCqChQCSk4lRfUTmHtGZ7mXli05BY1OqX-ovYykHths8ym8AsFihlL1vTFX5sCHUrF75KbUfKefdVFrpdEwpSB2P56kSgVzmymeBqkLIQUCfGxuchcL_Q_dQZHW2UeHOuP_OBgsD-7m_USTnuRuTbrrM0yl4TWxoIe7rbV1ZA_FmSmeNEs76S6i8AMpl78pNvrAzUgRCE_j0SglqVguyNq5Rrzqjcn3SAyrKX51fzRNJkpImC8M21enH15VGhMq9" 
          alt="Velo Shoes" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        <div className="absolute bottom-6 left-6">
          <h4 className="text-lg font-bold font-headline text-on-surface uppercase tracking-tight">Velo Shoes</h4>
          <p className="text-primary font-bold">$320</p>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl bg-surface-container-low h-[288px] cursor-pointer" onClick={onProductClick}>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuANXoGGqmorDyBxRoUi_lj_RBuJoULXWxKGyIkhie9NrVNJ-4Yo4rLiCzGfjPbI1twiIkaYeSwY8FazrQRA8xDcrFNVmIRlHaupRj8LR2ojhgcYsPlQApsCTcLYvdj2er_cnNU3UUhRQovc4o9CxmC23a2ERuEergX9iJ60662cu4iNTbdldNOOovvFtdTvBnvagsnu5nYANdh7CvcqRQwrdB17mhuOLgKhaDwLMhVgqMVKbYLsZgrK_yEfOu84lUi9CzC0SlKpRZUb" 
          alt="Apex Helmet" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
        <div className="absolute bottom-6 left-6">
          <h4 className="text-lg font-bold font-headline text-on-surface uppercase tracking-tight">Apex Helmet</h4>
          <p className="text-primary font-bold">$180</p>
        </div>
      </div>

      {/* Horizontal Medium Card */}
      <div className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-low h-[288px] cursor-pointer" onClick={onProductClick}>
        <div className="absolute inset-0 flex">
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <h4 className="text-2xl font-black font-headline text-on-surface uppercase tracking-tight leading-none mb-4">Carbon <br /> Essentials</h4>
            <p className="text-on-surface-variant text-sm">Everything you need for the double-century effort.</p>
            <button className="mt-6 text-primary font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
              Shop Collection <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-1/2">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1dvo1lgK3UaqHFoLJ_z-ecjCVNbVcnECkooxiKQwaYogJR8loc2fxBlDLkvPLKcR3JLNerUQIpXtPRj89f_Cn0t09FqYxVmJaQI1xil89h_zSaPWr2Bi_6JDsyooY3T-CT5gHUS3OuNdHlxjFEelXs2M7MKc-_czyh6DpI7GVWKuxvzhxJERPBNwbYidpuJ5GSk-ucUFYFgihhkqFMb1rjdu6mG5pxSmB3du9WWHJTC0fymCQ_ya8MkjMWoOmhF04Jr2nBJxrRhYF" 
              alt="Carbon Essentials" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PerformanceCollection = ({ onProductClick }: { onProductClick: () => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const products = [
    {
      id: 1,
      name: "Stealth Bib Shorts",
      desc: "Race-ready compression",
      price: "$210",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuhAESngZTmZaKZBZ11Cfo3H1xvtfDRHOKPFHfpcYJNMXOI3rFstS-Wem3PvJVLMdihYqhUyOSaElyTP7E8yvC5mcJJBiOX8EDhAmOfide-3UKUC7fqULVYQH04vLa9tIXReQmqEd8613MulOXnc4ERLOIc5X4ySyWbSfOBKi7CyVxPf2NM-ha27-T5sDC5X_9AjKddh6qQMCyi0v_EZnGKFp7xXX1ddvAeIIOBzw9fzJAXiML33Y-NHL1_pU78ac5gOBK8txvYg6c",
      tag: "Limited Edition"
    },
    {
      id: 2,
      name: "Mist Shell II",
      desc: "Ultra-packable weather protection",
      price: "$165",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq_nNRS02e0rEBOQrlWfNBChq3zw269rqkGac9HoLIgRGWjkoDQ2Hz7S1eciNEW8UhTnvnZ3ntrwbHux8lWlZwLez6wJCngIom4frUap6g17-phAgL2pdlETeABjjUSZGmV6n5Ct21TJCQ-jFjGMfBKUNfWPhoXl2o480PJw1j0WNyz_4vL9a2QMTqp10OdsXZ2qvOxmlgv3mfxUrRsprzqb-jBOs6DI2ES7ubVLP7NBQ5QhYTM9xRW0xKIC11ndKMIshj6xtZ4keo"
    },
    {
      id: 3,
      name: "Glow Tech Socks",
      desc: "High-visibility knit",
      price: "$35",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC74DT84j7m5uXRfLSzm7dRnORaGxiRzw9JXbIzOK6TcpeMUuNeI8_j_XpcHAhn3AHPO21lJHOim6nhzHSaUaJsGdqGT5r1PLVyA7VpbIpC122upIPmlyQcxmy_NRTk2q7pD9Pl0U6ipf9dhzqSafRvKvXscvOeUdRwgQcbgbaD1RzNYVQvQPFQRDjWhSoXSAXhqgrhpCqR8xorS-GaJfP1cKH6YlOz17xw4p1-z6uExOFz38NkQIxAfpWaSNyqn6UZh9CZzusgXAKD"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="px-8 md:px-24 mb-12">
        <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter text-on-surface">Performance Collection</h2>
        <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-on-surface-variant text-lg font-medium tracking-wide">Elite equipment for those who chase podiums and personal bests.</p>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-8 md:px-24 hide-scrollbar snap-x"
      >
        {products.map(product => (
          <div key={product.id} className="min-w-[320px] md:min-w-[450px] snap-start group cursor-pointer" onClick={onProductClick}>
            <div className="relative aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden mb-6">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {product.tag && (
                <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur px-3 py-1 rounded-full">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{product.tag}</span>
                </div>
              )}
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xl font-bold font-headline uppercase tracking-tight text-on-surface">{product.name}</h4>
                <p className="text-on-surface-variant font-medium">{product.desc}</p>
              </div>
              <p className="text-primary font-bold text-lg">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section className="py-32 px-8 md:px-24 bg-surface">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDrU4i8V_ZjbTyfQxa_VhFY9ATAD7UnhURHVtTIQp-A_jiieiUAI5H5sgluCqtx9m-6yh4okDqWwjVIzBD4EeNYM3t5DXVkVLvikNWvr4SFnN9hXb8cxfz6C6muliVD818i41Vwdg9hVZyujd7rdJE-VnRd-_oaiDrCQVaqs0SzQrX_fzGOe7osKHtoE4Oeg3QIBrSWAis4xMLPducFiF6mdPl8BS1WAljDrH8nhjsr874p9o5oU1Rrn0vLcrkh6qthtEF5ydy1_vK" 
            alt="Textile detail" 
            className="w-full h-[600px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Spec-Glass Overlay */}
        <div className="absolute -bottom-12 -right-12 z-20 w-64 p-8 spec-glass hidden md:block">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Award className="text-primary w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Italian Craft</span>
            </div>
            <div className="flex items-center gap-4">
              <Leaf className="text-primary w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Sustainable</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-primary w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface">Lab Tested</span>
            </div>
          </div>
        </div>
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="space-y-10 order-1 lg:order-2">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-sm">Philosophy</span>
        <h2 className="text-5xl md:text-7xl font-black font-headline uppercase tracking-tighter text-on-surface leading-[0.9]">
          UNCOMPROMISING <br /> STANDARDS.
        </h2>
        <div className="space-y-6 text-lg text-on-surface-variant font-medium leading-relaxed tracking-wide">
          <p>We don't just design apparel; we engineer performance tools. Every seam is considered, every fabric weight is tested in the wind tunnel, and every prototype is ridden for thousands of kilometers before it earns the KTX name.</p>
          <p>Our commitment to quality extends to the environment. 85% of our current collection is made from recycled polymers, ensuring the roads we love stay clear for generations to come.</p>
        </div>
        <div className="pt-6">
          <a className="inline-flex items-center gap-4 py-4 px-8 border-b-2 border-primary text-on-surface font-bold uppercase tracking-[0.2em] hover:bg-primary/5 transition-colors" href="#">
            Read Our Story
            <MoveRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-24 px-8 md:px-24 bg-surface-container-low">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h3 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter text-on-surface">Join the Breakaway</h3>
      <p className="text-on-surface-variant text-xl font-medium tracking-wide">Get early access to drops and exclusive performance data from our racing team.</p>
      <form className="flex flex-col sm:flex-row gap-4 mt-12 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input 
          className="flex-1 bg-surface-container-highest border-none rounded-full px-8 py-5 text-on-surface focus:ring-2 focus:ring-primary placeholder:text-outline-variant font-medium outline-none" 
          placeholder="Your performance email" 
          type="email"
        />
        <button className="bg-primary text-on-primary font-black uppercase tracking-widest px-10 py-5 rounded-full hover:bg-on-primary-container transition-all scale-95 active:scale-90 shadow-xl">
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

const Footer = ({ onLogoClick }: { onLogoClick: () => void }) => (
  <footer className="bg-[#0E0E0E] w-full py-16 px-8 border-t border-outline-variant/20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
      <div className="space-y-6">
        <div 
          className="text-3xl font-black text-on-surface uppercase logo-ktx cursor-pointer"
          onClick={onLogoClick}
        >
          KTX
        </div>
        <p className="text-sm text-on-surface-variant font-body tracking-[0.02em] leading-relaxed max-w-xs">
          Architects of movement. We build gear for the relentless pursuit of speed.
        </p>
        <div className="flex gap-4">
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors" href="#">
            <Globe className="w-5 h-5" />
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary transition-colors" href="#">
            <Share className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <h5 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Support</h5>
        <ul className="space-y-3">
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Customer Service</a></li>
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Size Guides</a></li>
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Shipping</a></li>
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Returns</a></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h5 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Explore</h5>
        <ul className="space-y-3">
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">New Releases</a></li>
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Professional Series</a></li>
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Club Custom</a></li>
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Outlet</a></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h5 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Company</h5>
        <ul className="space-y-3">
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Our Story</a></li>
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Privacy Policy</a></li>
          <li><a className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-16 pt-8 border-t border-outline-variant/10 text-center">
      <p className="text-[10px] text-on-surface-variant font-bold tracking-[0.3em] uppercase opacity-80">
        © 2024 KTX GALLERY. ENGINEERED FOR MOTION.
      </p>
    </div>
  </footer>
);

const ProductDetail = ({ onAddToCart }: { onAddToCart: (product: any) => void }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Obsidian Black');

  const product = {
    id: 'aero-lab-v2',
    name: "Aero-Lab Bib Short V2",
    price: 245.00,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWCzXw0qivGNbACm7M8VfFJdOhtcvNo6x-orW0LIGgMxqDldGkMieCFffPzfRGMD4kZUgAUzn_NtSJOf0q9VcbosyVedo6G8cAcEE6xrtgt30m0cj7jDu_MXX9BkrGl0_R8kp_NHcu4bMsbgMgKilyMz10Sr3h0-c0dPNJnBnF7z0gpQn6KHzoCJYk_esMrqw9Qnhify7x1mZzCQYP0HVkKvKSl0YFmU0p8AkINvBUIJoUORP2zfztHyGIZTBtF1f5mjLacqXQt0Ln"
  };

  return (
    <div className="pt-32 pb-24">
      {/* Product Section */}
      <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Gallery Grid (Asymmetric) */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-fit">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-2 overflow-hidden rounded-xl bg-surface-container-low aspect-[4/5]"
          >
            <img 
              alt="KTX Bibshorts Front View" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src={product.img} 
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="overflow-hidden rounded-xl bg-surface-container-low aspect-square">
            <img 
              alt="Fabric Detail" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-YhKKDVBZHZunAO275Qvugfl8yXh-N-W0d0ThwWIdLmwPup3Re4ovjlfmpXpiiCjSs-pqX5uFaqylr8pTs1yFqKeiUte17NL2TdWP8T3REueoPFWAeIQGd-VLhNQwW0UsN6EwZVzjSi2aCUvub7kOhivmM44cCxAuaQc68SUjXzjI2bp1OUkOpoGtEe2lnzM-JeaCeK_0bxcs0y53KvMMWdbLjAZX7qTM4TxcsHVH6XOnvV-iBjm5BuIwwvHMxja1QG9Rc19iLQKF" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="overflow-hidden rounded-xl bg-surface-container-low aspect-square">
            <img 
              alt="Back View Detail" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJjEIETPoNVIoQj736lxjJepnZ8Y5nwrhetc3aupWDQgjnYUI3fxoP-RtvaYiHvKp6gsqHoadvpMpRCA27TDjT2enYcMF-fd5pHph-5-SUvAey1NYQ7QYEVywTYW0nFxw02VO_v4d843dOPeC_1dIrLVLusUcKA9nS1uI96yJLeUfweAtlKpkjkQ6VxmR4UvajKs45f9E9K5O3JFHhMUu6Iv3V2pJS9TZPwRAbLtDR09BD79b6A3AciQ-3Cv_tM6udN1lHal3ALomf" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Product Info (Fixed Column) */}
        <div className="lg:col-span-5 flex flex-col space-y-12">
          <header>
            <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase mb-4 block">Engineered for Motion</span>
            <h1 className="text-5xl lg:text-7xl font-black font-headline tracking-tighter uppercase leading-tight text-on-surface">AERO-LAB<br/>BIB SHORT V2</h1>
            <p className="mt-6 text-on-surface-variant font-body text-xl leading-relaxed max-w-lg">
              Our most advanced compression system yet. Designed for 8+ hour efforts where every gram of drag and every millisecond of muscle fatigue matters.
            </p>
          </header>

          {/* Color Selection */}
          <div className="space-y-4">
            <label className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant">Select Color: {selectedColor}</label>
            <div className="flex gap-3">
              <button 
                onClick={() => setSelectedColor('Obsidian Black')}
                className={`w-12 h-12 rounded-full transition-transform active:scale-90 ${selectedColor === 'Obsidian Black' ? 'ring-2 ring-primary bg-[#131313]' : 'bg-[#131313]'}`}
              ></button>
              <button 
                onClick={() => setSelectedColor('Carbon Grey')}
                className={`w-12 h-12 rounded-full transition-transform active:scale-90 ${selectedColor === 'Carbon Grey' ? 'ring-2 ring-primary bg-[#2A2A2A]' : 'bg-[#2A2A2A]'}`}
              ></button>
              <button 
                onClick={() => setSelectedColor('Deep Earth')}
                className={`w-12 h-12 rounded-full transition-transform active:scale-90 ${selectedColor === 'Deep Earth' ? 'ring-2 ring-primary bg-[#4C4546]' : 'bg-[#4C4546]'}`}
              ></button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant">Select Size</label>
              <button className="text-xs font-bold font-headline underline tracking-widest text-primary">Size Guide</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-4 font-headline font-bold transition-colors text-sm rounded border ${selectedSize === size ? 'border-primary text-primary' : 'border-outline-variant/20 hover:bg-surface-container-high text-on-surface'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col space-y-4">
            <button 
              onClick={() => onAddToCart({ ...product, size: selectedSize, color: selectedColor })}
              className="bg-primary text-on-primary font-headline font-black py-6 rounded-full text-xl uppercase tracking-tighter hover:bg-on-primary-container transition-all flex justify-center items-center gap-4 active:scale-95 shadow-xl"
            >
              Add to Bag — ${product.price}
            </button>
            <p className="text-center text-on-surface-variant text-sm font-body">Free express shipping on all orders over $200</p>
          </div>

          {/* Specs Glass Card */}
          <div className="spec-glass p-8 space-y-6">
            <h3 className="font-headline font-bold text-sm tracking-widest uppercase text-on-surface">Technical Specifications</h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex gap-4 items-start">
                <Gauge className="text-primary w-6 h-6" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface">Aero-Dimpled</p>
                  <p className="text-xs text-on-surface-variant">Reduced surface drag</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Snowflake className="text-primary w-6 h-6" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface">Thermal Control</p>
                  <p className="text-xs text-on-surface-variant">Active cooling fabric</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Maximize2 className="text-primary w-6 h-6" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface">Muscle Support</p>
                  <p className="text-xs text-on-surface-variant">Graduated compression</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Timer className="text-primary w-6 h-6" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface">Endurance Pad</p>
                  <p className="text-xs text-on-surface-variant">Triple-density foam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fabric Tech Section (Wide Asymmetric) */}
      <section className="mt-48 bg-surface-container-lowest py-32">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-3xl group-hover:bg-primary/20 transition-all duration-1000"></div>
            <img 
              alt="Performance in motion" 
              className="relative rounded-xl w-full h-[600px] object-cover grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCinzAf6Ym_i9E6OCf_jrQp4uFi6ZXGNCiBLu37MrsGC6D4Hd2MOck-Faj5epRfV05r_c5fU8Zew-2di6PGY7gcGIcA2zRJFunAebgIGPqGgBI8xHFI7VZ04R0udCxQ37dYFQueC_W8qhjO_5EjpaPJN8dkXijii0381iXfXqD1R0Fse_ozxKU5QLXu-3GjgYgeid05eK9cONW19380y4lPrrDMH6Px-7NfCZ3r2y53SMZBCxiCfiZc2C2V9rSRcnPIC-4J8Lh2umB" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-12">
            <h2 className="text-6xl font-black font-headline uppercase leading-none tracking-tighter text-on-surface">THE KTX<br/>DNA.</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-8 py-2">
                <h4 className="text-xl font-bold font-headline uppercase text-on-surface">SYNTH-MESH STRAPS</h4>
                <p className="text-on-surface-variant mt-2">Laser-cut, raw-edge straps that disappear on the body. Zero irritation, maximum stability during explosive sprints.</p>
              </div>
              <div className="border-l-2 border-outline-variant/30 pl-8 py-2">
                <h4 className="text-xl font-bold font-headline uppercase text-on-surface">3D PRO CHAMOIS</h4>
                <p className="text-on-surface-variant mt-2">Molded to your anatomy with ultra-high density inserts at key pressure points. Optimized for aggressive aero positions.</p>
              </div>
              <div className="border-l-2 border-outline-variant/30 pl-8 py-2">
                <h4 className="text-xl font-bold font-headline uppercase text-on-surface">WARP-KNIT FABRIC</h4>
                <p className="text-on-surface-variant mt-2">A unique mechanical stretch that provides industry-leading compression without sacrificing breathability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews (Bento Style) */}
      <section className="mt-48 max-w-screen-2xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black font-headline uppercase tracking-tighter text-on-surface">Field Tested</h2>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-5 h-5 ${i === 5 ? 'fill-primary/50' : 'fill-primary'}`} />
                ))}
              </div>
              <span className="text-on-surface-variant font-bold">4.9/5 (124 Reviews)</span>
            </div>
          </div>
          <button className="bg-surface-container-high px-8 py-4 rounded-full font-headline font-bold uppercase text-xs tracking-widest hover:text-primary transition-all text-on-surface">Write a Review</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
            <p className="text-lg font-medium italic text-on-surface">"The compression is unreal. I've ridden in almost every premium brand out there, and these are the first to truly hold their shape after 6 hours in the saddle."</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline font-bold text-xs uppercase text-on-surface">MK</div>
              <div>
                <p className="text-sm font-bold uppercase font-headline text-on-surface">Marcus K.</p>
                <p className="text-xs text-on-surface-variant">Verified Athlete</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between md:col-span-1">
            <p className="text-lg font-medium italic text-on-surface">"Best chamois in the game. Period."</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline font-bold text-xs uppercase text-on-surface">SR</div>
              <div>
                <p className="text-sm font-bold uppercase font-headline text-on-surface">Sarah R.</p>
                <p className="text-xs text-on-surface-variant">Cat 1 Racer</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-high p-8 rounded-xl flex flex-col justify-between md:row-span-2">
            <div className="space-y-4">
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-primary" />)}
              </div>
              <p className="text-xl font-bold uppercase font-headline text-on-surface">IMPECCABLE FIT</p>
              <p className="text-on-surface-variant">I was worried about the leg grippers, but they use a printed silicone that doesn't pinch or ride up. The aesthetic is so clean—all black with just the subtle logo. Worth every penny for the comfort alone.</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center font-headline font-bold text-xs uppercase text-on-surface">JL</div>
              <div>
                <p className="text-sm font-bold uppercase font-headline text-on-surface">James L.</p>
                <p className="text-xs text-on-surface-variant">Verified Athlete</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between md:col-span-2">
            <div className="flex gap-4">
              <img 
                alt="Review Photo" 
                className="w-24 h-24 object-cover rounded-lg grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR-qfUx7lFdJZpm3JK2bdNXz-9UoqZ3a-32p81yh6Gu4DRhEMP3Buip0CkyquGztuzzVPJS2JjwocbUYRkRdl-EY5aQpwzHKyvBJRQ1Tk2cJ_dDMyIirGhJgc22GZende77tgIBMQo-rTzX-IZkxJEF7P0mv4iXXTp_rhuNRWRJO2HM_mKA22KXGQpSOf2nSEzusx00fnbJsMQs8STKtdFW9JSH1KUWGpOBFAK1zbHufVC5ImR3HuCvpWJ2dqc95TXExwi5B5Ey9SA" 
                referrerPolicy="no-referrer"
              />
              <p className="text-lg font-medium italic self-center text-on-surface">"The strap design is genius. They don't pull on your shoulders even when you're tucked in the drops for hours."</p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-headline font-bold text-xs uppercase text-on-surface">DT</div>
              <div>
                <p className="text-sm font-bold uppercase font-headline text-on-surface">David T.</p>
                <p className="text-xs text-on-surface-variant">Verified Athlete</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="mt-48 max-w-screen-2xl mx-auto px-8">
        <h2 className="text-3xl font-black font-headline uppercase tracking-tighter mb-12 text-on-surface">Complete the System</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "PRO LIGHT JERSEY", price: "$185", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa0HHMKjoIuiXC7AcXU7D2tUCHfli6BgUAVnskuzkNZlgZLjRSU1HMz5zOteFvZAO1PW-MKjn61egG9iP5DFD3z1SbFuUKKkb4ZA6OpfaO3SGENFFMdnM7YBolnX23Ai7rVWE8dCUdSnHBpMKMkbT8MOEXpY2B05zbo-bykR6EOFpU3A-NGFcWMrZPl1SAw82xlEHBzWcGbV6ax7iGC80sbp_muJ4_xmwLbNoyjA3tnW8Z4OIICiu7R1bPnuj8Lh1KxtHZOD7dt0YN", tag: "New Arrival" },
            { name: "AERO GRIP SOCKS", price: "$35", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeKeCr-BVMb1ASvAkkYkTtdiw3WfvXJmLMEBJt2tcTt_mB6Jo2FVJiP1FrVYioxp8lIS4rSez7PZ6iAQoQZqdXO7XEXOHYyhrQrjadrH1ins59VMOBRtZDjjeU14s5LIbeRJhAkwtAX68l8cIRkakl2BUaqXiPZdm89klrrHpYfWRXKcTybnD2l8FfoPkk2-RI_EhG6Vg4i36CJcHF9pSXKW0-0voHWnOv-FVUCHkphX0eghz9NuLruNxrfhsEiT0pV6zfJY6P2omi" },
            { name: "DRY-SKIN BASE LAYER", price: "$75", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvdMCt5HZaeOjaZRcPVixfYt922scBK0RGktkAciOpHwTWhiNHY1mRrIbnX3EBG-ll3tRr9klhAUi0pOxyjPVMttiQs7igpavrFA3nfrutac2IH5IXXzWltakFvibYksEjTQ-gcVfvyVaA490cIN8NT4waqc6H1BX9n3qrSXRdSEcn40kU6mXqyTALXj3Kg1joqm3QZFZgjXd9JASNUynlHmxW4VeBeykdIm9qe2yaKmdiSqa_0DvgGuEHu0GYBc7vTdms4su0U3QU" },
            { name: "OMNI-GRIP GLOVES", price: "$65", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAO2MtnfIKOpeI71f1t59DF08RUNuBYEiOwA1EEz6heIzy2uizMsXlUnP_0bSdoks6EIw5LjJjqZKbAFqQfX7c3p2iwGn5vmdYztqud5BeyQiV_jAgT7yNRPNgeASxqokt3ztpkaLg_UxGs_SfJcO1a5mlJPb8t_ZvKpP1AY2F9SkKazbnCoGI3_hjTYQkaLhh9SPmRAoDbLczoawW28ZpMnn0I9J8bzV50QpJESt3ByBmcemg8zstC3DXRYtFolF1ZpJTEtVdx_0p" }
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                  src={item.img} 
                  referrerPolicy="no-referrer"
                />
                {item.tag && (
                  <div className="absolute bottom-4 left-4 bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.tag}
                  </div>
                )}
              </div>
              <h4 className="font-headline font-bold uppercase text-sm tracking-widest text-on-surface">{item.name}</h4>
              <p className="text-on-surface-variant text-sm mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const MensSection = ({ onProductClick }: { onProductClick: (product: any) => void }) => {
  const products = [
    {
      id: 1,
      name: "Vortex Aero Jersey",
      price: "$185.00",
      desc: "Carbon-infused performance weave.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKwhsKzn51FlfSkS9o4LisIpuHLahnEyzMQh9QFNI0EqdbD7FoKBOjBCwIb6ndirkoUuIRBnNvRpOKeGPMKTjM_fdPnxrjZf3zPb5kUGSMpkmirxmGIzGJJnLe1bCZIGCFKIFhfCeqZaI2O3RYhMtN0jmou4ItzvORZf-CFCx3oLKuz68VivpGms8_AiOaMx01PbhS0MxWLIdVHFuGMd6DSdn7n6-opB9IWfuzhoF1v_NkVoUNgvxDpZW4wpHPnI6wJnh3Q1bCGRDw",
      tag: "New Release",
      features: [
        { icon: <Wind className="w-3.5 h-3.5" />, label: "Aerodynamic" },
        { icon: <Droplets className="w-3.5 h-3.5" />, label: "Quick-Dry" }
      ]
    },
    {
      id: 2,
      name: "Endurance Bib-Shorts",
      price: "$220.00",
      desc: "Multi-density chamois for 6h+ rides.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB0ajiRMwfy1e9MxlB2Xe-Sw8RQYhXtOGVvvDL4VfLxoCZOawntM-PGso2Bw8PEivr9OL0bpsXg1tqSiFCQtg1jCVcxcrIeLsqepDOB5XX2bLMnuX1G9K6FUVtdS2ClofwE_pvgzNkKfjTvunbnYHr3giuw61HyWt7Pg_OrqP1Ne9NqbFYg--Fjt_0lau7ix0Aa11WO9bu0ji0xHHVujAonywnNz5JdnwXFECxbqHj0blqsOWmtDq3nO9-uYr5j_-YbnBxgTKe9GX_",
      features: [
        { icon: <Maximize2 className="w-3.5 h-3.5" />, label: "Compression" }
      ]
    },
    {
      id: 3,
      name: "KTX C1 Shoes",
      price: "$395.00",
      desc: "Ultra-stiff carbon sole for max power.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQz45MMgnvSlOZW6tsUiC2FNlYNUjMYmQXUC7ZoJszr0c974yfAr8YfM1EJXdIMfyoMZwiPOTmzg7ew1cQTbFGU5gKznz3YTZwfZvpvR5QXteMl87BfZYUOldNAzQytQtKOJRMV86XzhomDvJA6xXeowF49KgWVqDS1joOkyYsfSTDnvZZT7gqxy_pKlKtF41VzcrByWiNtQSnqysUYNWmfaXkOJQM6BoxzS2tdabCT5zP82jg4bD7EGMfIjxWq1v3-jpjQ4D-8FpU",
      features: [
        { icon: <Zap className="w-3.5 h-3.5" />, label: "Carbon-X" }
      ]
    },
    {
      id: 4,
      name: "Pro Lite Gilet",
      price: "$120.00",
      desc: "Packable wind protection for descents.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZyNcUA4goTgQHQidvxTDgqRjCiX0oesvQEgxpcy0AgRm2Sn3s_gYaAOJO5velp_-sftyTdfGQ0XJ-_eupr8E3t95GUySNTrCgWbMMgDtSvSsijkvH-4bsRWNp1oXLKFdB-ft8cyFV-tRlcvGYVKqnAWSgC9i7GDAmYVOEpCrMe2iC5AztnKoRJP33XuKBONbolVhgJbONTPw4-7qqfigUvKTL5z8_CVHqPGx8FAYg46dx7-cBtDvwcdj_9300KMsPv2_JutDHi-Gt"
    },
    {
      id: 5,
      name: "Apex Helmet",
      price: "$280.00",
      desc: "Wind-tunnel tested integrated MIPS.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOb-xDyHOL05BO_H8GpnknzHk2p_HLaRvT7CZMhtr3duPUc4E54Di6hBHpE-3S51i1Z6mkEEPMWem3ojAeQcQSUZb1LgfoLIkRHKqdA6-v5y-WxNq9jKylGyg4cdnTaew_RplbsueMb4F7VAUCSwoqiFOjUV0y1jRBtwfIukExG-zI6Rltutb4BEkABM6uds-KJxpToyX_qweqPqSn96sDQZ0g5ydLFeSVDbS73IsBzkXjHF-MPbO_waoOC09moGOqugkNN7csFF2s"
    },
    {
      id: 6,
      name: "Mesh Base Layer",
      price: "$65.00",
      desc: "Moisture-wicking open cell structure.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw69Z-lU-Nr-QL8ttvkzV4F9_HQ-qrN2i5JF0pNOdwPkltjVAovy_ypgMcF4AO7DPtb0RpA8ShJKulHwHWdHEC6MwbrfOPZ_Etlc5t6ZfDFjwwOlKLzcKBvDEnPLaVkl9aS3WErsCcqIFKa4_4azBcx5QvzKj4XU1l-Gkcbnk574fcQrJak7H0LAgEwNFKC6YuA9dxe2dG-RsqnZIrUen1GZ6U1arCp2VM6Ew7ZglCkwzrTwuDhPXxbLeAh4aCcZ-iVgzMJaR5k8gR"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-8 max-w-[1440px] mx-auto">
      <header className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-headline font-black text-6xl md:text-8xl tracking-tighter uppercase leading-none mb-4 text-on-surface"
        >
          Men's <span className="text-primary">Performance</span>
        </motion.h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl tracking-wide">
          Engineered for aerodynamic efficiency and long-distance comfort. The KTX Gallery showcases our latest breakthroughs in textile engineering.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
          <div>
            <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface mb-6 flex items-center gap-2">
              <Filter className="w-4 h-4" /> Size
            </h3>
            <div className="grid grid-cols-4 gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button 
                  key={size}
                  className={`aspect-square border border-outline-variant/20 flex items-center justify-center text-xs font-bold transition-colors ${size === 'S' ? 'bg-primary text-on-primary border-primary' : 'hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface mb-6">Colors</h3>
            <div className="flex flex-wrap gap-4">
              <button className="w-8 h-8 rounded-full bg-[#131313] border border-outline ring-2 ring-offset-2 ring-offset-surface ring-primary"></button>
              <button className="w-8 h-8 rounded-full bg-[#353534]"></button>
              <button className="w-8 h-8 rounded-full bg-[#E5E2E1]"></button>
              <button className="w-8 h-8 rounded-full bg-[#D63F00]"></button>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface mb-6">Price Range</h3>
            <div className="space-y-4">
              <div className="h-1 bg-surface-container-highest relative rounded-full">
                <div className="absolute left-0 right-1/4 h-full bg-primary"></div>
                <div className="absolute right-1/4 -top-1.5 w-4 h-4 rounded-full bg-primary"></div>
              </div>
              <div className="flex justify-between font-label text-xs text-on-surface-variant uppercase tracking-tighter">
                <span>$0</span>
                <span>$450</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface mb-6">Collections</h3>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li className="flex items-center justify-between group cursor-pointer">
                <span className="group-hover:text-primary transition-colors">Aero Pro</span>
                <span className="text-xs text-outline opacity-50">12</span>
              </li>
              <li className="flex items-center justify-between group cursor-pointer">
                <span className="group-hover:text-primary transition-colors">Endurance Lab</span>
                <span className="text-xs text-outline opacity-50">08</span>
              </li>
              <li className="flex items-center justify-between group cursor-pointer text-primary">
                <span>Off-Road Tech</span>
                <span className="text-xs">05</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-8">
            {products.map((product) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={product.id} 
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-surface-container-low rounded-xl mb-6 aspect-[4/5]" onClick={() => onProductClick(product)}>
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={product.img} 
                    alt={product.name}
                    referrerPolicy="no-referrer"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-on-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <button className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md text-on-surface p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-2xl">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-bold text-xl uppercase tracking-tight text-on-surface">{product.name}</h3>
                    <span className="font-body font-semibold text-primary">{product.price}</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant">{product.desc}</p>
                  {product.features && (
                    <div className="pt-4 flex gap-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <span className="text-primary">{feature.icon}</span>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">{feature.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ onBackToShop, initialItems }: { onBackToShop: () => void, initialItems: any[] }) => {
  const [items, setItems] = useState(initialItems.length > 0 ? initialItems : [
    {
      id: 1,
      name: "Vortex Aero Jersey",
      price: 185.00,
      size: "M",
      color: "Stealth Black",
      qty: 1,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKwhsKzn51FlfSkS9o4LisIpuHLahnEyzMQh9QFNI0EqdbD7FoKBOjBCwIb6ndirkoUuIRBnNvRpOKeGPMKTjM_fdPnxrjZf3zPb5kUGSMpkmirxmGIzGJJnLe1bCZIGCFKIFhfCeqZaI2O3RYhMtN0jmou4ItzvORZf-CFCx3oLKuz68VivpGms8_AiOaMx01PbhS0MxWLIdVHFuGMd6DSdn7n6-opB9IWfuzhoF1v_NkVoUNgvxDpZW4wpHPnI6wJnh3Q1bCGRDw"
    }
  ]);

  useEffect(() => {
    if (initialItems.length > 0) {
      setItems(initialItems);
    }
  }, [initialItems]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 15.00;
  const total = subtotal + shipping;

  const updateQty = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="pt-32 pb-24 px-8 max-w-[1440px] mx-auto min-h-[80vh]">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-grow space-y-12">
          <header className="flex items-center justify-between border-b border-outline-variant/20 pb-8">
            <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase text-on-surface">Your <span className="text-primary">Bag</span></h1>
            <span className="font-body font-bold text-on-surface-variant uppercase tracking-widest text-sm">{items.length} Items</span>
          </header>

          <div className="space-y-8">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-8 py-8 border-b border-outline-variant/10 group">
                  <div className="w-full sm:w-48 aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-headline font-bold text-2xl uppercase tracking-tight text-on-surface mb-2">{item.name}</h3>
                        <div className="flex gap-6 text-sm font-body text-on-surface-variant uppercase tracking-widest font-bold">
                          <span>Size: {item.size}</span>
                          <span>Color: {item.color}</span>
                        </div>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-on-surface-variant hover:text-primary transition-colors">
                        <Trash2 className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-end mt-8 sm:mt-0">
                      <div className="flex items-center gap-4 bg-surface-container-high rounded-full px-4 py-2 border border-outline-variant/10">
                        <button onClick={() => updateQty(item.id, -1)} className="text-on-surface hover:text-primary transition-colors">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-body font-bold text-lg w-8 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="text-on-surface hover:text-primary transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-body font-black text-2xl text-primary">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-24 text-center space-y-6">
                <ShoppingBag className="w-16 h-16 mx-auto text-outline-variant opacity-20" />
                <p className="text-on-surface-variant text-xl font-medium">Your bag is currently empty.</p>
              </div>
            )}
          </div>

          <button 
            onClick={onBackToShop}
            className="inline-flex items-center gap-4 text-on-surface-variant hover:text-primary font-bold uppercase tracking-[0.2em] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
            Back to Shop
          </button>
        </div>

        {items.length > 0 && (
          <aside className="w-full lg:w-[400px] flex-shrink-0">
            <div className="spec-glass p-10 space-y-10 sticky top-32">
              <h2 className="font-headline font-black text-3xl uppercase tracking-tighter text-on-surface">Order Summary</h2>
              
              <div className="space-y-6 font-body">
                <div className="flex justify-between text-on-surface-variant font-bold uppercase tracking-widest text-xs">
                  <span>Subtotal</span>
                  <span className="text-on-surface">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-bold uppercase tracking-widest text-xs">
                  <span>Shipping</span>
                  <span className="text-on-surface">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-bold uppercase tracking-widest text-xs">
                  <span>Tax</span>
                  <span className="text-on-surface">Calculated at checkout</span>
                </div>
                <div className="pt-6 border-t border-outline-variant/20 flex justify-between items-end">
                  <span className="font-headline font-black text-xl uppercase tracking-tight text-on-surface">Total</span>
                  <span className="font-headline font-black text-4xl text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-primary text-on-primary font-black uppercase tracking-[0.2em] py-6 rounded-full hover:bg-on-primary-container transition-all shadow-2xl scale-95 active:scale-90">
                  Checkout Now
                </button>
                <p className="text-[10px] text-center text-on-surface-variant font-bold uppercase tracking-widest opacity-60">
                  Secure SSL Encryption · Free Returns within 30 days
                </p>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'cart' | 'mens' | 'productDetail'>('home');
  const [cartItems, setCartItems] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === product.size && item.color === product.color);
      if (existing) {
        return prev.map(item => item.id === product.id && item.size === product.size && item.color === product.color ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setView('cart');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen">
      <Navbar 
        onCartClick={() => setView('cart')} 
        onLogoClick={() => setView('home')} 
        onMensClick={() => setView('mens')}
        currentView={view}
      />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <NewSeasonDrops onProductClick={() => setView('productDetail')} />
            <PerformanceCollection onProductClick={() => setView('productDetail')} />
            <Philosophy />
            <Newsletter />
          </>
        ) : view === 'mens' ? (
          <MensSection onProductClick={() => setView('productDetail')} />
        ) : view === 'productDetail' ? (
          <ProductDetail onAddToCart={addToCart} />
        ) : (
          <Cart onBackToShop={() => setView('home')} initialItems={cartItems} />
        )}
      </main>
      <Footer onLogoClick={() => setView('home')} />
    </div>
  );
}
