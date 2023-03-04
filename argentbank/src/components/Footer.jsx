import styled from "styled-components"

export default function Footer() {
    return (
        <>
            <Wrapper>
                <Paragraph>Copyright 2020 Argent Bank</Paragraph>
            </Wrapper>
        </>
            )
}

const Wrapper = styled.footer`
display: flex;
    justify-content: center;
    border-top: 2px solid #ccc;
    padding: 2rem 0 1.5rem;`

const Paragraph = styled.p`
margin: 0;
padding: 0;
`