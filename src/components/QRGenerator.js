import { useState } from "react";
import styled from "styled-components";
import FormComponent from "./FormComponent";
import QRComponent from "./QRComponent";
import LoadingScreenComponent from "./LoadingScreenComponent";

const Wrapper = styled.div`
    margin-top: 50px;
    z-index: 5;
    display: flex;
    gap: 50px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const QRGenerator = () => {
    const [ QRCode, setQRCode ] = useState({})
    const [ fakeLoad, setFakeLoad ] = useState(false)

    return (
    <Wrapper>
        <FormComponent setQRCode={setQRCode} setFakeLoad={setFakeLoad}/>
        { fakeLoad && <LoadingScreenComponent /> }
        { !fakeLoad && <QRComponent QRCode={QRCode} /> }  
    </Wrapper>
    )
}

export default QRGenerator