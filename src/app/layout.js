import './globals.css'
import localFont from 'next/font/local'

const kidsco = localFont({
  src: [
    {
      path: '../../public/fonts/Kidsco.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Kidsco.ttf',
      weight: '700'
    }
  ],
  variable: '--font-kidsco'
})

export const metadata = {
  title: 'T2E',
  description: 'T2E Game Site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kidsco.variable} font-sans`}>
      <body >{children}</body>
    </html>
  )
}
