FROM node:16 as build

WORKDIR /MY_APP

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.23

COPY --from=build /MY_APP/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]