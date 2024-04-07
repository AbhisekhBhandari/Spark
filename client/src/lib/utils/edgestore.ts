"use client";
import { type EdgeStoreRouter } from "@/app/api/edgestore/[...edgestore]/route";
import { createEdgeStoreProvider } from "@edgestore/react";
const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>();
async function edgeImageUpload(imageFile: File) {
  const { edgestore } = useEdgeStore();
  try {
    if (!imageFile) throw new Error("no image file");
    const res = await edgestore.publicFiles.upload({
      file: imageFile,
    });
    return res;
  } catch (error) {
    throw error;
  }
}

export { EdgeStoreProvider, useEdgeStore,  };
