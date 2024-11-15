import About from "../components/About"
import Introduction from "../components/Introduction"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Introduction />
      <About />
    </div>
  )
}

export default Home
