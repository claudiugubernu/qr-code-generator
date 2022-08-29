import Logo from "./Logo"
import styled from 'styled-components'

const Header = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Logo />
    </Header>
  )
}

export default HeaderComponent