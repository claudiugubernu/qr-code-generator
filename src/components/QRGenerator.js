import { useState } from "react";
import styled from "styled-components";
import FormComponent from "./FormComponent";

const Wrapper = styled.div`
    margin-top: 50px;
    z-index: 5;
`;

const QRGenerator = () => {
    const [ QRCode, setQrCode ] = useState({
        url: "",
        size: ""
    })

    return (
    <Wrapper>
        <FormComponent />
    </Wrapper>
    )
}

export default QRGenerator