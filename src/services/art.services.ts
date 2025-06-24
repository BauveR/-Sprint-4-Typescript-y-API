import { API_CONFIG } from "./apiConfig";

export async function fetchArtImage(): Promise<string | null> {
    const url = API_CONFIG.getArtworksUrl();

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error Art Institute: ${res.status}`);
  
      const data = await res.json();
      const artworks = data.data

      if (!artworks || artworks.length == 0) return null;
      
      const randomArtwork = artworks[Math.floor(Math.random() * artworks.length)];
      const imageId = randomArtwork.image_id;

      if (!imageId) return null;

      return API_CONFIG.getImageUrl(imageId);
  
    } catch (error) {
      console.error("Error al obtener imagen de art Instirute:", error);
      return null;
    }
  }
  