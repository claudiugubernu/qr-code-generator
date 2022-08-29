import Logo from "./Logo"
import styled from 'styled-components'

const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Logo />
    </Header>
  )
}

export default HeaderComponent