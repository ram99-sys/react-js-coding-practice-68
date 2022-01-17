import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0px;
}`

export const CowinContainer = styled.div`
  min-height: 100vh;
  background-color: #161625;
  padding: 100px;
`

export const Icon = styled.div`
  color: #cbd5e1;
  font-size: 60px;
  margin-right: 10px;
`
export const Heading = styled.h1`
  color: #2cc6c6;
  margin-top: -10px;
`
export const IconHeading = styled.div`
  display: flex;
  align-items: center;
`

export const MainHeading = styled(Heading)`
  color: #cbd5e1;
  margin-top: 5px;
  margin-bottom: 20px;
`
