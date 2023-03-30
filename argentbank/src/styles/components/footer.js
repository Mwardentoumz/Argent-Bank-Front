import styled from 'styled-components'
import colors from '../bases/colors'

export const FooterStyle = styled.footer`
  background-color: ${({ theme }) =>
    theme === 'light' ? 'white' : `${colors.backgroundDark}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px inset #bfc8d3;
  border: ${({ theme }) =>
    theme === 'light'
      ? '2px inset #bfc8d3'
      : `2px inset ${colors.backgroundDark}`};
  padding: 1.5rem 0;
`
export const Copyright = styled.p`
  color: ${({ theme }) =>
    theme === 'light' ? `${colors.text}` : 'white'};
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 3rem;
  padding: 0.5rem 2.5rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-color: ${({ theme }) =>
    theme === 'light' ? `${colors.backgroundLight}` : `${colors.text}`};
  background-color: ${({ theme }) =>
    theme === 'light' ? `${colors.backgroundLight}` : `${colors.text}`};
  color: ${({ theme }) =>
    theme === 'light' ? `${colors.text}` : `${colors.backgroundLight}`};
  text-align: center;
  cursor: pointer;
  border-radius: 0.35rem;
  &:hover {
    border-color: ${({ theme }) =>
      theme === 'light' ? `${colors.text}` : `${colors.backgroundLight}`};
    background-color: ${({ theme }) =>
      theme === 'light' ? `${colors.text}` : `${colors.backgroundLight}`};
    color: ${({ theme }) =>
      theme === 'light' ? `${colors.backgroundLight}` : `${colors.text}`};
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
`