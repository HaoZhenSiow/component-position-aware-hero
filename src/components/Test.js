import styled from 'styled-components'

const TestStyled = styled.div`
  background-color: red;
`

export default function Test(props) {
  return (
    <TestStyled className={props.className}>
      <h1>Hello World</h1>
    </TestStyled>
  );
}