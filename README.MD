# EIS Shared Types

Shared types and enums for the Estate Information System (EIS) project. This package provides centralized type definitions and enumerations used across both frontend and backend parts of the EIS application, ensuring consistency and maintainability.

---

## Features

- **Centralized Enums**: All reusable enumerations for consistent usage across multiple services.
- **Type Definitions**: Strongly typed interfaces and types to simplify development.
- **Modular Structure**: Organized type hierarchy for better scalability.
- **Compatible with TypeScript**: Full support for TypeScript projects.

---

## Installation

Install the package via npm:

```bash
npm install @estate-information-system/shared-types
```

or via yarn:

```bash
yarn add @estate-information-system/shared-types
```

---

## Usage

Import the required types and enums in your project:

### TypeScript Example

```typescript
import { CategoryEnum } from "@estate-information-system/shared-types";

const category: CategoryEnum = "apartment";
console.log(category);
```

---

## Scripts

This project includes several helpful npm scripts:

- **Build**:

  ```bash
  npm run build
  ```

  Compiles TypeScript to JavaScript and generates type declarations.

- **Lint**:

  ```bash
  npm run lint
  ```

  Runs ESLint to analyze the code for potential issues.

- **Format**:

  ```bash
  npm run format
  ```

  Formats the codebase using Prettier.

- **Release**:

  ```bash
  npm run release
  ```

  Automates the version bump, changelog generation, and publishing.

- **Publish**:
  ```bash
  npm run publish
  ```
  Publishes the package to the npm registry.

---

## Project Structure

```
.
├── src
│   └── types
│       └── enums
│       └── etc.
├── dist
├── .env
├── .eslint.config.js
├── .prettierrc
├── tsconfig.json
├── package.json
├── release-it.config.js
└── README.md
```

- **`src`**: Contains source TypeScript files.
- **`dist`**: Compiled output directory (generated after build).

---

## License

This project is proprietary and licensed under a custom license. The code is restricted for use only in projects owned or explicitly authorized by Vladislav Tsay. See [LICENSE](./LICENSE) for details.

---

## Author

**Vladislav Tsay**

- [GitHub](https://github.com/rubyhat)

---

## About this README

This README was generated with assistance from AI tools based on real and accurate project data.
