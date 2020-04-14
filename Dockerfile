FROM node:12-alpine

RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN yarn && \
    yarn build && \
    rm -rf public/ && \
    rm -rf node_modules/ && \
    rm -rf src/
RUN yarn install --production=true

CMD ["yarn", "start"]
