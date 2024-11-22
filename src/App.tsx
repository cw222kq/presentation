import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen md:w-screen">
      <Router>
        <Layout>
          <Routes>
            <Route path="/presentation/" element={<Home />} />
            <Route path="/presentation/skills/" element={<Skills />} />
            <Route path="/presentation/projects/" element={<Projects />} />
            <Route path="/presentation/contact/" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
