# Stability AI Image Generator

This is a web-based user interface for generating images using the Stability AI API. It allows users to enter a text prompt, select an output format and aspect ratio, and generate an image based on the provided parameters.

## Features

- Generate images based on text prompts
- Select output format (JPEG or PNG)
- Choose aspect ratio for the generated image
- Display the generated image in the web interface

## Prerequisites

To run this project, you need:

- A web browser (Chrome, Firefox, Safari, etc.)
- An API key from Stability AI

## Getting Started

1. Clone the repository or download the source code files.

2. Open the `script.js` file in a text editor and replace `'YOUR_API_KEY'` with your actual Stability AI API key:

```javascript
const apiKey = 'YOUR_API_KEY';
```

3. Open the `index.html` file in a web browser.

4. Fill in the form with the following details:
   - Prompt: Enter a text description for the image you want to generate.
   - Output Format: Select the desired output format (JPEG or PNG).
   - Aspect Ratio: Choose the aspect ratio for the generated image.

5. Click the "Generate Image" button to send the request to the Stability AI API.

6. The generated image will be displayed in the web interface.

## File Structure

- `index.html`: The main HTML file that contains the structure of the web interface.
- `styles.css`: The CSS file that defines the styles for the web interface.
- `script.js`: The JavaScript file that handles the form submission and communicates with the Stability AI API.

## Dependencies

This project uses the following dependencies:

- [Axios](https://github.com/axios/axios): A promise-based HTTP client for making API requests.

## API Reference

This project uses the Stability AI API to generate images. Specifically, it sends requests to the `/v2beta/stable-image/generate/sd3` endpoint. For more information about the API and its usage, please refer to the [Stability AI API documentation](https://platform.stability.ai/docs/api-reference).

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Stability AI](https://stability.ai/) for providing the image generation API.
- [Axios](https://github.com/axios/axios) for simplifying HTTP requests.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Contact

If you have any questions or need further assistance, please contact [pierrebruno@hotmail.ch](mailto:pierrebruno@hotmail.ch).

---
