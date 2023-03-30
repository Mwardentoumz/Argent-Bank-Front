import styled from 'styled-components'
import colors from '../bases/colors'

export const AccountArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.text};
  background-color: ${({ theme }) => (theme === 'light' ? 'white' : `${colors.backgroundDark}`)};
  width: 85%;
  margin: 0 auto;
  flex-direction: row;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
  }
`
export const AccountContentWrapper = styled.div`
  width: 100%;
  }
`
export const AccountTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
`
export const AccountAmount = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0.2rem 0;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
  @media (max-width: 720px) {
    font-size: 2.2rem;
  }
  @media (max-width: 520px) {
    font-size: 2rem;
  }
`
export const AccountDescription = styled.p`
  font-size: 1rem;
  font-weight: normal;
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
`
export const ButtonWrapper = styled.div`
  @media (max-width: 720px) {
    width: 100%;
  }
`