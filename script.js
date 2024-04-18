const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

document.getElementById('generateForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const prompt = document.getElementById('prompt').value;
  const aspectRatio = document.getElementById('aspectRatio').value;
  const negativePrompt = document.getElementById('negativePrompt').value;
  const seed = document.getElementById('seed').value;
  const stylePreset = document.getElementById('stylePreset').value;
  const outputFormat = document.getElementById('outputFormat').value;

  const formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("aspect_ratio", aspectRatio);
  formData.append("negative_prompt", negativePrompt);
  formData.append("seed", seed);
  formData.append("style_preset", stylePreset);
  formData.append("output_format", outputFormat);

  try {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('error').classList.add('hidden');
    document.getElementById('output').innerHTML = '';

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
    document.getElementById('output').innerHTML = `
      <img src="${imageUrl}" alt="Generated Image" class="preview-image">
      <a href="${imageUrl}" download="generated-image.${outputFormat}">Download Image</a>
    `;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('error').textContent = 'An error occurred while generating the image. Please try again.';
    document.getElementById('error').classList.remove('hidden');
  } finally {
    document.getElementById('loading').classList.add('hidden');
  }
});
