const CHANNEL_URL = "https://www.youtube.com/@beforeconvenienceofficial";
const SUBSCRIBE_URL = `${CHANNEL_URL}?sub_confirmation=1`;

const THEMES = [
  { icon: "💧", title: "Water", text: "Springs, wells, cisterns, and aqueducts, and why clear water was never a guarantee." },
  { icon: "🔥", title: "Warmth", text: "Longhouses, hearths, turf walls, and wool: surviving winter without central heating." },
  { icon: "🧂", title: "Food", text: "Salt, smoke, cheese, and fermentation: keeping food for months without a fridge." },
  { icon: "🏠", title: "Shelter", text: "Ice Age huts, mud brick, and windcatchers: homes built for extreme climates." },
  { icon: "🧭", title: "Travel", text: "Stars, caravans, and ocean voyages: finding the way before maps and GPS." },
  { icon: "🧼", title: "Everyday Life", text: "Soap, toilets, laundry, and teeth: the daily routines nobody writes about." },
];

const EPISODES = [
  { tag: "Water", title: "How Ancient Humans Found Safe Water Without Filters" },
  { tag: "Winter", title: "How Vikings Kept Their Homes Warm Through Brutal Winters" },
  { tag: "Heat", title: "How Ancient Egyptians Slept in Desert Heat Without Air Conditioning" },
];

function SubscribeButton({ children = "Subscribe on YouTube", variant = "primary" }) {
  return (
    <a className={`btn btn-${variant}`} href={SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top">
            <img className="logo-mark" src="/images/logo.webp" alt="" width="40" height="40" />
            Before Convenience
          </a>
          <nav className="nav-links">
            <a href="#explore">Explore</a>
            <a href="#episodes">Episodes</a>
            <SubscribeButton variant="small">Subscribe</SubscribeButton>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img
            className="hero-banner"
            src="/images/banner.webp"
            alt="Before Convenience: How Humanity Survived Before the Modern World"
            width="1672"
            height="941"
          />
          <div className="container hero-inner">
            <p className="eyebrow">History documentaries</p>
            <h1>
              Before faucets, fridges, and furnaces, <em>everyday life took ingenuity.</em>
            </h1>
            <p className="lead">
              We explore how ordinary people found water, stayed warm, kept food, built shelter, and
              solved everyday problems long before modern technology.
            </p>
            <div className="hero-actions">
              <SubscribeButton />
              <a className="btn btn-ghost" href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                Watch the latest video
              </a>
            </div>
          </div>
        </section>

        <section id="explore" className="section">
          <div className="container">
            <h2>What we explore</h2>
            <p className="section-lead">
              From Ice Age camps to Roman cities, Viking longhouses, and medieval towns.
            </p>
            <div className="grid">
              {THEMES.map((t) => (
                <article className="card" key={t.title}>
                  <span className="card-icon" aria-hidden="true">{t.icon}</span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="episodes" className="section section-dark">
          <div className="container">
            <h2>Featured episodes</h2>
            <ul className="episodes">
              {EPISODES.map((e, i) => (
                <li key={e.title}>
                  <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
                    <span className="ep-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="ep-body">
                      <span className="ep-tag">{e.tag}</span>
                      <span className="ep-title">{e.title}</span>
                    </span>
                    <span className="ep-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section cta">
          <div className="container cta-inner">
            <h2>See how humanity really lived.</h2>
            <p className="section-lead">New documentaries about life before the modern world.</p>
            <SubscribeButton />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-brand">
            <img src="/images/logo.webp" alt="" width="28" height="28" />
            © {new Date().getFullYear()} Before Convenience
          </p>
          <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">youtube.com/@beforeconvenienceofficial</a>
        </div>
      </footer>
    </>
  );
}
