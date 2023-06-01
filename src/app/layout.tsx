import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gyanindra Yadav | JavaScript Developer',
  description: 'Gyanindra Yadav is a JavaScript Developer who works with React Js, Next Js, Tailwind CSS, SASS and other tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
