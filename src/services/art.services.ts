

export async function fetchArtImage(): Promise<string | null> {
    const url = "https://api.artic.edu/api/v1/artworks?page=1&limit=100";
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error Art Institute: ${res.status}`);
  
      const data = await res.json();
      const artworks = data.data

      if (!artworks || artworks.length == 0) return null;
      
      const randomArtwork = artworks[Math.floor(Math.random() * artworks.length)];
      const imageId = randomArtwork.image_id;

      if (!imageId) return null;

      const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
      return imageUrl;
  
    } catch (error) {
      console.error("Error al obtener imagen de art Instirute:", error);
      return null;
    }
  }
  