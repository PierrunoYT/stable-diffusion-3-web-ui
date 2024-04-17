const apiKey = 'YOUR_API_KEY'; // Ersetzen Sie dies durch Ihren tatsächlichen API-Schlüssel

document.getElementById('generateForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const prompt = document.getElementById('prompt').value;
  const outputFormat = document.getElementById('outputFormat').value;
  const aspectRatio = document.getElementById('aspectRatio').value;

  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("output_format", outputFormat);
  formData.append("aspect_ratio", aspectRatio);

  try {
    const response = await axios.post(
      'https://api.stability.ai/v2beta/stable-image/generate/sd3',
      formData,
      {
        responseType: 'blob',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'image/*'
        }
      }
    );

    const imageUrl = URL.createObjectURL(response.data);
    document.getElementById('output').innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('output').innerHTML = 'An error occurred while generating the image.';
  }
});
