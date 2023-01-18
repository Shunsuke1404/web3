export async function fetchImages(breed) {
    const response = await fetch(
      `https://www.amiiboapi.com/api/${breed}/images/random/12`
    );
    const data = await response.json();
    return data.message;
  }