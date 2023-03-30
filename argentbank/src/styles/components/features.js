import styled from 'styled-components'

export const FeaturesStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
    padding-bottom: 2.5rem;
  }
`