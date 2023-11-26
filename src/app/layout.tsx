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
            <header className='flex fixed w-screen flex-col top-5'>
              <div className='flex flex-row h-20'>
                <div className='flex justify-between w-11/12'>
                  <div className='flex w-1/4 justify-around'>
                    <Rewards />
                    <Ranking />
                  </div>
                  <div className='flex w-1/4 justify-around'>
                    {false && <Chat />}
                    <Rules />
                  </div>
                </div>
                <Login />
              </div>
              <ContentContainer />
            </header>
            <LoginContent />
          </ContentContextProvider>
          <main className='flex justify-center'> {children} </main>
        </AuthContextProvider>
      </body>
    </html>
  )
}