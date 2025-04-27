interface BackgroundOverlayProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  }

const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({ setIsMenuOpen }) => {
  return (
    <>
      <div
        className="fixed top-14 sm:top-24 left-0 w-full h-full bg-black bg-opacity-70 z-60"
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  )
}

export default BackgroundOverlay
