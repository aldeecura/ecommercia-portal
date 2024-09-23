import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleUpload = () => {
    if (files.length > 0) {
      // In a real scenario, you'd send these files to a server
      // Here, we're just simulating the upload process
      setUploadedFiles(files);
      toast.success(`${files.length} file(s) uploaded successfully!`);
    } else {
      toast.error("Please select files first");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-8">
        <h1 className="text-2xl font-bold mb-4">Upload WordPress Files</h1>
        <Input 
          type="file" 
          multiple
          onChange={handleFileChange} 
          className="mb-4"
        />
        <Button onClick={handleUpload} className="w-full">
          Upload
        </Button>
      </div>

      {uploadedFiles.length > 0 && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Uploaded Files</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="text-sm">
                  {file.name} ({file.type || 'unknown type'})
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Upload;
