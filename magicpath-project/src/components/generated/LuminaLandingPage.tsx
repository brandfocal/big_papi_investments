import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Film, Target, Users, Layers, Mail, Globe, MapPin, ArrowRight, Instagram, Twitter, Youtube, ArrowUpRight, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

interface NavLink {
  label: string;
  href: string;
}
interface ValueCard {
  icon: React.ElementType;
  title: string;
  body: string;
}
interface ClientItem {
  id: string;
  name: string;
}
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}
interface EventItem {
  id: string;
  name: string;
}
interface ServicePill {
  id: string;
  label: string;
}
interface PreviousWorkItem {
  id: string;
  category: string;
  title: string;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const NAV_LINKS: NavLink[] = [{
  label: 'Our Story',
  href: '#about'
}, {
  label: 'Leadership',
  href: '#leadership'
}, {
  label: 'Our Craft',
  href: '#divisions'
}, {
  label: 'Why Us',
  href: '#value'
}, {
  label: 'Our Work',
  href: '#experience'
}, {
  label: 'Our Family',
  href: '#clients'
}, {
  label: "Let's Talk",
  href: '#contact'
}];
const VALUE_CARDS: ValueCard[] = [{
  icon: Film,
  title: 'Creative Excellence',
  body: 'World-class storytelling and production quality.'
}, {
  icon: Target,
  title: 'Strategic Impact',
  body: 'Campaigns and events designed with measurable outcomes.'
}, {
  icon: Users,
  title: 'Representation & Transformation',
  body: 'Youth-led leadership driving inclusive growth.'
}, {
  icon: Layers,
  title: 'Integrated Solutions',
  body: 'Seamless delivery across production, events, PR, and communications.'
}];
const CLIENTS_ROW1: ClientItem[] = [{
  id: 'c1',
  name: 'Yomo'
}, {
  id: 'c2',
  name: 'National Youth Service'
}, {
  id: 'c3',
  name: 'SABC Education'
}, {
  id: 'c4',
  name: 'Y20 South Africa 2025'
}, {
  id: 'c5',
  name: 'TechNov8'
}];
const CLIENTS_ROW2: ClientItem[] = [{
  id: 'c6',
  name: 'NYDA'
}, {
  id: 'c7',
  name: 'TOSACA Media Group'
}, {
  id: 'c8',
  name: 'City of Ekurhuleni'
}, {
  id: 'c9',
  name: 'BRICS Business Council'
}, {
  id: 'c10',
  name: 'Moja Love'
}];
const CLIENTS_ROW3: ClientItem[] = [{
  id: 'c11',
  name: 'Youth Life'
}, {
  id: 'c12',
  name: 'Airports Company South Africa'
}, {
  id: 'c13',
  name: 'Tradeway'
}, {
  id: 'c14',
  name: 'Letaba River College'
}, {
  id: 'c15',
  name: 'WRSETA'
}];
const CLIENTS_ROW4: ClientItem[] = [{
  id: 'c16',
  name: 'Momentum'
}, {
  id: 'c17',
  name: 'Lutzanetix'
}, {
  id: 'c18',
  name: 'The Drive Network'
}, {
  id: 'c19',
  name: 'Vilama'
}, {
  id: 'c20',
  name: 'SJM Publicity & Music'
}];
const GALLERY_IMAGES: GalleryImage[] = [{
  id: 'g1',
  src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
  alt: 'Large conference aerial'
}, {
  id: 'g2',
  src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=600',
  alt: 'Gala banquet event'
}, {
  id: 'g3',
  src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=600',
  alt: 'Concert crowd'
}, {
  id: 'g4',
  src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600',
  alt: 'Speaker on stage'
}, {
  id: 'g5',
  src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=600',
  alt: 'Live performance'
}, {
  id: 'g6',
  src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=600',
  alt: 'Podium speech'
}, {
  id: 'g7',
  src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600',
  alt: 'Youth gathering'
}, {
  id: 'g8',
  src: 'https://images.unsplash.com/photo-1598387993441-a364f854cfba?auto=format&fit=crop&q=80&w=600',
  alt: 'Film production set'
}, {
  id: 'g9',
  src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600',
  alt: 'Hands raised crowd'
}];
const EVENT_ITEMS: EventItem[] = [{
  id: 'e1',
  name: 'Yomo Launch'
}, {
  id: 'e2',
  name: 'Green Youth Indaba'
}, {
  id: 'e3',
  name: 'SA-China TVET Cooperation Symposium 2025'
}, {
  id: 'e4',
  name: 'Y20 Summit — City of Ekurhuleni'
}, {
  id: 'e5',
  name: 'Sinach Night of Worship'
}, {
  id: 'e6',
  name: 'Women in Business Seminar 2025'
}, {
  id: 'e7',
  name: 'Airport Experiential Activations — ACSA'
}];
const PRODUCTIONS_PILLS: ServicePill[] = [{
  id: 'pp1',
  label: 'TV AND FILM PRODUCTION'
}, {
  id: 'pp2',
  label: 'MUSIC VIDEO PRODUCTION'
}, {
  id: 'pp3',
  label: 'CORPORATE VIDEO PRODUCTION'
}, {
  id: 'pp4',
  label: 'SOCIAL AND CULTURAL EVENT COVERAGE'
}, {
  id: 'pp5',
  label: 'POST PRODUCTION — ONLINE & OFFLINE EDITING'
}, {
  id: 'pp6',
  label: 'GRAPHIC DESIGN AND ANIMATION'
}];
const EVENTS_PILLS: ServicePill[] = [{
  id: 'ep1',
  label: 'EVENT CONCEPTUALISATION AND MANAGEMENT'
}, {
  id: 'ep2',
  label: 'STRATEGIC MARKETING COMMUNICATIONS AND PR'
}, {
  id: 'ep3',
  label: 'STAKEHOLDER ENGAGEMENT'
}, {
  id: 'ep4',
  label: 'BRAND CAMPAIGNS AND LAUNCHES'
}, {
  id: 'ep5',
  label: 'TALENT MANAGEMENT'
}];
const PREV_WORK_LEFT: PreviousWorkItem[] = [{
  id: 'w1',
  category: 'TELEVISION',
  title: 'Science and Technology Show — SABC Education'
}, {
  id: 'w2',
  category: 'TELEVISION',
  title: 'Battle of Abaphantsi — Moja Love, DSTV Ch. 157'
}, {
  id: 'w3',
  category: 'CORPORATE VIDEOS',
  title: 'Tradeway Brand Promotions'
}, {
  id: 'w4',
  category: 'CORPORATE VIDEOS',
  title: 'EmpowaYouth Week Coverage — Orange Farm'
}];
const PREV_WORK_RIGHT: PreviousWorkItem[] = [{
  id: 'w5',
  category: 'SOCIAL & CULTURAL EVENTS',
  title: 'City of Ekurhuleni Umgidi Documentary — Cape Town'
}, {
  id: 'w6',
  category: 'SOCIAL & CULTURAL EVENTS',
  title: 'Annual Back to the 90s Social Event'
}, {
  id: 'w7',
  category: 'MUSIC VIDEO PRODUCTION',
  title: 'Music video for rising Amapiano artist Soulful G'
}];
const ALL_PREV_WORK: PreviousWorkItem[] = [...PREV_WORK_LEFT, ...PREV_WORK_RIGHT];
const CLIENTS_STRIP_IMAGES = [{
  id: 'cs1',
  src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400',
  alt: 'Conference'
}, {
  id: 'cs2',
  src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=400',
  alt: 'Concert crowd'
}, {
  id: 'cs3',
  src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400',
  alt: 'Speaker stage'
}, {
  id: 'cs4',
  src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400',
  alt: 'Media broadcast'
}, {
  id: 'cs5',
  src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=400',
  alt: 'Podium'
}];
const VALUE_BAND_IMAGES = [{
  id: 'vb1',
  src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800',
  alt: 'Youth graduation event'
}, {
  id: 'vb2',
  src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=900',
  alt: 'Large crowd energy'
}, {
  id: 'vb3',
  src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
  alt: 'Media broadcast'
}];
const TRUST_STATS = [{
  id: 'ts1',
  number: '100%',
  label: 'Black-Owned'
}, {
  id: 'ts2',
  number: 'Est. 2016',
  label: 'Johannesburg, SA'
}, {
  id: 'ts3',
  number: '2',
  label: 'Divisions'
}];
const SECTION_NUMBERS: Record<string, string> = {
  about: '01',
  leadership: '02',
  divisions: '03',
  value: '04',
  experience: '05',
  clients: '06',
  contact: '07'
};
const STAT_ITEMS = [{
  number: '2016',
  label: 'Year Established'
}, {
  number: '100%',
  label: 'Black-Owned Enterprise'
}, {
  number: '2',
  label: 'Operating Divisions'
}];

/* ─────────────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 28
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
  }
});
const fadeIn = (delay = 0) => ({
  initial: {
    opacity: 0
  },
  whileInView: {
    opacity: 1
  },
  viewport: {
    once: true
  },
  transition: {
    duration: 1,
    delay
  }
});

/* ─────────────────────────────────────────────
   SMOOTH SCROLL HELPER
───────────────────────────────────────────── */

function scrollToSection(href: string, onComplete?: () => void) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
  onComplete?.();
}

/* ─────────────────────────────────────────────
   SHARED: SECTION DIVIDER LINE
───────────────────────────────────────────── */

const SectionDividerLine = () => <div>
    <div style={{
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(160,160,160,0.4), transparent)'
  }} aria-hidden="true" />
    <div style={{
    height: '4px',
    background: 'linear-gradient(to right, transparent, rgba(160,160,160,0.1), transparent)',
    filter: 'blur(3px)',
    marginTop: '-2px'
  }} aria-hidden="true" />
  </div>;

/* ─────────────────────────────────────────────
   SHARED: CHROME DIVIDER (gold diamond)
───────────────────────────────────────────── */

const ChromeDivider = () => <div className="flex items-center justify-center gap-3 mt-4 mb-12">
    <div style={{
    height: '1px',
    width: '80px',
    background: 'linear-gradient(to right, transparent, #C9A044)'
  }} aria-hidden="true" />
    <div style={{
    width: '8px',
    height: '8px',
    transform: 'rotate(45deg)',
    background: '#C9A044',
    border: '1px solid rgba(255,255,255,0.4)',
    boxShadow: '0 2px 6px rgba(201,160,68,0.4)'
  }} aria-hidden="true" />
    <div style={{
    height: '1px',
    width: '80px',
    background: 'linear-gradient(to left, transparent, #C9A044)'
  }} aria-hidden="true" />
  </div>;

/* ─────────────────────────────────────────────
   SHARED: SECTION LABEL (gold lines)
───────────────────────────────────────────── */

const SectionLabel = ({
  children
}: {
  children: React.ReactNode;
}) => <div className="flex items-center gap-3 justify-center">
    <div style={{
    height: '1px',
    width: '20px',
    background: 'rgba(201,160,68,0.6)'
  }} aria-hidden="true" />
    <span className="text-[9px] uppercase tracking-[0.5em] font-bold" style={{
    color: 'rgba(160,160,160,0.5)',
    fontFamily: 'Inter, sans-serif'
  }}>
      {children}
    </span>
    <div style={{
    height: '1px',
    width: '20px',
    background: 'rgba(201,160,68,0.6)'
  }} aria-hidden="true" />
  </div>;
const SectionLabelLeft = ({
  children
}: {
  children: React.ReactNode;
}) => <div className="flex items-center gap-3">
    <div style={{
    height: '1px',
    width: '20px',
    background: 'rgba(201,160,68,0.6)'
  }} aria-hidden="true" />
    <span className="text-[9px] uppercase tracking-[0.5em] font-bold" style={{
    color: 'rgba(160,160,160,0.5)',
    fontFamily: 'Inter, sans-serif'
  }}>
      {children}
    </span>
    <div style={{
    height: '1px',
    width: '20px',
    background: 'rgba(201,160,68,0.6)'
  }} aria-hidden="true" />
  </div>;

/* ─────────────────────────────────────────────
   SHARED: SECTION TITLE
───────────────────────────────────────────── */

const SectionTitle = ({
  children,
  center = false
}: {
  children: React.ReactNode;
  center?: boolean;
}) => <div className={cn('relative', center ? 'text-center' : 'text-left')} style={{
  lineHeight: 1
}}>
    <div aria-hidden="true" className="text-5xl md:text-7xl font-bold uppercase tracking-tight select-none pointer-events-none" style={{
    fontFamily: 'Oswald, sans-serif',
    WebkitTextStroke: '1px rgba(255,255,255,0.1)',
    color: 'transparent',
    position: 'absolute',
    inset: 0,
    userSelect: 'none'
  }}>
      {children}
    </div>
    <div className="text-5xl md:text-7xl font-bold uppercase tracking-tight relative" style={{
    fontFamily: 'Oswald, sans-serif',
    color: '#ffffff'
  }}>
      {children}
    </div>
  </div>;

/* ─────────────────────────────────────────────
   SHARED: LOGO MARK
───────────────────────────────────────────── */

const LogoMark = ({
  size = 'md'
}: {
  size?: 'sm' | 'md' | 'lg';
}) => {
  const cfg = {
    sm: {
      monogramH: 48,
      wordmarkSize: '16px',
      subPad: '2px 12px',
      subSize: '9px'
    },
    md: {
      monogramH: 72,
      wordmarkSize: '22px',
      subPad: '3px 16px',
      subSize: '10px'
    },
    lg: {
      monogramH: 120,
      wordmarkSize: '38px',
      subPad: '5px 20px',
      subSize: '11px'
    }
  }[size];
  const uid = `chrome-${size}`;
  return <div className="flex flex-col items-center gap-2">
      <div className="flex items-end gap-2">
        <svg height={cfg.monogramH} viewBox="0 0 120 120" style={{
        overflow: 'visible',
        display: 'block',
        width: 'auto'
      }} aria-hidden="true">
          <defs>
            <linearGradient id={uid} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#C9A044" />
              <stop offset="100%" stopColor="#8a6a1e" />
            </linearGradient>
          </defs>
          <text x="0" y="108" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="120" fill={`url(#${uid})`} letterSpacing="-4">
            3B
          </text>
        </svg>
        <span className="font-bold uppercase leading-none tracking-[0.15em] text-white pb-1" style={{
        fontFamily: 'Oswald, sans-serif',
        fontSize: cfg.wordmarkSize
      }}>
          BIG PAPI
        </span>
      </div>
      <span className="font-medium uppercase tracking-widest" style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: cfg.subSize,
      padding: cfg.subPad,
      border: '1px solid rgba(201,160,68,0.25)',
      background: 'rgba(201,160,68,0.05)',
      backdropFilter: 'blur(4px)',
      color: 'rgba(160,160,160,0.8)',
      letterSpacing: '0.25em'
    }}>
        INVESTMENTS (PTY) LTD
      </span>
    </div>;
};

/* ─────────────────────────────────────────────
   SVG MESH TEXTURE
───────────────────────────────────────────── */

const MeshTexture = ({
  opacity = 0.06
}: {
  opacity?: number;
}) => <div aria-hidden="true" style={{
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  opacity
}}>
    <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='0.4' stroke-opacity='1'%3E%3Cline x1='0' y1='0' x2='60' y2='60'/%3E%3Cline x1='60' y1='0' x2='0' y2='60'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: '60px 60px'
  }} />
    <div style={{
    position: 'absolute',
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='0.5' fill='%23ffffff' fill-opacity='0.5'/%3E%3C/svg%3E")`,
    backgroundSize: '4px 4px'
  }} />
  </div>;

/* ─────────────────────────────────────────────
   SECTION NUMBER WATERMARK
───────────────────────────────────────────── */

const SectionNumber = ({
  num,
  bright = false
}: {
  num: string;
  bright?: boolean;
}) => <div aria-hidden="true" className="select-none pointer-events-none leading-none" style={{
  position: 'absolute',
  top: 'clamp(16px, 3vw, 24px)',
  right: 'clamp(16px, 3vw, 48px)',
  fontFamily: 'Oswald, sans-serif',
  fontWeight: 700,
  fontSize: 'clamp(60px, 20vw, 120px)',
  color: bright ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.03)',
  lineHeight: 1,
  zIndex: 0
}}>
    {num}
  </div>;

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveSection(id);
      }, {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href, () => setOpen(false));
  };
  return <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-5 sm:px-8 md:px-10', scrolled ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.06] py-3 h-16 md:h-20' : 'bg-transparent py-4 md:py-5 h-16 md:h-20')}>
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={e => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }} className="flex items-end gap-2 shrink-0">
          <svg height="28" viewBox="0 0 120 120" style={{
          overflow: 'visible',
          width: 'auto'
        }} aria-hidden="true">
            <defs>
              <linearGradient id="nav-chrome" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#C9A044" />
                <stop offset="100%" stopColor="#8a6a1e" />
              </linearGradient>
            </defs>
            <text x="0" y="108" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="120" fill="url(#nav-chrome)" letterSpacing="-4">3B</text>
          </svg>
          <span className="text-sm font-bold uppercase text-white pb-0.5" style={{
          fontFamily: 'Oswald, sans-serif',
          letterSpacing: '0.2em'
        }}>
            BIG PAPI
          </span>
          <span className="hidden md:inline text-[9px] font-medium uppercase text-white/40 pb-0.5 ml-1" style={{
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.15em'
        }}>
            INVESTMENTS
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => {
          const isActive = activeSection === link.href.replace('#', '');
          return <a key={link.href} href={link.href} onClick={e => handleNavClick(e, link.href)} className="group flex flex-col items-center gap-0.5">
                <span className={cn('text-[10px] uppercase transition-colors duration-300', isActive ? 'text-white' : 'text-white/40 group-hover:text-white')} style={{
              letterSpacing: '0.35em',
              fontFamily: 'Inter, sans-serif'
            }}>
                  {link.label}
                </span>
                {isActive ? <span className="w-1 h-1 rounded-full mx-auto mt-1" style={{
              background: '#C9A044',
              display: 'block'
            }} aria-hidden="true" /> : <span className="block w-0 group-hover:w-full h-px bg-[#C9A044] transition-all duration-300" aria-hidden="true" />}
              </a>;
        })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="hidden md:flex items-center gap-1.5 border border-white/30 px-4 py-2 text-white text-[10px] font-bold uppercase hover:bg-[#C9A044] hover:text-black hover:border-[#C9A044] transition-all duration-300 min-h-[44px]" style={{
          letterSpacing: '0.3em',
          fontFamily: 'Inter, sans-serif'
        }}>
            <span>Get In Touch</span>
            <ArrowUpRight size={10} />
          </a>
          <button className="lg:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.25
      }} style={{
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        background: 'rgba(8,8,8,0.97)',
        backdropFilter: 'blur(24px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-5 pb-0">
              <LogoMark size="sm" />
              <button className="text-white min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {NAV_LINKS.map((link, idx) => <motion.a key={link.href} href={link.href} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.35,
            delay: idx * 0.07
          }} className="text-4xl font-bold uppercase text-white/80 hover:text-[#C9A044] transition-colors min-h-[44px] flex items-center" style={{
            fontFamily: 'Oswald, sans-serif'
          }} onClick={e => handleNavClick(e, link.href)}>
                  {link.label}
                </motion.a>)}
            </div>

            {/* Bottom bar */}
            <div className="px-8 pb-10 flex flex-col gap-4 border-t border-white/[0.06] pt-6">
              <a href="mailto:Dumi@bigdaddyevents.co.za" className="text-white/30 text-sm font-light">
                Dumi@bigdaddyevents.co.za
              </a>
              <div className="flex items-center gap-3">
                <button aria-label="Instagram" className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/30 hover:text-[#C9A044] hover:border-[#C9A044]/40 transition-all">
                  <Instagram size={14} />
                </button>
                <button aria-label="Twitter" className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/30 hover:text-[#C9A044] hover:border-[#C9A044]/40 transition-all">
                  <Twitter size={14} />
                </button>
                <button aria-label="YouTube" className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/30 hover:text-[#C9A044] hover:border-[#C9A044]/40 transition-all">
                  <Youtube size={14} />
                </button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
};

/* ─────────────────────────────────────────────
   SCROLL PROGRESS BAR
───────────────────────────────────────────── */

const ScrollProgressBar = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      setProgress(window.scrollY / total * 100);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'transparent',
    zIndex: 60,
    pointerEvents: 'none'
  }} aria-hidden="true">
      <div style={{
      height: '100%',
      background: '#C9A044',
      width: `${progress}%`,
      transition: 'width 0.1s linear'
    }} />
    </div>;
};

/* ─────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────── */

interface LightboxProps {
  images: GalleryImage[];
  activeImage: GalleryImage | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}
const Lightbox = ({
  images,
  activeImage,
  onClose,
  onPrev,
  onNext
}: LightboxProps) => {
  React.useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeImage]);
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);
  return <AnimatePresence>
      {activeImage && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} transition={{
      duration: 0.25
    }} style={{
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'rgba(0,0,0,0.9)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} onClick={onClose}>
          {/* Close button */}
          <button aria-label="Close lightbox" onClick={onClose} className="w-9 h-9 md:w-10 md:h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C9A044] hover:text-[#C9A044] transition-colors" style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        zIndex: 10
      }}>
            <X size={16} />
          </button>

          {/* Prev arrow */}
          <button aria-label="Previous image" onClick={e => {
        e.stopPropagation();
        onPrev();
      }} className="w-9 h-9 md:w-12 md:h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all" style={{
        position: 'absolute',
        left: '8px',
        zIndex: 10
      }}>
            <ChevronLeft size={20} />
          </button>

          {/* Next arrow */}
          <button aria-label="Next image" onClick={e => {
        e.stopPropagation();
        onNext();
      }} className="w-9 h-9 md:w-12 md:h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all" style={{
        position: 'absolute',
        right: '8px',
        zIndex: 10
      }}>
            <ChevronRight size={20} />
          </button>

          {/* Image container */}
          <div className="flex flex-col items-center gap-4 px-12 md:px-16" onClick={e => e.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt} className="w-[95vw] md:max-w-4xl max-h-[70vh] md:max-h-[80vh] object-contain border border-white/10" style={{
          display: 'block'
        }} />
            <p className="text-white/40 text-xs tracking-widest uppercase text-center">{activeImage.alt}</p>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-1.5" style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
            {images.map(img => <span key={img.id} style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: img.id === activeImage.id ? '#C9A044' : 'rgba(255,255,255,0.2)',
          display: 'block'
        }} aria-hidden="true" />)}
          </div>
        </motion.div>}
    </AnimatePresence>;
};

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */

interface FormState {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const [form, setForm] = React.useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const fieldClass = "w-full bg-[#111] border border-white/[0.08] focus:border-[#C9A044] focus:ring-1 focus:ring-[#C9A044]/30 outline-none px-4 py-3 text-white text-sm font-light placeholder-white/20 transition-colors duration-200 rounded-none";
  if (submitted) {
    return <motion.div initial={{
      opacity: 0,
      y: 12
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="flex flex-col items-center gap-4 py-12">
        <div className="flex items-center gap-3">
          <div style={{
          height: '1px',
          width: '60px',
          background: 'linear-gradient(to right, transparent, #C9A044)'
        }} aria-hidden="true" />
          <div style={{
          width: '8px',
          height: '8px',
          transform: 'rotate(45deg)',
          background: '#C9A044',
          boxShadow: '0 2px 6px rgba(201,160,68,0.4)'
        }} aria-hidden="true" />
          <div style={{
          height: '1px',
          width: '60px',
          background: 'linear-gradient(to left, transparent, #C9A044)'
        }} aria-hidden="true" />
        </div>
        <p className="text-sm tracking-widest uppercase text-center" style={{
        color: '#C9A044',
        fontFamily: 'Inter, sans-serif'
      }}>
          MESSAGE RECEIVED — WE'LL BE IN TOUCH SOON.
        </p>
      </motion.div>;
  }
  return <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm(prev => ({
      ...prev,
      name: e.target.value
    }))} required className={fieldClass} style={{
      fontFamily: 'Inter, sans-serif'
    }} />
      <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm(prev => ({
      ...prev,
      email: e.target.value
    }))} required className={fieldClass} style={{
      fontFamily: 'Inter, sans-serif'
    }} />
      <textarea rows={4} placeholder="Your message" value={form.message} onChange={e => setForm(prev => ({
      ...prev,
      message: e.target.value
    }))} required className={fieldClass} style={{
      fontFamily: 'Inter, sans-serif',
      resize: 'vertical'
    }} />
      <button type="submit" className="w-full bg-[#C9A044] text-black font-bold uppercase text-[11px] tracking-[0.3em] py-4 hover:bg-[#b8912e] transition-colors duration-200 rounded-none min-h-[44px]" style={{
      fontFamily: 'Inter, sans-serif'
    }}>
        START THE CONVERSATION
      </button>
    </form>;
};

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */

export const LuminaLandingPage = () => {
  const handleHeroScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection('#about');
  };
  const [activeTab, setActiveTab] = React.useState<'productions' | 'events' | 'talent'>('productions');
  const [activeImage, setActiveImage] = React.useState<GalleryImage | null>(null);
  const handleLightboxPrev = () => {
    if (!activeImage) return;
    const idx = GALLERY_IMAGES.findIndex(g => g.id === activeImage.id);
    setActiveImage(GALLERY_IMAGES[(idx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length]);
  };
  const handleLightboxNext = () => {
    if (!activeImage) return;
    const idx = GALLERY_IMAGES.findIndex(g => g.id === activeImage.id);
    setActiveImage(GALLERY_IMAGES[(idx + 1) % GALLERY_IMAGES.length]);
  };
  React.useEffect(() => {
    document.title = 'Big Papi Investments (Pty) Ltd — Media · Events · Communications';
  }, []);
  return <div className="relative min-h-screen bg-[#080808] text-white overflow-x-hidden text-[14px] sm:text-[15px] md:text-[16px]" style={{
    fontFamily: 'Inter, sans-serif'
  }}>
      <ScrollProgressBar />
      <Navbar />
      <Lightbox images={GALLERY_IMAGES} activeImage={activeImage} onClose={() => setActiveImage(null)} onPrev={handleLightboxPrev} onNext={handleLightboxNext} />

      {/* ── HERO ── */}
      <section id="hero" className="relative h-screen flex flex-col overflow-hidden" style={{
      background: '#080808'
    }}>
        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920" alt="" aria-hidden="true" className="object-cover object-center" style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }} />
        {/* Mobile: more opaque gradient since no right column */}
        <div aria-hidden="true" className="block lg:hidden" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.95) 60%, rgba(8,8,8,0.80) 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
        {/* Desktop: original gradient */}
        <div aria-hidden="true" className="hidden lg:block" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, #080808 0%, rgba(8,8,8,0.9) 45%, rgba(8,8,8,0.55) 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
        <div aria-hidden="true" style={{
        position: 'absolute',
        width: '70vw',
        height: '70vh',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'radial-gradient(ellipse, rgba(180,180,180,0.04) 0%, transparent 70%)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />
        <MeshTexture opacity={0.06} />

        <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 pt-16 md:pt-20 pb-4" style={{
        zIndex: 3
      }}>
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-6 items-center">

            {/* LEFT: editorial headline — full width mobile, lg:col-span-5 desktop */}
            <div className="lg:col-span-5 flex flex-col gap-0">
              <motion.div {...fadeUp(0)} className="mb-4">
                <SectionLabel>Company Profile 2026</SectionLabel>
              </motion.div>

              <motion.div {...fadeUp(0.1)} className="flex flex-col gap-0">
                <div className="font-bold uppercase leading-none tracking-tight text-white" style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(40px, 10vw, 100px)'
              }}>
                  BOLD STORIES.
                </div>
                <div className="font-bold uppercase leading-none tracking-tight" style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(40px, 10vw, 100px)',
                color: '#C9A044'
              }}>
                  BIGGER IMPACT.
                </div>
              </motion.div>

              <motion.p {...fadeUp(0.2)} className="text-white/65 text-sm md:text-base font-light leading-relaxed max-w-xs sm:max-w-sm mt-4 mb-0">
                A 100% black-owned, youth-led enterprise at the forefront of media, events, and communications in South Africa.
              </motion.p>

              <motion.div {...fadeUp(0.28)} className="flex flex-col sm:flex-row gap-3 mt-6">
                <a href="#divisions" onClick={e => {
                e.preventDefault();
                scrollToSection('#divisions');
              }} className="px-8 py-4 text-black text-[10px] font-bold uppercase tracking-widest transition-all duration-300 min-h-[44px] flex items-center justify-center sm:justify-start" style={{
                background: '#C9A044',
                fontFamily: 'Inter, sans-serif'
              }} onMouseEnter={e => e.currentTarget.style.background = '#b8912e'} onMouseLeave={e => e.currentTarget.style.background = '#C9A044'}>
                  Explore Our Divisions
                </a>
                <a href="#contact" onClick={e => {
                e.preventDefault();
                scrollToSection('#contact');
              }} className="px-8 py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white/[0.06] transition-all duration-300 min-h-[44px] flex items-center justify-center sm:justify-start" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                  Contact Us
                </a>
              </motion.div>

              {/* Trust bar */}
              <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 mt-6">
                {TRUST_STATS.map((stat, idx) => <div key={stat.id} className={cn('flex flex-col gap-0.5 sm:px-4 first:sm:pl-0', idx < TRUST_STATS.length - 1 ? 'sm:border-r sm:border-white/10' : '')}>
                    <span className="font-bold text-sm" style={{
                  color: '#C9A044',
                  fontFamily: 'Inter, sans-serif'
                }}>
                      {stat.number}
                    </span>
                    <span className="text-white/30 text-[10px] tracking-wider uppercase" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                      {stat.label}
                    </span>
                  </div>)}
              </motion.div>
            </div>

            {/* RIGHT: stat block — hidden on mobile/tablet, shown on lg */}
            <div className="hidden lg:flex lg:col-span-4 flex-col justify-center py-0">
              {STAT_ITEMS.map((stat, idx) => <motion.div key={stat.label} {...fadeUp(0.15 + idx * 0.1)} className="flex flex-col gap-1 py-5 border-b border-white/[0.08]">
                  <span className="font-bold" style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 1,
                color: '#C9A044'
              }}>
                    {stat.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                    {stat.label}
                  </span>
                </motion.div>)}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2,
        duration: 0.8
      }} className="flex flex-col items-center gap-2" style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3
      }}>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <a href="#about" onClick={handleHeroScroll} aria-label="Scroll to about section" className="min-w-[44px] min-h-[44px] flex items-center justify-center">
            <motion.div animate={{
            y: [0, 7, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.8
          }}>
              <ChevronDown size={16} style={{
              color: '#C9A044'
            }} />
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className="w-full overflow-hidden border-y border-white/[0.04]" style={{
      background: '#0a0a0a',
      position: 'relative',
      zIndex: 3
    }} aria-hidden="true">
        <div className="flex whitespace-nowrap" style={{
        animation: 'marquee 28s linear infinite'
      }}>
          {[0, 1].map(i => <span key={i} className="inline-block py-2.5 md:py-3 text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase text-white/25" style={{
          letterSpacing: '0.4em',
          paddingRight: '4rem',
          fontFamily: 'Inter, sans-serif'
        }}>
              <span style={{
            color: '#C9A044'
          }}>·</span>{' '}MEDIA PRODUCTION &nbsp;<span style={{
            color: '#C9A044'
          }}>·</span>&nbsp; EVENTS MANAGEMENT &nbsp;<span style={{
            color: '#C9A044'
          }}>·</span>&nbsp; COMMUNICATIONS &nbsp;<span style={{
            color: '#C9A044'
          }}>·</span>&nbsp; PR &nbsp;<span style={{
            color: '#C9A044'
          }}>·</span>&nbsp; TALENT MANAGEMENT &nbsp;<span style={{
            color: '#C9A044'
          }}>·</span>&nbsp; BRAND STRATEGY &nbsp;<span style={{
            color: '#C9A044'
          }}>·</span>&nbsp; TV &amp; FILM &nbsp;<span style={{
            color: '#C9A044'
          }}>·</span>&nbsp; SOUTH AFRICA &nbsp;
            </span>)}
        </div>
      </div>

      <SectionDividerLine />

      {/* ── ABOUT ── */}
      <section id="about" className="relative py-16 md:py-24 lg:py-32 overflow-hidden" style={{
      background: '#0d0d0d'
    }}>
        <SectionNumber num={SECTION_NUMBERS.about} />
        <MeshTexture opacity={0.04} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative" style={{
        zIndex: 1
      }}>

          <motion.div {...fadeUp(0)} className="mb-12">
            <SectionLabel>Our Story</SectionLabel>
          </motion.div>

          {/* Mobile/Tablet: simpler layout */}
          <div className="block lg:hidden">
            <div className="flex flex-col gap-8">
              {/* Body copy */}
              <motion.div {...fadeUp(0.1)} className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-white leading-snug" style={{
                fontFamily: 'Oswald, sans-serif'
              }}>
                  BIG PAPI INVESTMENTS (PTY) LTD
                </h2>
                <p className="text-white/65 text-sm md:text-base font-light leading-[1.85]">
                  Big Papi Investments (Pty) Ltd is a{' '}
                  <strong className="font-semibold" style={{
                  color: '#C9A044'
                }}>100% black-owned, youth-led enterprise</strong>{' '}
                  at the forefront of media, events, and communications in South Africa. Established in 2016 with a foundation in TV, film, and digital production, the company has grown into a dynamic hub that now also delivers strategic events, PR, and communications solutions.
                </p>
                <p className="text-white/65 text-sm md:text-base font-light leading-[1.85]">
                  Led by young black entrepreneurs, Big Papi Investments combines creativity, strategy, and innovation to empower brands, communities, and audiences. Our vision is to create platforms that inform, inspire, and connect, while driving transformation and measurable impact.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['MEDIA', 'EVENTS', 'COMMUNICATIONS'].map(tag => <span key={tag} className="border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/50" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                      {tag}
                    </span>)}
                </div>
                <span className="border border-white/10 bg-white/[0.03] px-5 py-1.5 text-[9px] tracking-[0.3em] uppercase text-white/40 inline-block" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                  Company Profile 2026
                </span>
              </motion.div>

              {/* Logo card — centered on mobile */}
              <motion.div {...fadeUp(0.2)} className="flex justify-center">
                <div className="relative border border-white/10 p-6 md:p-10 flex flex-col items-center justify-center gap-4 overflow-hidden w-full max-w-xs" style={{
                background: 'linear-gradient(135deg, #161616 0%, #111111 100%)'
              }}>
                  <div aria-hidden="true" style={{
                  position: 'absolute',
                  width: '141%',
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(201,160,68,0.12), transparent)',
                  transform: 'rotate(45deg)',
                  pointerEvents: 'none'
                }} />
                  <LogoMark size="md" />
                  <div style={{
                  height: '1px',
                  width: '80px',
                  background: 'linear-gradient(to right, transparent, rgba(201,160,68,0.4), transparent)',
                  marginTop: '8px'
                }} aria-hidden="true" />
                  <p className="text-white/25 text-[9px] uppercase tracking-widest text-center" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    Media · Events · Communications
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Desktop: full 6-column asymmetric grid */}
          <div className="hidden lg:grid grid-cols-6 gap-12 items-start">
            {/* Vertical label */}
            <div className="flex items-center justify-center col-span-1">
              <span className="text-[10px] uppercase font-bold text-white/20 select-none" style={{
              fontFamily: 'Oswald, sans-serif',
              letterSpacing: '0.5em',
              writingMode: 'vertical-lr',
              transform: 'rotate(180deg)'
            }}>
                About Big Papi Investments
              </span>
            </div>

            {/* Body copy */}
            <div className="col-span-2 flex flex-col gap-6">
              <motion.div {...fadeUp(0.1)}>
                <h2 className="text-2xl font-semibold text-white leading-snug mb-4" style={{
                fontFamily: 'Oswald, sans-serif'
              }}>
                  BIG PAPI INVESTMENTS (PTY) LTD
                </h2>
                <p className="text-white/65 text-base font-light leading-[1.85]">
                  Big Papi Investments (Pty) Ltd is a{' '}
                  <strong className="font-semibold" style={{
                  color: '#C9A044'
                }}>100% black-owned, youth-led enterprise</strong>{' '}
                  at the forefront of media, events, and communications in South Africa. Established in 2016 with a foundation in TV, film, and digital production, the company has grown into a dynamic hub that now also delivers strategic events, PR, and communications solutions.
                </p>
              </motion.div>
              <motion.div {...fadeUp(0.18)}>
                <p className="text-white/65 text-base font-light leading-[1.85]">
                  Led by young black entrepreneurs, Big Papi Investments combines creativity, strategy, and innovation to empower brands, communities, and audiences. Our vision is to create platforms that inform, inspire, and connect, while driving transformation and measurable impact.
                </p>
              </motion.div>
              <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-2 mt-2">
                {['MEDIA', 'EVENTS', 'COMMUNICATIONS'].map(tag => <span key={tag} className="border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase text-white/50" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                    {tag}
                  </span>)}
              </motion.div>
              <motion.div {...fadeUp(0.28)}>
                <span className="border border-white/10 bg-white/[0.03] px-5 py-1.5 text-[9px] tracking-[0.3em] uppercase text-white/40 inline-block mt-1" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                  Company Profile 2026
                </span>
              </motion.div>
            </div>

            {/* Logo card */}
            <motion.div {...fadeUp(0.2)} className="col-span-1">
              <div className="relative border border-white/10 p-10 flex flex-col items-center justify-center gap-4 overflow-hidden" style={{
              background: 'linear-gradient(135deg, #161616 0%, #111111 100%)'
            }}>
                <div aria-hidden="true" style={{
                position: 'absolute',
                width: '141%',
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(201,160,68,0.12), transparent)',
                transform: 'rotate(45deg)',
                pointerEvents: 'none'
              }} />
                <LogoMark size="md" />
                <div style={{
                height: '1px',
                width: '80px',
                background: 'linear-gradient(to right, transparent, rgba(201,160,68,0.4), transparent)',
                marginTop: '8px'
              }} aria-hidden="true" />
                <p className="text-white/25 text-[9px] uppercase tracking-widest text-center" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                  Media · Events · Communications
                </p>
              </div>
            </motion.div>

            {/* Image stack */}
            <motion.div {...fadeUp(0.15)} className="col-span-2 flex flex-col gap-3">
              <div className="overflow-hidden border border-white/[0.06]" style={{
              aspectRatio: '3/4'
            }}>
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600" alt="Event conference setup" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden border border-white/[0.06]" style={{
              aspectRatio: '16/9'
            }}>
                <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600" alt="Speaker on stage" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDividerLine />

      {/* ── LEADERSHIP ── */}
      <section id="leadership" className="relative py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden" style={{
      background: '#080808'
    }}>
        <SectionNumber num={SECTION_NUMBERS.leadership} />
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920" alt="" aria-hidden="true" className="object-cover object-center" style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.04,
        pointerEvents: 'none',
        zIndex: 0
      }} />
        <MeshTexture opacity={0.06} />
        <div className="max-w-7xl mx-auto relative" style={{
        zIndex: 10
      }}>

          <motion.div {...fadeUp(0)} className="mb-3">
            <SectionLabelLeft>The People</SectionLabelLeft>
          </motion.div>
          <motion.div {...fadeUp(0.06)}>
            <SectionTitle>LED BY VISION</SectionTitle>
          </motion.div>
          <div className="border-b border-white/10 mt-6 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 relative">
            {/* Center vertical divider — only on md+ */}
            <div aria-hidden="true" className="hidden md:block" style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)',
            zIndex: 0
          }} />

            {/* Card 1 */}
            <motion.div {...fadeUp(0.1)} className="group flex flex-col md:pr-10 border border-white/[0.05] hover:border-white/20 transition-all duration-500" style={{
            background: '#080808'
          }}>
              <div className="relative w-full overflow-hidden" style={{
              aspectRatio: '4/3',
              maxHeight: '280px',
              background: 'linear-gradient(to bottom, #131313, #080808)'
            }}>
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600" alt="" aria-hidden="true" className="object-cover object-center" style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0.2,
                zIndex: 1
              }} />
                <div aria-hidden="true" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -55%)',
                width: '160px',
                height: '160px',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.06)',
                zIndex: 2
              }} />
                <div className="flex items-center justify-center h-full relative" style={{
                zIndex: 3
              }}>
                  <Users size={36} className="text-white/20" />
                </div>
                <div aria-hidden="true" className="group-hover:opacity-10 opacity-0 transition-opacity duration-500" style={{
                position: 'absolute',
                inset: 0,
                zIndex: 4,
                background: 'linear-gradient(to bottom, rgba(201,160,68,0.15) 0%, transparent 60%)',
                pointerEvents: 'none'
              }} />
                <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                padding: '24px 24px 20px',
                zIndex: 5
              }}>
                  <h3 className="text-xl font-bold uppercase tracking-wide leading-tight" style={{
                  fontFamily: 'Oswald, sans-serif',
                  color: '#C9A044'
                }}>
                    MALOPE LE ROUX
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/50 mt-1" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    MD, BIG DADDY PRODUCTIONS
                  </p>
                </div>
              </div>
              <div className="border-b border-white/[0.06]" />
              <div className="p-6 md:p-8">
                <p className="text-white/60 text-sm font-light leading-[1.9]">
                  A seasoned media and production professional with over a decade of experience in videography, live performance, TV production, and digital media. Malope has produced work across corporate, entertainment, and social platforms, and continues to drive the division's creative and technical excellence.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div {...fadeUp(0.2)} className="group flex flex-col md:pl-10 border border-white/[0.05] hover:border-white/20 transition-all duration-500" style={{
            background: '#080808'
          }}>
              <div className="relative w-full overflow-hidden" style={{
              aspectRatio: '4/3',
              maxHeight: '280px',
              background: 'linear-gradient(to bottom, #131313, #080808)'
            }}>
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" alt="" aria-hidden="true" className="object-cover object-center" style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0.2,
                zIndex: 1
              }} />
                <div aria-hidden="true" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -55%)',
                width: '160px',
                height: '160px',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.06)',
                zIndex: 2
              }} />
                <div className="flex items-center justify-center h-full relative" style={{
                zIndex: 3
              }}>
                  <Users size={36} className="text-white/20" />
                </div>
                <div aria-hidden="true" className="group-hover:opacity-10 opacity-0 transition-opacity duration-500" style={{
                position: 'absolute',
                inset: 0,
                zIndex: 4,
                background: 'linear-gradient(to bottom, rgba(201,160,68,0.15) 0%, transparent 60%)',
                pointerEvents: 'none'
              }} />
                <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                padding: '24px 24px 20px',
                zIndex: 5
              }}>
                  <h3 className="text-xl font-bold uppercase tracking-wide leading-tight" style={{
                  fontFamily: 'Oswald, sans-serif',
                  color: '#C9A044'
                }}>
                    DUMISILE NKOSI
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/50 mt-1" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>
                    MD, BIG DADDY EVENTS AND COMMUNICATIONS
                  </p>
                </div>
              </div>
              <div className="border-b border-white/[0.06]" />
              <div className="p-6 md:p-8">
                <p className="text-white/60 text-sm font-light leading-[1.9]">
                  A global youth advocate, brand and marketing strategist, and communications specialist, Dumisile brings more than 13 years of leadership experience in events, PR, and brand strategy. She also serves as a Working Group Member of the BRICS Youth Council, representing South Africa on international platforms for youth, innovation, and sustainable development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDividerLine />

      {/* ── DIVISIONS ── */}
      <section id="divisions" className="relative py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden" style={{
      background: '#0f0f0f'
    }}>
        <SectionNumber num={SECTION_NUMBERS.divisions} />
        <MeshTexture opacity={0.04} />
        <div className="max-w-7xl mx-auto relative" style={{
        zIndex: 1
      }}>

          <motion.div {...fadeUp(0)} className="mb-3">
            <SectionLabelLeft>What We Do</SectionLabelLeft>
          </motion.div>
          <motion.div {...fadeUp(0.06)}>
            <SectionTitle>OUR CRAFT</SectionTitle>
          </motion.div>
          <div className="border-b border-white/10 mt-6 mb-8" />

          {/* Tab bar — sticky, horizontally scrollable on mobile */}
          <div className="sticky top-16 md:top-20 z-30 mb-10" style={{
          background: '#0f0f0f'
        }}>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex items-end border-b border-white/[0.06] min-w-max">
                {([{
                key: 'productions',
                label: 'BIG DADDY PRODUCTIONS'
              }, {
                key: 'events',
                label: 'BIG DADDY EVENTS & COMMS'
              }, {
                key: 'talent',
                label: 'TALENT & COMMS'
              }] as {
                key: 'productions' | 'events' | 'talent';
                label: string;
              }[]).map(tab => <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={cn('shrink-0 px-4 sm:px-6 py-3 text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-200 whitespace-nowrap min-h-[44px]', activeTab === tab.key ? 'border-b-2 border-[#C9A044] text-white font-bold' : 'text-white/30 hover:text-white/60 border-b-2 border-transparent font-normal')} style={{
                fontFamily: 'Oswald, sans-serif',
                marginBottom: '-1px'
              }}>
                    {tab.label}
                  </button>)}
              </div>
            </div>
          </div>

          {/* Tab panels */}
          <AnimatePresence mode="wait">
            {activeTab === 'productions' && <motion.div key="productions" initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -8
          }} transition={{
            duration: 0.3
          }}>
                <div className="flex items-center justify-between gap-4 mb-8 px-4 sm:px-6 py-4 sm:py-5" style={{
              borderLeft: '4px solid #C9A044',
              background: '#161616'
            }}>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white" style={{
                fontFamily: 'Oswald, sans-serif'
              }}>BIG DADDY PRODUCTIONS</h3>
                  <span className="shrink-0 border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white/40" style={{
                fontFamily: 'Inter, sans-serif'
              }}>6 SERVICES</span>
                </div>

                <div className="relative w-full overflow-hidden border-y border-white/[0.04] mb-8" style={{
              height: '128px'
            }}>
                  <img src="https://images.unsplash.com/photo-1598387993441-a364f854cfba?auto=format&fit=crop&q=80&w=1600" alt="Video production film set" className="w-full h-full object-cover" />
                  <div aria-hidden="true" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(8,8,8,0.8) 0%, transparent 40%, rgba(8,8,8,0.8) 100%)'
              }} />
                  <div aria-hidden="true" className="flex items-center justify-center" style={{
                position: 'absolute',
                inset: 0,
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.25rem, 4vw, 2.25rem)',
                color: 'rgba(255,255,255,0.1)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                    BIG DADDY PRODUCTIONS
                  </div>
                </div>

                <p className="text-white/65 text-sm leading-relaxed font-light max-w-3xl mb-10">
                  Founded in 2016, Big Daddy Productions is the original creative arm of Big Papi Investments, specialising in TV, film, music, and corporate production. The division has delivered a strong portfolio of work across entertainment, corporate, and social impact spaces, demonstrating technical precision and storytelling excellence.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-12">
                  {PRODUCTIONS_PILLS.map(pill => <span key={pill.id} className="border border-white/[0.1] px-3 py-2 text-[8px] sm:text-[9px] font-bold tracking-[0.25em] uppercase text-white/60 hover:border-white/40 hover:text-white transition-all duration-200 cursor-default" style={{
                borderLeft: '2px solid rgba(201,160,68,0.6)',
                background: '#111111',
                fontFamily: 'Inter, sans-serif'
              }}>
                      {pill.label}
                    </span>)}
                </div>

                <div className="border border-white/[0.06]" style={{
              background: 'transparent'
            }}>
                  <div className="px-4 sm:px-6 py-4 border-b border-white/[0.05]">
                    <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>Previous Work</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {ALL_PREV_WORK.map((item, idx) => <div key={item.id} className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 border-b border-white/[0.05]" style={{
                  background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent'
                }}>
                        <span className="shrink-0 border border-white/[0.08] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/30 whitespace-nowrap" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>
                          {item.category}
                        </span>
                        <span className="text-white/65 text-sm font-light">{item.title}</span>
                      </div>)}
                  </div>
                </div>
              </motion.div>}

            {activeTab === 'events' && <motion.div key="events" initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -8
          }} transition={{
            duration: 0.3
          }}>
                <div className="flex items-center justify-between gap-4 mb-8 px-4 sm:px-6 py-4 sm:py-5" style={{
              borderLeft: '4px solid #C9A044',
              background: '#161616'
            }}>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white" style={{
                fontFamily: 'Oswald, sans-serif'
              }}>BIG DADDY EVENTS &amp; COMMUNICATIONS</h3>
                  <span className="shrink-0 border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white/40" style={{
                fontFamily: 'Inter, sans-serif'
              }}>5 SERVICES</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                  <div className="group overflow-hidden border border-white/[0.05]" style={{
                aspectRatio: '16/9'
              }}>
                    <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800" alt="Gala event tables with lights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="group overflow-hidden border border-white/[0.05]" style={{
                aspectRatio: '16/9'
              }}>
                    <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800" alt="Speaker at podium" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/[0.06]">
                  <div className="p-6 md:p-8 flex flex-col gap-5" style={{
                background: 'transparent'
              }}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 rounded-full" style={{
                    width: '4px',
                    height: '48px',
                    background: 'linear-gradient(to bottom, #C9A044, transparent)',
                    marginTop: '2px'
                  }} aria-hidden="true" />
                      <h3 className="text-xl font-bold uppercase text-white" style={{
                    fontFamily: 'Oswald, sans-serif'
                  }}>BIG DADDY EVENTS &amp; COMMUNICATIONS</h3>
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed font-light">
                      The newest division of Big Papi Investments, providing holistic event management, communications, and PR solutions. Built on design-thinking and strategy, this division goes beyond logistics to deliver events and campaigns that foster engagement, visibility, and sustainable outcomes.
                    </p>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-3" style={{
                    fontFamily: 'Inter, sans-serif'
                  }}>Event Strategy &amp; Project Management</p>
                      <ul className="flex flex-col gap-2 text-white/65 text-sm font-light">
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Master planning and national event roadmap</span></li>
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Multi-city coordination and implementation oversight</span></li>
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Budget alignment, timelines and risk management</span></li>
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Government venue and stakeholder liaison</span></li>
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block" aria-hidden="true" style={{
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
                alignSelf: 'stretch',
                flexShrink: 0
              }} />

                  <div className="p-6 md:p-8 flex flex-col gap-5 border-t md:border-t-0 border-white/[0.06]" style={{
                background: 'transparent'
              }}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 rounded-full" style={{
                    width: '4px',
                    height: '48px',
                    background: 'linear-gradient(to bottom, #C9A044, transparent)',
                    marginTop: '2px'
                  }} aria-hidden="true" />
                      <h3 className="text-xl font-bold uppercase text-white" style={{
                    fontFamily: 'Oswald, sans-serif'
                  }}>BRAND MANAGEMENT &amp; STRATEGY</h3>
                    </div>
                    <p className="text-white/65 text-sm leading-relaxed font-light">
                      We build, position, and grow brands through intentional strategy, storytelling, and market alignment. Our approach integrates communications, visibility, partnerships, and reputation management to ensure long-term brand equity and influence.
                    </p>
                    <ul className="flex flex-col gap-2 text-white/65 text-sm font-light">
                      <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                      background: '#C9A044'
                    }} aria-hidden="true" /><span>Brand Positioning and Development</span></li>
                      <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                      background: '#C9A044'
                    }} aria-hidden="true" /><span>Strategic Communications</span></li>
                      <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                      background: '#C9A044'
                    }} aria-hidden="true" /><span>PR and Media Relations</span></li>
                      <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                      background: '#C9A044'
                    }} aria-hidden="true" /><span>Campaign Development</span></li>
                    </ul>
                  </div>
                </div>
              </motion.div>}

            {activeTab === 'talent' && <motion.div key="talent" initial={{
            opacity: 0,
            y: 12
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -8
          }} transition={{
            duration: 0.3
          }}>
                <div className="flex items-center justify-between gap-4 mb-8 px-4 sm:px-6 py-4 sm:py-5" style={{
              borderLeft: '4px solid #C9A044',
              background: '#161616'
            }}>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white" style={{
                fontFamily: 'Oswald, sans-serif'
              }}>TALENT &amp; COMMUNICATIONS</h3>
                  <span className="shrink-0 border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white/40" style={{
                fontFamily: 'Inter, sans-serif'
              }}>3 SERVICES</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/[0.06]">
                  <div className="flex flex-col" style={{
                background: 'transparent'
              }}>
                    <div className="p-6 md:p-8 flex flex-col gap-4 border-b border-white/[0.05]">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 rounded-full" style={{
                      width: '4px',
                      height: '40px',
                      background: 'linear-gradient(to bottom, #C9A044, transparent)',
                      marginTop: '2px'
                    }} aria-hidden="true" />
                        <h3 className="text-xl font-bold uppercase text-white" style={{
                      fontFamily: 'Oswald, sans-serif'
                    }}>TALENT MANAGEMENT</h3>
                      </div>

                      <div className="relative w-full overflow-hidden" style={{
                    height: '112px'
                  }}>
                        <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=1600" alt="Concert crowd from performer POV" className="w-full h-full object-cover" />
                        <div aria-hidden="true" style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, #080808 0%, rgba(8,8,8,0.4) 40%, transparent 100%)'
                    }} />
                      </div>

                      <p className="text-white/65 text-sm font-light leading-relaxed">
                        We represent, develop, and strategically position talent to maximise influence, opportunities, and commercial value.
                      </p>
                      <ul className="flex flex-col gap-2 text-white/65 text-sm font-light">
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Talent Representation</span></li>
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Booking and Partnerships</span></li>
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Personal Brand Development</span></li>
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Career Strategy and Growth</span></li>
                      </ul>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 rounded-full" style={{
                      width: '4px',
                      height: '40px',
                      background: 'linear-gradient(to bottom, #C9A044, transparent)',
                      marginTop: '2px'
                    }} aria-hidden="true" />
                        <h3 className="text-xl font-bold uppercase text-white" style={{
                      fontFamily: 'Oswald, sans-serif'
                    }}>CAPABILITY AND POSITIONING</h3>
                      </div>
                      <ul className="flex flex-col gap-2 text-white/65 text-sm font-light">
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Proven capacity to manage high-attendance events</span></li>
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Integrated approach combining strategy, communications and execution</span></li>
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Strong networks across faith, public and private sectors</span></li>
                        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                        background: '#C9A044'
                      }} aria-hidden="true" /><span>Focus on excellence, safety and measurable impact</span></li>
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block" aria-hidden="true" style={{
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
                alignSelf: 'stretch',
                flexShrink: 0
              }} />

                  <div className="p-6 md:p-8 flex flex-col gap-4 border-t md:border-t-0 border-white/[0.06]" style={{
                background: 'transparent'
              }}>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 rounded-full" style={{
                    width: '4px',
                    height: '40px',
                    background: 'linear-gradient(to bottom, #C9A044, transparent)',
                    marginTop: '2px'
                  }} aria-hidden="true" />
                      <h3 className="text-xl font-bold uppercase text-white" style={{
                    fontFamily: 'Oswald, sans-serif'
                  }}>COMMUNICATIONS AND PR</h3>
                    </div>
                    <ul className="flex flex-col gap-2 text-white/65 text-sm font-light mb-4">
                      <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                      background: '#C9A044'
                    }} aria-hidden="true" /><span>Strategic communications planning</span></li>
                      <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                      background: '#C9A044'
                    }} aria-hidden="true" /><span>Media relations and publicity</span></li>
                      <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{
                      background: '#C9A044'
                    }} aria-hidden="true" /><span>Reputation management and crisis communication</span></li>
                    </ul>
                    <div className="h-px w-full border-b border-white/[0.06] my-2" />
                    <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mb-2" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>Key Service Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {EVENTS_PILLS.map(pill => <span key={pill.id} className="border border-white/[0.1] px-3 py-1.5 text-[8px] sm:text-[9px] font-bold tracking-[0.15em] uppercase text-white/60 hover:border-white/40 hover:text-white transition-all duration-200 cursor-default" style={{
                    borderLeft: '2px solid rgba(201,160,68,0.6)',
                    background: '#111111',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                          {pill.label}
                        </span>)}
                    </div>
                  </div>
                </div>
              </motion.div>}
          </AnimatePresence>
        </div>
      </section>

      <SectionDividerLine />

      {/* ── VALUE PROPOSITION ── */}
      <section id="value" className="relative py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden" style={{
      background: '#111111'
    }}>
        <SectionNumber num={SECTION_NUMBERS.value} bright />
        <MeshTexture opacity={0.03} />
        <div className="max-w-7xl mx-auto relative" style={{
        zIndex: 1
      }}>

          <motion.div {...fadeUp(0)} className="mb-3">
            <SectionLabel>The Big Papi Difference</SectionLabel>
          </motion.div>
          <motion.div {...fadeUp(0.06)}>
            <SectionTitle center>WHY US</SectionTitle>
          </motion.div>
          <div className="flex justify-center">
            <ChromeDivider />
          </div>

          <motion.p {...fadeUp(0.12)} className="text-center text-white/65 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed italic mb-6 px-4 md:px-0">
            Big Papi Investments is not just a service provider — it is a movement of young, innovative leaders reshaping the media, events, and communications landscape.
          </motion.p>
          <motion.p {...fadeUp(0.15)} className="text-center text-[10px] uppercase tracking-[0.5em] font-bold text-white/30 mb-12" style={{
          fontFamily: 'Inter, sans-serif'
        }}>
            WHAT YOU GET:
          </motion.p>

          {/* Image strip — hidden on mobile, shown on md+ */}
          <motion.div {...fadeIn(0.1)} className="hidden md:flex gap-0.5 mb-1 border-y border-white/[0.04] overflow-hidden" style={{
          height: '256px'
        }}>
            {VALUE_BAND_IMAGES.map((img, idx) => <div key={img.id} className="relative overflow-hidden" style={{
            flex: idx === 1 ? '1.5' : '1'
          }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-opacity duration-500" style={{
              opacity: 0.5
            }} onMouseEnter={e => e.currentTarget.style.opacity = '0.7'} onMouseLeave={e => e.currentTarget.style.opacity = '0.5'} />
                <div aria-hidden="true" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '33%',
              background: 'linear-gradient(to top, #111111, transparent)'
            }} />
              </div>)}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-4" style={{
          background: 'rgba(255,255,255,0.06)'
        }}>
            {VALUE_CARDS.map((card, idx) => <motion.div key={card.title} {...fadeUp(0.1 + idx * 0.1)} className="group flex flex-col gap-5 p-6 md:p-8 transition-colors duration-300 overflow-hidden" style={{
            background: '#111111'
          }} onMouseEnter={e => e.currentTarget.style.background = '#181818'} onMouseLeave={e => e.currentTarget.style.background = '#111111'}>
                <div className="w-9 h-9 border flex items-center justify-center" style={{
              borderColor: 'rgba(201,160,68,0.2)'
            }}>
                  <card.icon size={16} className="text-white/40 group-hover:text-white/70 transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base md:text-lg font-bold uppercase tracking-wide text-white mb-2" style={{
                fontFamily: 'Oswald, sans-serif'
              }}>
                    {card.title}
                  </h4>
                  <p className="text-white/65 text-sm font-light leading-relaxed">{card.body}</p>
                </div>
                <div className="w-0 group-hover:w-full h-px transition-all duration-500 mt-auto" style={{
              background: 'linear-gradient(to right, #C9A044, transparent)'
            }} aria-hidden="true" />
              </motion.div>)}
          </div>
        </div>
      </section>

      <SectionDividerLine />

      {/* ── PROOF OF EXPERIENCE ── */}
      <section id="experience" className="relative py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden" style={{
      background: '#080808'
    }}>
        <SectionNumber num={SECTION_NUMBERS.experience} />
        <MeshTexture opacity={0.06} />
        <div className="max-w-7xl mx-auto relative" style={{
        zIndex: 1
      }}>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-3">
            <div>
              <motion.div {...fadeUp(0)} className="mb-3">
                <SectionLabelLeft>Our Work</SectionLabelLeft>
              </motion.div>
              <motion.div {...fadeUp(0.06)}>
                <SectionTitle>WHERE WE'VE BEEN</SectionTitle>
              </motion.div>
            </div>
            <motion.div {...fadeUp(0.08)}>
              <span className="border border-white/10 px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white/40 self-end mb-1 inline-block" style={{
              fontFamily: 'Inter, sans-serif'
            }}>
                THE PORTFOLIO
              </span>
            </motion.div>
          </div>
          <div className="border-b border-white/10 mt-6 mb-12" />

          {/* Gallery mosaic */}
          {/* Mobile: uniform 2-column grid */}
          <motion.div {...fadeIn(0.1)} className="grid md:hidden grid-cols-2 gap-1 mb-14" style={{
          gridAutoRows: '160px'
        }}>
            {GALLERY_IMAGES.map(img => <div key={img.id} className="overflow-hidden relative group cursor-pointer" onClick={() => setActiveImage(img)} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setActiveImage(img)} aria-label={`View ${img.alt}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{
              display: 'block'
            }} />
                <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
              zIndex: 1
            }} aria-hidden="true" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3
            }}>
                  <div className="border border-white/30 w-8 h-8 flex items-center justify-center">
                    <ArrowUpRight size={12} className="text-white/60" />
                  </div>
                </div>
              </div>)}
          </motion.div>

          {/* Tablet (md): mosaic with hero item, auto-rows 180px */}
          <motion.div {...fadeIn(0.1)} className="hidden md:grid lg:hidden grid-cols-3 gap-1.5 mb-14" style={{
          gridAutoRows: '180px'
        }}>
            {GALLERY_IMAGES.map((img, idx) => <div key={img.id} className="overflow-hidden relative group cursor-pointer" style={idx === 0 ? {
            gridColumn: 'span 2',
            gridRow: 'span 2'
          } : {}} onClick={() => setActiveImage(img)} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setActiveImage(img)} aria-label={`View ${img.alt}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{
              display: 'block'
            }} />
                <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
              zIndex: 1
            }} aria-hidden="true" />
                <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2
            }} className="group-hover:[background:rgba(201,160,68,0.06)]" aria-hidden="true" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3
            }}>
                  <div className="border border-white/30 w-8 h-8 flex items-center justify-center">
                    <ArrowUpRight size={12} className="text-white/60" />
                  </div>
                </div>
              </div>)}
          </motion.div>

          {/* Desktop (lg): full mosaic, auto-rows 220px */}
          <motion.div {...fadeIn(0.1)} className="hidden lg:grid grid-cols-3 gap-1.5 mb-14" style={{
          gridAutoRows: '220px'
        }}>
            {GALLERY_IMAGES.map((img, idx) => <div key={img.id} className="overflow-hidden relative group cursor-pointer" style={idx === 0 ? {
            gridColumn: 'span 2',
            gridRow: 'span 2'
          } : {}} onClick={() => setActiveImage(img)} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setActiveImage(img)} aria-label={`View ${img.alt}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{
              display: 'block'
            }} />
                <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)',
              zIndex: 1,
              transition: 'opacity 0.4s'
            }} aria-hidden="true" />
                <div style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              background: 'rgba(201,160,68,0)',
              transition: 'background 0.5s'
            }} className="group-hover:[background:rgba(201,160,68,0.06)]" aria-hidden="true" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{
              position: 'absolute',
              inset: 0,
              zIndex: 3
            }}>
                  <div className="border border-white/30 w-8 h-8 flex items-center justify-center">
                    <ArrowUpRight size={12} className="text-white/60" />
                  </div>
                </div>
              </div>)}
          </motion.div>

          {/* Event list */}
          <motion.div {...fadeUp(0.15)} className="border border-white/[0.06]" style={{
          background: '#111111'
        }}>
            <div className="px-4 sm:px-6 py-4 border-b border-white/[0.05]">
              <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold" style={{
              fontFamily: 'Inter, sans-serif'
            }}>
                Selected Events &amp; Productions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 p-4 sm:p-6">
              {EVENT_ITEMS.map(ev => <div key={ev.id} className="flex items-start gap-3 py-2.5 border-b border-white/[0.05]">
                  <div className="shrink-0 mt-1.5 rotate-45" style={{
                width: '6px',
                height: '6px',
                background: 'rgba(201,160,68,0.6)'
              }} aria-hidden="true" />
                  <span className="text-white/65 text-sm font-light">{ev.name}</span>
                </div>)}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDividerLine />

      {/* ── CLIENTS ── */}
      <section id="clients" className="relative py-16 md:py-24 lg:py-32 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden" style={{
      background: '#0d0d0d'
    }}>
        <SectionNumber num={SECTION_NUMBERS.clients} />
        <MeshTexture opacity={0.04} />
        <div className="max-w-7xl mx-auto relative" style={{
        zIndex: 1
      }}>

          <motion.div {...fadeUp(0)} className="mb-3">
            <SectionLabel>Trusted By</SectionLabel>
          </motion.div>
          <motion.div {...fadeUp(0.06)}>
            <SectionTitle center>OUR FAMILY</SectionTitle>
          </motion.div>
          <div className="flex justify-center">
            <ChromeDivider />
          </div>

          <motion.p {...fadeUp(0.1)} className="text-[11px] tracking-widest text-white/25 uppercase text-center mb-8" style={{
          fontFamily: 'Inter, sans-serif'
        }}>
            Organisations that have placed their trust in Big Papi Investments across media, government, and civil society.
          </motion.p>

          {/* Decorative image strip — hidden on mobile */}
          <motion.div {...fadeIn(0.08)} className="hidden md:flex gap-px overflow-hidden border-b border-white/[0.04] mb-12" style={{
          height: '96px'
        }}>
            {CLIENTS_STRIP_IMAGES.map(img => <div key={img.id} className="overflow-hidden flex-1">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{
              opacity: 0.2
            }} />
              </div>)}
          </motion.div>

          <div className="flex flex-col gap-px" style={{
          background: 'rgba(255,255,255,0.05)'
        }}>
            {[CLIENTS_ROW1, CLIENTS_ROW2, CLIENTS_ROW3, CLIENTS_ROW4].map((row, rowIdx) => <motion.div key={`row-${rowIdx}`} {...fadeUp(0.1 + rowIdx * 0.08)} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px" style={{
            background: 'rgba(255,255,255,0.05)'
          }}>
                {row.map(client => <div key={client.id} className="group flex items-center justify-center min-h-[70px] md:min-h-[80px] lg:min-h-[90px] p-4 md:p-6 hover:bg-[#1a1a1a] transition-colors duration-200 cursor-default" style={{
              background: '#131313'
            }}>
                    <span className="text-white/40 group-hover:text-white/80 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-center transition-colors duration-200 leading-snug" style={{
                fontFamily: 'Inter, sans-serif'
              }}>
                      {client.name}
                    </span>
                  </div>)}
              </motion.div>)}
          </div>
        </div>
      </section>

      <SectionDividerLine />

      {/* ── CONTACT / FOOTER ── */}
      <footer id="contact" className="relative pt-16 md:pt-24 pb-0 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden" style={{
      background: '#080808'
    }}>
        <SectionNumber num={SECTION_NUMBERS.contact} />
        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1920" alt="" aria-hidden="true" className="object-cover object-center" style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 0
      }} />
        <MeshTexture opacity={0.06} />

        {/* Watermark */}
        <div aria-hidden="true" className="pointer-events-none select-none flex items-center justify-center" style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        fontFamily: 'Oswald, sans-serif',
        fontWeight: 700,
        fontSize: 'clamp(120px, 35vw, 480px)',
        lineHeight: 1,
        color: 'rgba(255,255,255,0.03)',
        letterSpacing: '-0.04em',
        overflow: 'hidden'
      }}>
          3B
        </div>

        {/* Gold glow top divider */}
        <div style={{
        marginBottom: '48px'
      }}>
          <div style={{
          height: '1px',
          background: 'linear-gradient(to right, transparent, #C9A044, transparent)'
        }} aria-hidden="true" />
          <div style={{
          height: '4px',
          background: 'linear-gradient(to right, transparent, rgba(201,160,68,0.3), transparent)',
          filter: 'blur(3px)',
          marginTop: '-2px'
        }} aria-hidden="true" />
        </div>

        <div className="max-w-5xl mx-auto relative flex flex-col items-center text-center gap-10" style={{
        zIndex: 1
      }}>
          <motion.div {...fadeUp(0)}>
            <LogoMark size="lg" />
          </motion.div>

          <motion.p {...fadeUp(0.08)} className="text-[10px] tracking-[0.5em] text-white/30 uppercase" style={{
          fontFamily: 'Inter, sans-serif'
        }}>
            Media · Events · Communications
          </motion.p>

          <motion.div {...fadeUp(0.1)} className="w-full">
            <SectionLabel>Get In Touch</SectionLabel>
            <div className="mt-3">
              <SectionTitle center>LET'S TALK</SectionTitle>
            </div>
            <div className="flex justify-center">
              <ChromeDivider />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeUp(0.12)} className="w-full max-w-xl px-0">
            <ContactForm />
          </motion.div>

          {/* 3-column contact grid */}
          <motion.div {...fadeUp(0.15)} className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full max-w-3xl mt-4">
            {/* Col 1 */}
            <div className="flex flex-col gap-4 text-center sm:text-left items-center sm:items-start">
              <SectionLabelLeft>Reach Us</SectionLabelLeft>
              <div className="h-px bg-white/[0.06] w-full mt-1 mb-2" />
              <a href="mailto:Dumi@bigdaddyevents.co.za" className="group flex items-start gap-3">
                <Mail size={12} className="shrink-0 mt-0.5 group-hover:text-white/60 transition-colors" style={{
                color: 'rgba(201,160,68,0.6)'
              }} />
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/25 font-bold mb-0.5" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>Events Division</p>
                  <p className="text-white/60 text-sm font-light group-hover:text-white transition-colors group-hover:underline underline-offset-4 group-hover:decoration-[#C9A044]">
                    Dumi@bigdaddyevents.co.za
                  </p>
                </div>
              </a>
              <a href="mailto:Malope@bigdaddyevents.co.za" className="group flex items-start gap-3">
                <Mail size={12} className="shrink-0 mt-0.5 group-hover:text-white/60 transition-colors" style={{
                color: 'rgba(201,160,68,0.6)'
              }} />
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/25 font-bold mb-0.5" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>Productions Division</p>
                  <p className="text-white/60 text-sm font-light group-hover:text-white transition-colors group-hover:underline underline-offset-4 group-hover:decoration-[#C9A044]">
                    Malope@bigdaddyevents.co.za
                  </p>
                </div>
              </a>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-4 text-center sm:text-left items-center sm:items-start">
              <SectionLabelLeft>Find Us</SectionLabelLeft>
              <div className="h-px bg-white/[0.06] w-full mt-1 mb-2" />
              <div className="flex items-start gap-3">
                <MapPin size={12} className="shrink-0 mt-0.5" style={{
                color: 'rgba(201,160,68,0.6)'
              }} />
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-white/25 font-bold mb-0.5" style={{
                  fontFamily: 'Inter, sans-serif'
                }}>Address</p>
                  <p className="text-white/60 text-sm font-light leading-snug text-left">
                    Founders Hill Office Park<br />
                    Modderfontein, Johannesburg<br />
                    South Africa, 1609
                  </p>
                </div>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-4 text-center sm:text-left items-center sm:items-start">
              <SectionLabelLeft>Our Websites</SectionLabelLeft>
              <div className="h-px bg-white/[0.06] w-full mt-1 mb-2" />
              <a href="http://www.bigpapiinvestments.co.za" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
                <Globe size={12} className="shrink-0 mt-0.5 group-hover:text-white/60 transition-colors" style={{
                color: 'rgba(201,160,68,0.6)'
              }} />
                <span className="text-white/60 text-sm font-light group-hover:text-white underline underline-offset-4 decoration-white/20 group-hover:decoration-[#C9A044] transition-colors">
                  www.bigpapiinvestments.co.za
                </span>
              </a>
              <a href="http://www.bigdaddyevents.co.za" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
                <Globe size={12} className="shrink-0 mt-0.5 group-hover:text-white/60 transition-colors" style={{
                color: 'rgba(201,160,68,0.6)'
              }} />
                <span className="text-white/60 text-sm font-light group-hover:text-white underline underline-offset-4 decoration-white/20 group-hover:decoration-[#C9A044] transition-colors">
                  www.bigdaddyevents.co.za
                </span>
              </a>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div {...fadeUp(0.25)} className="w-full border-t border-white/[0.05] pt-8 pb-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-8">
            <p className="text-[10px] text-white/25 uppercase tracking-widest order-2 md:order-1" style={{
            fontFamily: 'Inter, sans-serif'
          }}>
              © 2026 Big Papi Investments (Pty) Ltd. All rights reserved.
            </p>
            <span className="border px-5 py-1.5 text-[9px] tracking-[0.4em] uppercase text-white/30 order-1 md:order-2 md:mx-auto" style={{
            fontFamily: 'Inter, sans-serif',
            borderColor: 'rgba(201,160,68,0.2)'
          }}>
              Company Profile 2026
            </span>
            <div className="flex items-center gap-2 justify-center order-3">
              <button aria-label="Instagram" className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/30 transition-all" style={{
              color: 'rgba(255,255,255,0.3)'
            }} onMouseEnter={e => {
              e.currentTarget.style.color = '#C9A044';
              e.currentTarget.style.borderColor = 'rgba(201,160,68,0.4)';
            }} onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}>
                <Instagram size={14} />
              </button>
              <button aria-label="Twitter" className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/30 transition-all" style={{
              color: 'rgba(255,255,255,0.3)'
            }} onMouseEnter={e => {
              e.currentTarget.style.color = '#C9A044';
              e.currentTarget.style.borderColor = 'rgba(201,160,68,0.4)';
            }} onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}>
                <Twitter size={14} />
              </button>
              <button aria-label="YouTube" className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/30 transition-all" style={{
              color: 'rgba(255,255,255,0.3)'
            }} onMouseEnter={e => {
              e.currentTarget.style.color = '#C9A044';
              e.currentTarget.style.borderColor = 'rgba(201,160,68,0.4)';
            }} onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}>
                <Youtube size={14} />
              </button>
              <button onClick={() => window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })} aria-label="Back to top" className="flex items-center gap-1.5 border border-white/[0.1] px-4 py-2 text-[9px] tracking-[0.3em] uppercase text-white/30 hover:text-[#C9A044] hover:border-[#C9A044]/40 transition-all duration-200 rounded-none ml-2 min-h-[44px]" style={{
              fontFamily: 'Inter, sans-serif'
            }}>
                <ArrowUp size={12} />
                <span>TOP</span>
              </button>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>;
};