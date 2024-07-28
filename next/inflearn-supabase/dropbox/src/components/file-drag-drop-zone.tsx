"use client";

import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../actions/storageActions";
import { queryClient } from "../config/ReactQueryClientProvider";
import { Spinner } from "@material-tailwind/react";
import { useDropzone } from "react-dropzone";

const FileDragDropZone = () => {
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();

      acceptedFiles.forEach((file) => {
        formData.append(file.name, file);
      });

      await uploadImageMutation.mutate(formData);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className="w-full py-20 border-4 border-dotted border-indigo-700 flex flex-col items-center justify-center cursor-pointer"
    >
      <input {...getInputProps()} />

      {uploadImageMutation.isPending ? (
        <Spinner />
      ) : isDragActive ? (
        <p>파일을 놓아주세요</p>
      ) : (
        <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드 하세요.</p>
      )}
    </div>
  );
};

export default FileDragDropZone;
