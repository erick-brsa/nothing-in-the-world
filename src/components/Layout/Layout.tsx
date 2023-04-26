import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Header'
import { Footer } from '../Footer'

interface Props {
  children?: ReactNode;
}

export const Layout: FC<Props> = () => {
  return (
    <>
      <Header />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
