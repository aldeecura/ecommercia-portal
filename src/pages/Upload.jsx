import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith('.wpress')) {
      setFile(selectedFile);
    } else {
      toast.error("Please select a valid .wpress file");
      e.target.value = null;
    }
  };

  const handleUpload = () => {
    if (file) {
      // Here you would typically send the file to your server
      // For now, we'll just show a success message
      toast.success(`File ${file.name} uploaded successfully!`);
    } else {
      toast.error("Please select a file first");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Upload .wpress File</h1>
        <Input 
          type="file" 
          accept=".wpress" 
          onChange={handleFileChange} 
          className="mb-4"
        />
        <Button onClick={handleUpload} className="w-full">
          Upload
        </Button>
      </div>
    </div>
  );
};

export default Upload;