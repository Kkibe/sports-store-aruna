import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function AppHelmet({ title }) {
  const location = useLocation();
  const canonicalUrl = `${window.location.origin}${location.pathname}`;

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" crossorigin="anonymous" />
      <link rel="shortcut icon" type="image/x-icon" href="/logo512.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      <meta name="theme-color" content="#00BFFF" />
      <meta name="description" content="Shop the best sports accessories ✓Football Boots ✓Jerseys ✓Training Gear ✓Protective Equipment & more. Get top-quality sports gear for all your needs!" />
      <meta name="keywords" content="sports accessories, football gear, sports equipment, football boots, jerseys, training gear, protective gear, sportswear, fitness accessories, athletic apparel, football gloves, shin guards, football kits, sports shop, running shoes, gym accessories, team uniforms, sports merchandise, high-performance gear, sports clothing" />
      <meta name="author" content="SportStoreKe" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph tags for social media */}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Get all the latest ✓Fixed VIP Tips ✓Football Predictions, ✓Latest Football Betting Odds and livescores, results & fixtures for all leagues and competitions."
      />

      <meta name="og:description" content="Shop the best sports accessories ✓Football Boots ✓Jerseys ✓Training Gear ✓Protective Equipment & more. Get top-quality sports gear for all your needs!" />
      <meta property="og:image" content={`${window.location.origin}/logo512.png`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="Shop the best sports accessories ✓Football Boots ✓Jerseys ✓Training Gear ✓Protective Equipment & more. Get top-quality sports gear for all your needs!"
      />
      <meta name="twitter:image" content={`${window.location.origin}/logo512.png`} />

      <title>{title} | SportStoreKe - Fixed VIP Football Tips & Predictions, Insights and News</title>
    </Helmet>
  );
}
