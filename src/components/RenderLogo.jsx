const RenderLogo = ({ logo, alt }) => {
  return (
    <img src={`/${logo}`} alt={`img with ${alt}`} />
  )
}

export default RenderLogo
