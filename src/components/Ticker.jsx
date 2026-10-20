import React from 'react';
import { tickerItems } from '../data/portfolioData';

export default function Ticker({ theme = 'dark', customItems, speed = '26s' }) {
  const items = customItems || tickerItems;
  // Repeat items to allow seamless infinite keyframe loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  const isLilac = theme === 'lilac';

  return (
    <div
      className={`ticker-band ${isLilac ? 'lilac' : ''}`}
      style={{
        background: isLilac ? '#ba9afd' : '#190c39',
        color: isLilac ? '#190c39' : '#ffffff',
        borderTop: isLilac ? 'none' : '1px solid rgba(186, 154, 253, 0.15)',
        borderBottom: isLilac ? 'none' : '1px solid rgba(186, 154, 253, 0.15)'
      }}
    >
      <div className="ticker-track" style={{ animationDuration: speed }}>
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="ticker-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ticker-star"
              style={{
                fill: isLilac ? '#190c39' : '#ba9afd',
                minWidth: '14px',
                minHeight: '14px'
              }}
            >
              <path d="M4.15385 7.84615C5.40909 9.10139 6 12 6 12C6 12 6.59091 9.10139 7.84615 7.84615C9.10139 6.59091 12 5.99999 12 5.99999C12 5.99999 8.90572 5.67495 7.61538 4.38461C6.32505 3.09428 6 0 6 0C6 0 5.67495 3.09428 4.38462 4.38461C3.09428 5.67495 5.09441e-06 5.99999 5.09441e-06 5.99999C5.09441e-06 5.99999 2.89861 6.59091 4.15385 7.84615Z" />
            </svg>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
