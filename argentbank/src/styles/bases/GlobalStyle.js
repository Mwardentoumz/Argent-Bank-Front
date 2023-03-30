import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const StyledGlobalStyle = createGlobalStyle`
/* Main Syles */
* {
    font-family: 'Nunito', Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    color: ${colors.text};
    font-size: 16px;
  }
  body {
    background-color: ${(props) =>
          props.isDarkMode ? `${colors.text}` : `${colors.backgroundLight}`};
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  img {
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .sr-only {
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin:-1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    white-space:nowrap;
    border:0
  }
  .main {
    display: flex;
    flex-direction: column;
  }
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  @keyframes swing {
  20% {
    transform: rotate(3deg);
  }
  40% {
    transform: rotate(-2deg);
  }
  60% {
    transform: rotate(1deg);
  }
  80% {
    transform: rotate(-1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
`
export const GlobalStyle = () => {
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}