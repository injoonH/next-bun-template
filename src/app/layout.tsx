import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js & Bun Template',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
