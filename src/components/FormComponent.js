import { useState } from "react";
import styled from "styled-components"
import { isValidUrl } from "../utils/isValidURL";

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
`;

const InputField = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-btn);
    padding: 5px;
    color: var(--color-secondary);

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: var(--color-secondary);
    }
`;

const InputSelect = styled.select`
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-btn);
    padding: 5px;
    color: var(--color-secondary);

    &:focus {
        outline: none;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    background-color: var(--color-btn);
    border: none;
    border-radius: 25px;
    color: var(--color-secondary);
    padding: 15px 25px;
    opacity: 1;
    transition: all 400ms ease-out;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;

const Error = styled.p`
    color: var(--color-error);
    font-size: 0.75em;
    margin-top: 10px;
`;


const FormComponent = ({ setQRCode, setFakeLoad }) => {
    const [ error, setError ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const QRUrl = e.target.qrUrl.value
        const QRSize = e.target.qrSize.value

        if(!isValidUrl(QRUrl)) {
            setError('This is not a valid URL')
            return
        }

        setQRCode(prev => ({
            ...prev,
            url: QRUrl,
            size: QRSize
        }))

        setTimeout(() => {
            setFakeLoad((prev) => !prev)
        }, 1000)
    }
  return (
    <Form onSubmit={handleSubmit}>
        <div>
            <InputField name='qrUrl' type='text' placeholder='Your URL' required/>
            {error.length > 1 && <Error>{error}</Error>}
        </div>
        <InputSelect name='qrSize'>
            <option value='200' defaultValue>200</option>
            <option value='300'>300</option>
            <option value='400'>400</option>
            <option value='500'>500</option>
            <option value='600'>600</option>
        </InputSelect>
        <SubmitButton type="submit">Generate</SubmitButton>
    </Form>
  )
}

export default FormComponent