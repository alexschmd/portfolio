FROM oven/bun:1 AS builder
WORKDIR /app

COPY . .
RUN bun install
RUN bun run build

FROM node:lts-alpine AS runtime
WORKDIR /app

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["node", "./dist/server/entry.mjs"]
