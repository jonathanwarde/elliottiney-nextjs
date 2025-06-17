import './globals.css';
import { Bebas_Neue, Cormorant_Garamond } from 'next/font/google';   // ← font loader function


// call the loader **once**, at module scope, and save the result
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
});

const cormorantGaramond = Cormorant_Garamond({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-cormorant'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.className} ${bebasNeue.variable} ${cormorantGaramond.className} ${cormorantGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
