FROM node:12-alpine

RUN mkdir -p /home/site/wwwroot
WORKDIR /home/site/wwwroot
COPY . .
RUN npm install && \
    npm run build && \
    rm -rf public/ && \
    rm -rf node_modules/ && \
    rm -rf src/
RUN npm install --only=production

CMD ["npm", "start"]