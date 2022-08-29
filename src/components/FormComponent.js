import styled from "styled-components"

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const InputField = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-white);
    padding: 5px;
    color: var(--color-white);

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

const InputSelect = styled.select`
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-white);
    padding: 5px;
    color: var(--color-white);

    &:focus {
        outline: none;
    }
`;

const FormComponent = () => {
  return (
    <Form>
        <InputField type='text' placeholder='https://site-url' required/>
        <InputSelect>
            <option>300</option>
            <option>400</option>
            <option>500</option>
            <option>600</option>
            <option>700</option>
        </InputSelect>
        <SubmitButton>Generate</SubmitButton>
    </Form>
  )
}

export default FormComponent