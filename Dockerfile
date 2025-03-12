FROM node:23-bookworm-slim

COPY --from=caddy:2.9-alpine /usr/bin/caddy /usr/bin/
COPY Caddyfile /etc/caddy/Caddyfile
COPY app.js package.json yarn.lock /app/

WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT 0
RUN corepack enable;\
    yarn install --immutable

EXPOSE 80
EXPOSE 443
RUN caddy start -c /etc/caddy/Caddyfile
CMD ["yarn", "start"]