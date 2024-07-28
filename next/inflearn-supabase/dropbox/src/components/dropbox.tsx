"use client";

import Logo from "./logo";
import Search from "./search";
import { useState } from "react";
import FileDragDropZone from "./file-drag-drop-zone";
import DropboxImageList from "./dropbox-image-list";

const Dropbox = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className="w-full p-4 flex flex-col gap-4">
      {/* LOGO */}
      <Logo />

      {/* Search */}
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      {/* Drag & Drop */}
      <FileDragDropZone />

      {/* File */}
      <DropboxImageList searchInput={searchInput} />
    </main>
  );
};

export default Dropbox;
