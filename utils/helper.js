// helper.js
// Function to fetch and return filtered JSON data
export async function getDataFromJSON(jsonURL) {
  try {
    const response = await fetch(jsonURL);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${jsonURL}`);
    }
    const jsonData = await response.json();
    
    // Filter data to include only those records with template 'magazine'
    const filteredData = jsonData.data.filter((item) => item.template === 'magazine');

    // Map through filtered data to structure it for the UI
    return filteredData.map((item) => ({
      imgSrc: item.image, // URL of the image
      title: item.title, // Title of the article
      description: item.description, // Description of the article
      link: item.path, // Path for the anchor tag
    }));
  } catch (error) {
    console.error('Error fetching JSON data:', error);
    return [];
  }
}
