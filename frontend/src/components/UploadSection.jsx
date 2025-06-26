// frontend/src/components/UploadSection.jsx
import React, { useCallback } from 'react'; // no useState
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import FileItem from './FileItem.jsx';
import useFileUpload from '../hooks/useFileUpload.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const UploadSectionContainer = styled.div`
    width: 40%;
    padding: 30px;
    background: #fff;
    border-right: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
`;

const StyledH2 = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.75rem;
`;

const FileInput = styled.input`
    display: none;
`;

const CustomFileInputLabel = styled.label`
    background-color: #29abe2;
    color: white;
    padding: 15px 25px;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 20px;
    display: inline-block;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1e88e5;
    }
`;

const FileList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
`;

const UploadButton = styled.button`
    background-color: #20c997;
    color: white;
    padding: 15px 25px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
        background-color: #15b37e;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

const DropzoneContainer = styled.div`
    border: 2px dashed #90a4ae;
    background-color: #f8f9fa;
    padding: 30px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
    width: 80%;
    border-radius: 10px;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover {
        background-color: #f9f9f9;
    }

    &.active {
        border-color: #008CBA;
        background-color: #e6f7ff;
    }
`;

const DropzoneText = styled.p`
  color: #546e7a;
  font-size: 1rem;
  margin: 0;
`;

function UploadSection({ selectedFiles, setSelectedFiles }) {
    const { uploading, uploadProgress, uploadError, uploadFiles: uploadHookFiles, ALLOWED_FILE_TYPES, MAX_FILE_SIZE } = useFileUpload();

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: acceptedFiles => {
            setSelectedFiles(existingFiles => [...existingFiles, ...acceptedFiles]);
        },
        accept: ALLOWED_FILE_TYPES.join(','),
        maxSize: MAX_FILE_SIZE,
    });

    const handleFileSelect = (event) => {
        setSelectedFiles(existingFiles => [...existingFiles, ...Array.from(event.target.files)]);
    };

    const handleUpload = useCallback(() => {
      uploadHookFiles(selectedFiles);
    }, [selectedFiles, uploadHookFiles]);

    const handleRemoveFile = (indexToRemove) => {
        setSelectedFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
    };

    return (
        <UploadSectionContainer>
            <StyledH2>Upload Resource Files</StyledH2>
            <DropzoneContainer {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <DropzoneText>Drop the files here ...</DropzoneText> :
                        <DropzoneText>
                          <FontAwesomeIcon icon={faCloudUploadAlt} style={{ marginRight: '8px' }} />
                          Drag 'n' drop some files here, or click to select files
                        </DropzoneText>
                }
            </DropzoneContainer>
            <CustomFileInputLabel htmlFor="fileInput">Choose Files</CustomFileInputLabel>
            <FileInput type="file" id="fileInput" multiple onChange={handleFileSelect} />

            <FileList>
                {selectedFiles.map((file, index) => (
                    <FileItem key={index} file={file} uploadProgress={uploadProgress} handleRemove={() => handleRemoveFile(index)}/>
                ))}
            </FileList>
            <UploadButton onClick={handleUpload} disabled={uploading || selectedFiles.length === 0}>
                {uploading ? 'Uploading...' : 'Upload'}
            </UploadButton>
            {uploadError && <div style={{ color: 'red', marginTop: '10px' }}>{uploadError}</div>}
        </UploadSectionContainer>
    );
}

export default UploadSection;