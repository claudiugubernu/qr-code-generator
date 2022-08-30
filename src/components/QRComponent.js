import styled from "styled-components";
import { QRCodeCanvas } from 'qrcode.react';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const QRComponent = ({ QRCode }) => {

  return (
    <Wrapper>
        <QRCodeCanvas value={QRCode.url} size={QRCode.size}/>
    </Wrapper>
  )
}

export default QRComponent