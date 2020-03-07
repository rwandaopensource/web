FROM node:12-alpine

LABEL version="latest"

RUN mkdir -p /home/site/wwwroot
WORKDIR /home/site/wwwroot
COPY . .
RUN npm install
RUN npm run build

CMD ["npm", "start"]