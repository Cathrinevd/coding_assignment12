
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

# Steps to Create the Docker File/Container

## 1. Create Dockerfile
Dockerfile

## 2. Build Docker Image
docker build -t van_damme_cathrine_coding_assignment12 .

## 3. Run the Container
docker run --name van_damme_cathrine_coding_assignment12 -p 8083:8083 van-damme-cathrine-ui-garden-image

## Port
http://127.0.0.1:8083

## 4. To Stop the container use:
docker stop van_damme_cathrine_coding_assignment12

## 5. Remove the container:
docker rm van_damme_cathrine_coding_assignment12


