import styled from 'styled-components'
import colors from '../bases/colors'

export const UserHeaderMain = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`
export const Title = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? `${colors.text}` : 'white')};
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.1rem;
`
export const EditNameWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.7rem;
  padding-top: 1rem;
  width: 100%;
`
export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
export const InputStyle = styled.input`
  padding: 0.5rem 0.8rem;
  color: ${colors.text};
  border-radius: 0.3rem;
  border: ${({ theme }) => (theme === 'light' ? '3px solid #bfc8d3' : `3px solid ${colors.backgroundDark}`)};
  height: 1.5rem;
  margin: 0 0.4rem;
  &:hover {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 720px) {
    width: 12rem;
  }
  @media (max-width: 520px) {
    margin: 0.6rem 0 0 0;
    width: 100%;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const InputButtonsStyle = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.8rem;
  color: ${colors.primary};
  font-size: 1.1rem;
  font-weight: 700;
  border: 2px solid ${colors.primary};
  border-radius: 0.3rem;
  width: 7.5rem;
  margin: 0 0.4rem;
  cursor: pointer;
  &:hover {
    border-color: ${colors.text};
    background-color: ${colors.text};
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
`
export const SectionAccount = styled.section`
  padding: 0 1.25rem;
  @media (max-width: 520px) {
    padding: 0;
  }
`