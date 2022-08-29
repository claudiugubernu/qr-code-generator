import LogoPNG from '../logo.png'
import styled from 'styled-components'

const LogoImg = styled.img`
  display: block;
`;

const Logo = () => {
  return (
    <>
        <LogoImg src={LogoPNG} alt='QR Code Generator Logo' />
    </>
  )
}

export default Logo