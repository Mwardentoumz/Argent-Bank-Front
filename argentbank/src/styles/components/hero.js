import styled from 'styled-components'
import image from '../../assets/bank-tree.jpeg'
import colors from '../bases/colors'

export const HeroStyle = styled.header`
  background-image: url(${image});
  background-position: 0 33%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 25rem;
  position: relative;
  @media (max-width: 520px) {
    height: 16rem;
  }
`
export const HeroContent = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 18.25rem;
  background: ${({ theme }) =>
    theme === 'light' ? 'white' : `${colors.backgroundDark}`};
  padding: 2rem;
  text-align: left;
  margin: 2rem;
  border-radius: 0.35rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 520px) {
    width: 12rem;
    padding: 1.5rem;
    margin: auto;
    right: 0;
    left: 0;
  }
`
export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
  @media (max-width: 520px) {
    font-size: 1.2rem;
  }
`
export const Text = styled.p`
  margin-bottom: 0;
  font-size: 1.2rem;
  padding-top: 0.5rem;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
  @media (max-width: 520px) {
    font-size: 1rem;
  }
`