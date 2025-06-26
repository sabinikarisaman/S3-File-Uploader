import React from 'react';
import styled from 'styled-components';
import useInputOutput from '../hooks/useInputOutput.jsx';

const InputOutputSectionContainer = styled.div`
    width: 60%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    height: 100vh;
    box-sizing: border-box;
`;

const StyledH2 = styled.h2`
    color: #333;
    margin-bottom: 25px;
    font-size: 1.75rem;
    text-align: left;
`;

const InputField = styled.input`
    padding: 12px 15px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 1rem;
    margin-bottom: 25px;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.2s ease;

    &:focus {
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
`;

const SubmitButton = styled.button`
    background-color: #e53935;
    color: white;
    padding: 15px 25px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d32f2f;
    }

    &:active {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
`;

const OutputSection = styled.div`
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 6px;
    padding: 20px;
    margin-top: 25px;
    font-size: 1rem;
    word-wrap: break-word;
    min-height: 100px;
    color: #495057;
`;

const InputOutputSection = () => {
    const { inputData, outputData, handleInputChange, handleSubmit } = useInputOutput();

    return (
        <InputOutputSectionContainer>
            <StyledH2>Enter the Query</StyledH2>
            <InputField
                type="text"
                placeholder="Enter something..."
                value={inputData}
                onChange={handleInputChange}
            />
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>

            <StyledH2>Output</StyledH2>
            <OutputSection>{outputData}</OutputSection>
        </InputOutputSectionContainer>
    );
};

export default InputOutputSection;