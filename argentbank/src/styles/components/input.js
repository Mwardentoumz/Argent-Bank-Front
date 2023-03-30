import styled from 'styled-components'
import colors from '../bases/colors'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
  margin-bottom: 1rem;
`
export const InputLabel = styled.label`
  font-weight: bold;
  color: ${({ theme }) =>
    theme === 'light' ? `${colors.text}` : 'white'};
`
export const InputStyle = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  margin-right: 0.5rem;
  &:hover {
    border: 2px solid ${colors.text};
    border: ${({ theme }) =>
    theme === 'light' ? `2px solid ${colors.text}` : '2px solid white'};
    border-radius: .2rem;
  }
`