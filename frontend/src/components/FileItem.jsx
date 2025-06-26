import React from 'react';
import styled from 'styled-components';
import CircularProgress from './CircularProgress.jsx';
import { formatBytes } from '../utils';  // Import utility function
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const FileItemCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    border: 1px solid #ddd;
    margin-bottom: 8px;
    border-radius: 6px;
    background: #f9f9f9;
`;

const FileInfo = styled.div`
    display: flex;
    align-items: center;
`;

const FileName = styled.span`
    font-size: 1rem;
    color: #333;
    margin-right: 12px;
`;

const FileSize = styled.span`
    font-size: 0.9rem;
    color: #666;
`;

const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
`;

const RemoveButton = styled.button`
    background: none;
    border: none;
    color: #d32f2f;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    padding: 6px;
    border-radius: 4px;

    &:hover {
        color: #b71c1c;
        background-color: rgba(211, 47, 47, 0.08);
    }
`;

const FileItem = ({ file, uploadProgress, handleRemove }) => {
    return (
        <FileItemCard>
            <FileInfo>
                <FileName>{file.name}</FileName>
                <FileSize>({formatBytes(file.size)})</FileSize>
            </FileInfo>
            <ProgressContainer>
                <CircularProgress percentage={uploadProgress[file.name] || 0} />
                <RemoveButton onClick={handleRemove}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </RemoveButton>
            </ProgressContainer>
        </FileItemCard>
    );
};

export default FileItem;