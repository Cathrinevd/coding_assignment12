FROM node:20-alpine AS build

WORKDIR /van_damme_cathrine_ui_garden

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine AS prod

WORKDIR /van_damme_cathrine_ui_garden

RUN npm install -g serve

COPY --from=build /van_damme_cathrine_ui_garden/build ./build

EXPOSE 8083

CMD ["serve", "-s", "build", "-l", "8083"]
