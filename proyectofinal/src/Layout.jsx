import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"

export function Layout() {
  return (
    <>
    <Header />
    <NavBar />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}