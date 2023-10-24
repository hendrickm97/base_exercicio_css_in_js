import styled from 'styled-components'

const EstiloCabecalho = styled.header`
  background-color: ${(props) => props.theme.corSecundaria}>;
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`
export default EstiloCabecalho