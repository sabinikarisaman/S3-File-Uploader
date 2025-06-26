// frontend/src/hooks/useInputOutput.jsx
import { useState } from 'react';

const useInputOutput = () => {
    const [inputData, setInputData] = useState('');
    const [outputData, setOutputData] = useState('');

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    const handleSubmit = () => {
        setOutputData('');  // Always empty
    };

    return {
        inputData,
        outputData,
        handleInputChange,
        handleSubmit,
    };
};

export default useInputOutput;