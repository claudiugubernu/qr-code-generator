import { useState } from "react";
import styled from "styled-components";
import FormComponent from "./FormComponent";
import QRComponent from "./QRComponent";
import LoadingScreenComponent from "./LoadingScreenComponent";

const Wrapper = styled.div`
    margin-top: 50px;
    z-index: 5;
`;

const QRGenerator = () => {
    const [ QRCode, setQRCode ] = useState({})
    const [ fakeLoad, setFakeLoad ] = useState(true)

    return (
    <Wrapper>
        <FormComponent setQRCode={setQRCode} setFakeLoad={setFakeLoad}/>
        { fakeLoad && <LoadingScreenComponent /> }
        <QRComponent QRCode={QRCode} />
    </Wrapper>
    )
}

export default QRGenerator