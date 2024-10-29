# Welcome to iExplore Frontend Project!

## Getting Started

Open these links with your browser to see the result:
- [iExplore landing page](https://www.iexploreonline.com/)
- [iExplore user](https://www.iexploreonline.com/user)
- [iExplore admin](https://www.iexploreonline.com/admin)

<!-- **Description**: This project is a [brief description of what the project does]. It [details on key features and the purpose it serves]. The main goal of the project is to [state the main goal or problem it solves]. -->

**Tech Stack**:

- **Frontend**: React, Next.js, Tailwind CSS, ShadCN
- **Others**: Zustand, AOS, React-Hook-form, Zod

## Installation Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/repository-name.git
   ```
2. Navigate into the project directory:
   ```bash
   cd repository-name
   ```
3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

<!-- ### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_API_KEY=your_api_key
``` -->

## Project Structure

The project follows a standard Next.js structure:

```
root
├── public                # Public assets (video, icon)
├── src
│   ├── apps              # NextJS routes
│   ├── assets            # Assets (img, svg)
│   ├── auth              # Next auth setup
│   ├── components        # Reusable React components
│   ├── lib               # Next.js middleware
│   ├── store             # Zustand setup
│   ├── types             # Typescript schemas
│   ├── utils             # Utility functions and constant
│   └── ...               # Any other folders
├── tailwind.config.ts    # Tailwind setup
├── tsconfig.json         # Typescript setup
└── package.json          # Project metadata and scripts
```

<!-- ### Important Components

- **`/src/components/Carousel.js`**: Implements the autoplay carousel feature.
- **`/src/pages/index.js`**: The main landing page of the project. -->

## Usage Instructions

### Running the Project

To start the development server, run:

```bash
npm run dev
```

This will start the server on `http://localhost:3000`.

### Building for Production

To build the project for production, use:

```bash
npm run build
```

This will output the production-ready files to the `.next` directory.

### Available Scripts

- `npm run dev`: Runs the project in development mode.
- `npm run build`: Builds the project for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase for errors.

## Features & Functionality

### Main Features

- **Animation**: Animation done with AOS on the landing pages.
- **Responsive Design**: The project is fully responsive, using Tailwind CSS for styling.
<!-- - [Add more features] -->

<!-- ### Known Issues

- **Issue 1**: [Description of any known issues or bugs]
- **Issue 2**: [Description of any known issues or bugs] -->

<!-- ### Future Enhancements

- **Feature 1**: [Suggestions for future improvements]
- **Feature 2**: [Suggestions for future improvements] -->

## Testing

### Running Tests

To run the test suite, use:

```bash
npm test
```

<!-- ### Test Coverage

- **Component Tests**: [Brief description of what is covered by tests, e.g., `Carousel.js` is tested for autoplay functionality]
- **End-to-End Tests**: [Description of any E2E tests, if applicable] -->

## Deployment

### Deployment Instructions

The project is deployed on [e.g., Vercel]. To deploy the project:

1. Create an account on [Vercel](https://vercel.com/).
2. Link your GitHub repository to Vercel.
3. Click on **Deploy**.

### CI/CD

The project uses [e.g., GitHub Actions] for Continuous Integration/Continuous Deployment. The workflow is configured to:

- Run tests on every push to the `main` branch.
- Deploy the project to Vercel on successful builds.

<!-- ## Contributing Guidelines

### Contributions

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request. -->

### Code Style

Please ensure your code follows the project’s style guidelines:

- Use [e.g., Prettier] for formatting.
- Follow the established folder structure and naming conventions.

## Contact Information

If you have any questions or need further assistance, feel free to reach out:

- **Name**: [Your Name]
- **Email**: [Your Email]
- **LinkedIn/GitHub**: [Your LinkedIn/GitHub Profile]

<!-- ### Transition Details

The project handover will take place on [date]. Please contact [person who will take over, if known] for further information. -->

<!-- ## Appendix

### References

- [Link to ShadCN documentation](https://ui.shadcn.com/docs/installation/next)
- [Link to NextJS documentation](https://nextjs.org/docs/)
- [Link to NextJS documentation](https://nextjs.org/docs/)
- [Link to AOS documentation](https://github.com/michalsnik/aos/tree/v2)

### Acknowledgements

- Special thanks to [any contributors, libraries, or resources that helped with the project]. -->
