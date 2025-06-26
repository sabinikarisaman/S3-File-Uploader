import React, { useState } from 'react';
import styled from 'styled-components';
import UploadSection from './components/UploadSection.jsx';
import InputOutputSection from './components/InputOutputSection.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styled Components
const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f4f4f8;
  font-family: 'Roboto', sans-serif;
`;

function App() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    return (
        <AppContainer>
            <UploadSection selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
            <InputOutputSection />
            <ToastContainer position="top-right" autoClose={5000} />
        </AppContainer>
    );
}

export default App;