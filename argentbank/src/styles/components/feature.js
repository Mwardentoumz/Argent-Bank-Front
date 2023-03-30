import styled from 'styled-components'
import colors from '../bases/colors'

export const FeatureItemStyle = styled.article`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    padding: 2.5rem 2.5rem 0 2.5rem;
  }
  @media (max-width: 520px) {
    padding: 2rem 1.3rem 0 1.3rem;
  }
`
export const FeatureImage = styled.img`
  width: 6.25rem;
  border: 0.65rem solid ${colors.primary};
  border-radius: 50%;
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${colors.backgroundLight}`
      : `${colors.backgroundLight}`};
`
export const FeatureTitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
  padding-top: 0.5rem;
`
export const FeatureText = styled.p`
  text-align: center;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
`