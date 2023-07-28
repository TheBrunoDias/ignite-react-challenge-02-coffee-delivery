import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { OutletContainer } from './style'

export function DefaultLayout() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Suspense>
    </>
  )
}
