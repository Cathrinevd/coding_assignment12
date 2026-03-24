# Steps to Create the Assignment

## 1. Creating the React App

npx create-react-app van_damme_cathrine_assignment12 --template typescript

cd van_damme_cathrine_assignment12

## 2. Installing Style Components

npm install styled-components
npm install -D @types/styled-components

## 3. Installing Storybook

npx storybook@latest init

## 4. Fixing Storbook Framework Import

npm install -D @storybook/react-webpack5

## 5. Installing all Testing Libraries

npm install -D @testing-library/react
npm install -D @testing-library/jest-dom
npm install -D jest-styled-components

## 6. Go into setupTests file

src/setupTests.ts

## 7. Add the following code

import "@testing-library/jest-dom";
import "jest-styled-components";

## 8. Create Component Folder Structure

src/components/ComponentName/
ComponentName.tsx
ComponentName.types.tsx
ComponentName.stories.tsx
ComponentName.test.tsx
index.ts

## 9. Implement all required features in each folders

## 10. Adding storybook controls to each .stories.tsx file

argTypes: {
text: { control: "text" },
backgroundColor: { control: "color" },
disabled: { control: "boolean" },
}

## 11. Run Storybook

npm run storybook

## 12. Run tests

npm test

# Added Assignment 13 Code Quality Checks

## 1. Install Prettier, ESLint, and Husky

npm install --save-dev prettier eslint husky globals

## 2. Add Scripts to package.json

"lint": "eslint .",
"lint:fix": "eslint . --fix",
"format": "prettier . --write",
"format:check": "prettier . --check",
"test:ci": "react-scripts test --watchAll=false",
"prepare": "husky"

## 3. Husky Pre-Commit Hook

File: .husky/pre-commit

npm run format:check && npm run lint && npm run test:ci

This ensures code cannot be committed unless:

Prettier formatting passes
ESLint lint checks pass
All tests pass

# Github Actions CI Pipeline

File: .github/workflows/ci.yml

The GitHub workflow runs on every push and pull request and performs:

Formatting checks
ESLint checks
Automated tests
Production build

# Steps to Create the Docker File/Container

## 1. Create Dockerfile

Dockerfile

## 2. Build Docker Image

docker build -t vandamme_cathrine_coding_assignment13 .

## 3. Run the Container

docker run --name vandamme_cathrine_coding_assignment13 -p 8018:8018 vandamme_cathrine_coding_assignment13

## Port

http://127.0.0.1:8018

## 4. To Stop the container use:

docker stop van_damme_cathrine_coding_assignment13

## 5. Remove the container:

docker rm van_damme_cathrine_coding_assignment13

# Docker Details

# Container name:

vandamme_cathrine_coding_assignment13

# Working directory:

vanDamme_cathrine_ui_garden_build_checks

# Port:

8018

# Commiting to Github

Step 1: git add .
Step 2: git commit -m "meaning full message"
Step 3. git push -u origin main

# Github Actions

-ESlint check
-Prettier check
