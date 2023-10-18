'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Chat from "./components/menu/chat"
import Rules from "./components/menu/rules"
import Speachbubble from './components/speachbubble'
import Rewards from './components/menu/rewards'
import Ranking from './components/menu/ranking'
import SpeachBubbleContextProvider from './contexts/speachBubbleContext'
import Login from './components/menu/login'
import RulesContent from './components/menuContent/rulesContent'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // TODO: titel anpassen
  return (
    <html lang="en">
      <head>
        <title>Big Baba Bubu Advent Calendar</title>
      </head>
      <body className={inter.className}>
        <SpeachBubbleContextProvider>
          <header className='flex fixed w-screen flex-col top-5'>
            <div className='flex flex-row h-20'>
              <div className='flex justify-between w-11/12'>
                <div className='flex w-1/4 justify-around'>
                  <Rewards />
                  <Ranking />
                </div>
                <div className='flex w-1/4 justify-around'>
                  <Chat />
                  <Rules />
                </div>
              </div>
              <Login />
            </div>
            <div className='flex flex-col w-11/12'>
              <RulesContent />
              <Speachbubble />
            </div>
          </header>
        </SpeachBubbleContextProvider>
        <main className='flex justify-center'> {children} </main>
      </body>
    </html>
  )
}