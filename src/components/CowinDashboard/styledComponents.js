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
  font-size: 30px;
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
export const LoaderContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const FailureContainer = styled.div`
  text-align: center;
`

export const FailureImage = styled.img`
  height: 400px;
  width: 600px;
`

export const LogoImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`
