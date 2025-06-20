import './globals.css';
import { Bebas_Neue, Cormorant_Garamond, Merriweather, Oswald } from 'next/font/google';   


const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
});

const oswald = Oswald({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-oswald'
});

const merriweather = Merriweather({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-merriweather'
});

const cormorantGaramond = Cormorant_Garamond({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-cormorant'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${merriweather.className} ${merriweather.variable} ${oswald.className} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
