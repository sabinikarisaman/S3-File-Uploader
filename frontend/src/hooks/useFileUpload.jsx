// frontend/src/hooks/useFileUpload.jsx
import { useState, useCallback } from 'react';
import apiClient from '../apiClient';
import axios from 'axios';
import { toast } from 'react-toastify';

const ALLOWED_FILE_TYPES = ['application/pdf', 'text/csv', 'application/xml', 'image/jpeg', 'image/png'];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const useFileUpload = () => {
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState({});
    const [uploadError, setUploadError] = useState(null);

    const uploadFiles = useCallback(async (files) => {
        if (!files || files.length === 0) {
            setUploadError('Please select files to upload.');
            toast.error('Please select files to upload.');
            return;
        }

        // Validation
        for (const file of files) {
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                setUploadError(`Invalid file type: ${file.name} (Allowed types: PDF, CSV, XML, JPEG, PNG)`);
                toast.error(`Invalid file type: ${file.name} (Allowed types: PDF, CSV, XML, JPEG, PNG)`);
                return;
            }
            if (file.size > MAX_FILE_SIZE) {
                setUploadError(`File size exceeds limit: ${file.name} (Max ${MAX_FILE_SIZE / (1024 * 1024)} MB)`);
                toast.error(`File size exceeds limit: ${file.name} (Max ${MAX_FILE_SIZE / (1024 * 1024)} MB)`);
                return;
            }
        }

        setUploading(true);
        setUploadError(null);
        const newUploadProgress = {};
        files.forEach(file => {
            newUploadProgress[file.name] = 0;
        });
        setUploadProgress(newUploadProgress);

        try {
            await Promise.all(
                files.map(async (file) => {
                    const contentType = file.type;
                    const filename = file.name;

                    // 1. Get Pre-Signed URL from Backend
                    const response = await apiClient.post('/api/generate-upload-url', {
                        filename: filename,
                        contentType: contentType,
                    });

                    const { uploadUrl } = response.data;

                    // 2. Upload Directly to S3 using the Pre-Signed URL
                    await axios.put(uploadUrl, file, {
                        headers: {
                            'Content-Type': contentType,
                        },
                        onUploadProgress: (progressEvent) => {
                            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                            setUploadProgress(prevProgress => ({ ...prevProgress, [file.name]: percentCompleted }));
                        },
                    });

                    console.log(`File "${filename}" uploaded successfully to S3`);
                    toast.success(`File "${filename}" uploaded successfully!`);
                })
            );

            toast.success('All files uploaded successfully!');
        } catch (error) {
            console.error('Upload error:', error);
            setUploadError(`Upload failed: ${error.message}`);
            toast.error(`Upload failed: ${error.message}`);
        } finally {
            setUploading(false);
            setUploadProgress({});
        }
    }, []); // useCallback dependency array

    return {
        uploading,
        uploadProgress,
        uploadError,
        uploadFiles,
        ALLOWED_FILE_TYPES,  // Expose for use in the UI
        MAX_FILE_SIZE,
    };
};

export default useFileUpload;