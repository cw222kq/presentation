import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen md:w-screen">
      <Router>
        <Layout>
          <Routes>
            <Route path="/presentation/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
