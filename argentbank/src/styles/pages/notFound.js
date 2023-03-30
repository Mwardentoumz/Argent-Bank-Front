import styled from 'styled-components'
import image from '../../assets/404.jpg'
import colors from '../bases/colors'
import imageDark from '../../assets/404dark.jpg'

export const NotFoundMain = styled.main`
  background-image: ${({ theme }) =>
    theme === 'light' ? `url(${image})` : `url(${imageDark})`};
  background-position: 0 90%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 78vh;
  position: relative;
  @media (max-width: 720px) {
    height: 20rem;
  }
`
export const NotFoundContent = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 16rem;
  background: ${({ theme }) =>
    theme === 'light' ? 'white' : `${colors.backgroundDark}`};
  padding: 2rem;
  text-align: center;
  margin: 2rem;
  border-radius: 0.35rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 720px) {
    width: 12rem;
    padding: 1.5rem;
    margin: auto;
    right: 0;
    left: 0;
  }
`
export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 6rem;
  margin: 0;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
  @media (max-width: 520px) {
    font-size: 3rem;
  }
`
export const Text = styled.p`
  margin-bottom: 0;
  font-size: 2.2rem;
  font-weight: bold;
  padding-top: 0.5rem;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
  @media (max-width: 520px) {
    font-size: 1.6rem;
  }
`