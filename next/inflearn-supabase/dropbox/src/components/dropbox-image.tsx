"use client";

import { IconButton, Spinner } from "@material-tailwind/react";
import { getImageUrl } from "../utils/supabase/storage";
import { useMutation } from "@tanstack/react-query";
import { deleteFile } from "../actions/storageActions";
import { queryClient } from "../config/ReactQueryClientProvider";

const DropboxImage = ({ image }) => {
  const deleteFileMutation = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  return (
    <div className="relative flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      {/* Image */}
      <div>
        <img
          className="w-full aspect-square rounded-2xl"
          src={getImageUrl(image.name)}
        />
      </div>

      {/* File Name */}
      <div>{image.name}</div>

      {/* Delete */}
      <div className="absolute top-4 right-4">
        <IconButton
          onClick={() => {
            deleteFileMutation.mutate(image.name);
          }}
          color="red"
        >
          {deleteFileMutation.isPending ? (
            <Spinner />
          ) : (
            <i className="fas fa-trash" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default DropboxImage;
