"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic

// Dynamically import ReactQuill to ensure it's only loaded in the browser
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";

interface TextEditorProp {
  onchange?: (str: string) => void;
  values?:string;
}

const TextEditor: React.FC<TextEditorProp> = ({ onchange , values }) => {
  const [content, setContent] = useState("");
  const [isBrowser, setIsBrowser] = useState(false);

  const handleChange = (content: string) => {
    setContent(content);
    if (onchange) {
      onchange(content);
    }
  };

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined"); // Check for window instead of document
    if (values !== undefined) {
      setContent(values);
    }
  }, []);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"], // toggled buttons
      ["link"], // Fix the value of the link property
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };
  return (
    <>
      {isBrowser && (
        <ReactQuill
          modules={modules}
          className="my-5"
          theme="snow"
          value={content}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default TextEditor;
