export default function Ticker({ items, variant = "dark", speed = "24s" }) {
  const defaultItems = [
    "Shopify Plus Engineering",
    "Custom Remix Apps",
    "Shopify Functions API",
    "60+ Stores Shipped",
    "Real-Time Inventory Sync",
    "Checkout Extensibility",
    "85+ Lighthouse Performance",
    "Admin UI Extensions",
    "Custom Liquid Themes",
    "Transparent Collaboration"
  ];

  const list = items || defaultItems;

  const StarIcon = ({ fill = "currentColor" }) => (
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 12 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', flexShrink: 0 }}
    >
      <path 
        d="M4.15385 7.84615C5.40909 9.10139 6 12 6 12C6 12 6.59091 9.10139 7.84615 7.84615C9.10139 6.59091 12 5.99999 12 5.99999C12 5.99999 8.90572 5.67495 7.61538 4.38461C6.32505 3.09428 6 0 6 0C6 0 5.67495 3.09428 4.38462 4.38461C3.09428 5.67495 5.09441e-06 5.99999 5.09441e-06 5.99999C5.09441e-06 5.99999 2.89861 6.59091 4.15385 7.84615Z" 
        fill={fill}
      />
    </svg>
  );

  return (
    <div className={`ticker-band ticker-${variant}`}>
      <div className="ticker-track" style={{ animationDuration: speed }}>
        {/* Render 3 copies for smooth seamless infinite looping */}
        {[0, 1, 2].map((loopIdx) => (
          <div key={loopIdx} style={{ display: 'inline-flex', alignItems: 'center' }}>
            {list.map((item, idx) => (
              <div key={idx} className="ticker-item">
                <StarIcon fill={variant === 'lilac' ? '#190C39' : '#ffffff'} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
