# Portfolio Website

This is a personal portfolio website for Tharusha Dilshan Bandara, showcasing his skills, projects, and contact information.

## Live Demo

You can view the live demo here: [https://tharushadbandara.github.io](https://tharushadbandara.github.io)

## Description

This project is a responsive personal portfolio website built to showcase academic achievements, personal projects, technical skills, and provide a point of contact. It is designed to be easily maintainable and deployable.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool and development server.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Features

*   **Hero Section:** A welcoming introduction with a profile picture and key titles.
*   **About Section:** Detailed information about Tharusha, including education and biography.
*   **Projects Section:** A showcase of featured projects with descriptions, technologies used, and links.
*   **Skills Section:** A categorized list of technical and soft skills.
*   **Contact Section:** Contact information and links to social profiles.
*   **Responsive Design:** Adapts to different screen sizes (desktop, tablet, mobile).
*   **CV Download:** A direct link to download the CV.

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tharushadbandara/tharushadbandara.github.io.git
    cd tharushadbandara.github.io
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`.

## Build and Deploy

### Building the Project

To create a production build, run:

```bash
npm run build
```
This command will generate a `dist` folder with the optimized static assets. The `fix-html.cjs` script is also run as part of the build process to adjust HTML paths for GitHub Pages deployment.

### Deploying to GitHub Pages

This project uses `gh-pages` for deployment. To deploy the contents of the `dist` folder:

```bash
npm run deploy
```
This script typically handles pushing the build output to the `gh-pages` branch, which is then served by GitHub Pages.

## Project Structure

Here's a brief overview of the key files and folders:

*   **`index.html`**: The main HTML entry point for the application. Contains static content and Tailwind CSS configuration.
*   **`App.tsx`**: The main React root component that assembles all other components.
*   **`index.tsx`**: The React entry point that renders the `App` component into the DOM (typically, though not explicitly seen in file listing, it's standard for Vite React setups).
*   **`components/`**: Contains all the React components used to build the portfolio (e.g., `Navbar.tsx`, `Hero.tsx`, `ProjectCard.tsx`).
*   **`constants.tsx`**: Stores data like project details, skills, and personal information used throughout the application.
*   **`assets/`**: Contains static assets like images and global JavaScript files.
*   **`public/`**: Contains static assets that are copied directly to the build output (e.g., `.nojekyll` for GitHub Pages).
*   **`vite.config.ts`**: Configuration file for Vite, including plugins and build options.
*   **`package.json`**: Lists project dependencies, scripts, and metadata.
*   **`cv.pdf`**: Tharusha Dilshan Bandara's curriculum vitae.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/YourFeature`).
6.  Open a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE). (Consider adding a LICENSE file with the MIT License text if one doesn't exist).
