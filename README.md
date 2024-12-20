
# img-generator

This project is an image generation application built with [Next.js](https://nextjs.org/). Users can upload images and generate the necessary img tags with AI-generated alt text.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [License](#license)

## Introduction

This project aims to allow users to upload images and generate img tags that include alt text generated by AI.

## Features

- Image upload functionality
- Configuration options for img tags
- AI-generated alt text
- Copying of generated img tags

## Installation

To run this project locally, follow these steps:

1. Clone the repository.

   ```bash
   git clone https://github.com/harumiWeb/img-generator.git
   ```

2. Navigate to the directory.

   ```bash
   cd img-generator
   ```

3. Install the dependencies.

   ```bash
   npm install
   ```

## Usage

To start the development server, run the following command:

```bash
npm run dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application.

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```
NEXT_PUBLIC_BASE_URL=<your_home_url>
GEMINI_API_KEY=<your_gemini_api_key>
NODE_ENV=development  # Use 'production' for the production environment
```

Replace `<your_home_url>` with your application's home URL and `<your_gemini_api_key>` with your Gemini API key.

## Development

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch.

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes.

   ```bash
   git commit -m "Add some feature"
   ```

4. Push to the branch.

   ```bash
   git push origin feature/YourFeature
   ```

5. Create a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.