const RenderLogo = ({ logo }) => {
  // assets/images/logo-console-plus.svg 12ms
  return (
    <img src={`/${logo}`} alt={logo} />
  )
}

export default RenderLogo
