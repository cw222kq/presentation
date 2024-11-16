const Footer: React.FC = () => { 
  return (
    <div className="flex text-sm mt-4 text-gray-400 border-t w-full">
    <div className="w-full py-2 text-center">
      <p>
        <span className="inline-flex items-center">
          <img
            src="/presentation/react.svg"
            alt="React logo"
            className="h-4 w-4 mx-4"
          />
        </span>
        <span className="inline-flex items-center">
          <img src="/presentation/vite.svg" alt="Vite logo" className="h-4 w-4 mx-4" />
        </span>
        <span className="inline-flex items-center">
          <img src="/presentation/tailwind.svg" alt="Tailwind logo" className="h-4 w-4 mx-4" />
        </span>
      </p>
    </div>
  </div>
  )
}

export default Footer
