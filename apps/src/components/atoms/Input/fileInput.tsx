"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

interface FileInputProps {
  onChange: (files: FileList) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selected = files[0];
      setSelectedFile(selected);

      // Pass the FileList to the parent component
      onChange(files);
    }
  };

  return (
    <div
      className={`flex items-center justify-center w-full h-[330px] rounded-[10px] ${
        selectedFile ? "bg-blue-500" : "bg-gray-100"
      }`}
    >
      {/* <label
        htmlFor="fileInput"
        className="relative cursor-pointer bg-white rounded-md font-medium shadow-sm border border-gray-300 hover:border-gray-400 px-4 py-2 inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 opacity-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        Upload Your Image
        <input
          id="fileInput"
          type="file"
          className="sr-only"
          onChange={handleFileChange}
        />
      </label> */}
      {/* {selectedFile && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected File Preview"
            className="w-full"
          />
        </div>
      )} */}
      {selectedFile ? (
        <div className="relative w-full h-[330px]">
          <Image
            src={URL.createObjectURL(selectedFile)}
            alt="Selected File Preview"
            width={300}
            height={330}
            className="h-full w-full object-cover"
          />
          <label
            htmlFor="fileInput"
            className="absolute bottom-0 right-0 mb-4 mr-4 cursor-pointer bg-white bg-opacity-80 rounded-md font-medium shadow-sm border border-[#B3B3B380] hover:border-gray-400 px-4 py-2 flex items-center"
            style={{ zIndex: 10 }}
          >
           <Image src={"assets/icons/image-outline.svg"} alt="image icon" height={24} width={24}/>
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
          <Image src={"assets/icons/image-outline.svg"} alt="image icon" height={70} width={70}/>
        <label
          htmlFor="fileInput"
          className="relative gap-x-5 cursor-pointer bg-white rounded-md font-medium shadow-sm border border-[#B3B3B380] hover:border-gray-400 px-4 py-2 inline-flex items-center"
        >
          <Image src={"assets/icons/image-outline.svg"} alt="image icon" height={24} width={24}/>
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
    // <div className="flex items-center justify-center w-full">
    //   <label
    //     htmlFor="dropzone-file"
    //     className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    //   >
    //     <div className="flex flex-col items-center justify-center pt-5 pb-6">
    //       <svg
    //         className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 20 16"
    //       >
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
    //         />
    //       </svg>
    //       <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
    //         <span className="font-semibold">Click to upload</span> or drag and
    //         drop
    //       </p>
    //       <p className="text-xs text-gray-500 dark:text-gray-400">
    //         SVG, PNG, JPG or GIF (MAX. 800x400px)
    //       </p>
    //     </div>
    //     <input
    //       id="dropzone-file"
    //       type="file"
    //       className="hidden"
    //       onChange={handleFileChange}
    //     />
    //   </label>
    // </div>
  );
};

export default FileInput;
