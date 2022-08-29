import styled from "styled-components"
import InfoComponent from "./InfoComponent";
import QRGenerator from "./QRGenerator";

const Main = styled.main`
  position: relative;
  margin-top: 50px;
`;

const MainImage = styled.div`
  content: '';
  background: url('../background.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  bottom: -20%;
  z-index: 0;
`;

const MainComponent = () => {
  return (
    <Main className="site-margins">
      <InfoComponent />
      <QRGenerator />
      <MainImage />
    </Main>
  )
}

export default MainComponent