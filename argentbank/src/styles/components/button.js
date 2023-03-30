import styled from 'styled-components'
import colors from '../bases/colors'

export const InputButton = styled.input`
  display: flex;
  justify-content: center;
  min-width: ${(props) => props.width};
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-color: ${colors.primary};
  background-color: ${colors.primary};
  color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 0.35rem;
  &:hover {
    border-color: ${colors.text};
    background-color: ${colors.text};
    color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  }
`