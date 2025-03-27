// RenderLogo.jsx

// Importa todos los logos SVG

const RenderLogo = ({ logo }) => {
  return (
    <img src={`src/${logo}`} alt={logo} />
  )
}

export default RenderLogo
