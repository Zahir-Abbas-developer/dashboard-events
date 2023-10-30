
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/theme'
import ThemeLocalization from '@/theme/ThemeLocalization'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import Layout from '@/components/Layout'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {
 
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
      <ThemeProvider>
      <ThemeLocalization>
        {children}
        </ThemeLocalization>
    </ThemeProvider> 
      </Layout>
   
    
      
  
      
        </body>
    </html>
  )
}