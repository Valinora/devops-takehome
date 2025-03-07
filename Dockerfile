FROM node:23-bookworm-slim

COPY app.js package.json yarn.lock /app/

WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT 0
RUN corepack enable;\
    yarn install --immutable

CMD ["yarn", "start"]