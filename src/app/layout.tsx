'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Chat from "./components/menu/chat"
import Rules from "./components/menu/rules"
import Rewards from './components/menu/rewards'
import Ranking from './components/menu/ranking'
import { ContentContextProvider } from './contexts/ContentContext'
import Login from './components/menu/login'
import { AuthContextProvider } from './contexts/AuthContext'
import ContentContainer from './components/menuContent/contentContainer'
import LoginContent from './components/menuContent/loginContent'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>Jumping Santa Advent Calendar</title>
      </head>
      <body className='flex items-center justify-center h-'>
        <AuthContextProvider>
          <ContentContextProvider>
            <header className='grid grid-cols-12 grid-rows-2 fixed w-screen top-5 h-1/5 [&>*]:h-min'>
              <div className='[&>*]: w-24'>
                <Rewards />
              </div>
              <div className='col-start-3 [&>*]: w-24'>
                <Ranking />
              </div>
              {false && <Chat />}
              <div className='col-start-10 [&>*]: w-20'>
                <Rules />
              </div>
              <div className='col-start-12 [&>*]: w-24'>
                <Login />
              </div>
              <div className='row-start-2 col-span-full'>
                <ContentContainer />
              </div>
            </header>
            <LoginContent />
          </ContentContextProvider>
          <main className='flex justify-center'> {children} </main>
        </AuthContextProvider>
      </body>
    </html>
  )
}