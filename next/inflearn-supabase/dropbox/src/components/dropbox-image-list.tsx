import DropboxImage from "./dropbox-image";
import { useQuery } from "@tanstack/react-query";
import { searchFiles } from "../actions/storageActions";
import { Spinner } from "@material-tailwind/react";

const DropboxImageList = ({ searchInput }) => {
  const searchQuery = useQuery({
    queryKey: ["images", searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  return (
    <>
      {searchQuery.isPending ? (
        <Spinner className="w-full flex justify-self-center items-center" />
      ) : (
        <section className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-2">
          {searchQuery.data &&
            searchQuery.data.map((image) => (
              <DropboxImage key={image.id} image={image} />
            ))}
        </section>
      )}
    </>
  );
};

export default DropboxImageList;
