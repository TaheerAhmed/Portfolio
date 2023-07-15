
import { BrowserRouter } from "react-router-dom"

import NavBar from './components/Navbar'
import { About, Experience, Contact, Hero, Feedbacks, Tech, Works, StarsCanvas } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary h-screen w-full">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-full w-full">
          <NavBar />
          <Hero />
        </div>
        <div className="">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </div>
        <div className="reative z-0">
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
