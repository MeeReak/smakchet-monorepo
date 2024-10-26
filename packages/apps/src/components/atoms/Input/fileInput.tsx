"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";

interface FileInputProps {
  onChange: (files: FileList) => void;
  value?: any; // URL string representing the initial file
}

const FileInput: React.FC<FileInputProps> = ({ onChange, value }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selected = files[0];
      setPreviewUrl(null);
      setSelectedFile(selected);
      onChange(files);
    }
  };

  useEffect(() => {
    if (value) {
      setPreviewUrl(value);
    }
  }, []);

  console.log("previewUrl" , previewUrl);
  console.log("selectedFile" , selectedFile);

  return (
    <div
      className={`flex items-center justify-center w-full h-[284px] rounded-[10px] ${
        selectedFile || previewUrl ? "bg-blue-500" : "bg-gray-100"
      }`}
    >
      {selectedFile || previewUrl ? (
        <div className="relative w-full h-[284px] rounded-[10px]">
          <Image
            src={previewUrl || URL.createObjectURL(selectedFile!)}
            alt="Selected File Preview"
            width={300}
            height={284}
            className="h-full w-full object-cover rounded-[10px]"
          />
          <label
            htmlFor="fileInput"
            className="absolute gap-x-2 bottom-0 right-0 mb-4 mr-4 cursor-pointer 
            bg-white rounded-md font-medium shadow-sm border border-[#B3B3B380] hover:border-gray-400 px-4 py-2 flex items-center text-black text-opacity-50"
            style={{ zIndex: 10 }}
          >
            <Image src={"assets/icons/image-outline.svg"} alt="image icon" height={24} width={24} />
            Upload Your Image
          </label>
          <input
            id="fileInput"
            type="file"
            className="sr-only"
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-y-[27px]">
          <Image src={"assets/icons/image-outline.svg"} alt="image icon" height={70} width={70} />
          <label
            htmlFor="fileInput"
            className="relative gap-x-5 cursor-pointer bg-white rounded-md font-medium shadow-sm border 
            border-[#B3B3B380] hover:border-gray-400 px-4 py-2 inline-flex items-center text-black text-opacity-50"
          >
            <Image src={"assets/icons/image-outline.svg"} alt="image icon" height={24} width={24} />
            Upload Your Image
          </label>
          <input
            id="fileInput"
            type="file"
            className="sr-only"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default FileInput;
