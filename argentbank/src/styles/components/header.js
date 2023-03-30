import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../bases/colors'

export const HeaderStyle = styled.header`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.35rem 1.25rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? 'white' : `${colors.backgroundDark}`};
  @media (max-width: 520px) {
    padding: 0.35rem 0.5rem;
  }
`
export const NavLinkElements = styled(NavLink)`
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  
`
export const Icon = styled.i`
  font-size: 2rem;
  padding: 0 0.5rem;
  margin-left: 1.5rem;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
  @media (max-width: 520px) {
    font-size: 1.8rem;
  }
`
export const Logo = styled.img`
  width: 12.5rem;
  box-shadow: 0.35rem 0.35rem 0.35rem rgba(0, 0, 0, 0.1);
  border-radius: 0.35rem;
  padding-top: 0.2rem;
  &:hover {
    animation: swing 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  @media (max-width: 520px) {
    width: 10.5rem;
  }
`
export const NavLinksWrapper = styled.div`
  display: flex;
`
export const Paragraph = styled.p`
  display: inline;
  font-size: 1.1rem;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 520px) {
    display: none;
  }
`