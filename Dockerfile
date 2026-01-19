FROM oven/bun

COPY . /app
WORKDIR /app

RUN bun install
RUN bun run build

EXPOSE 4321

CMD ["bun", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4321"]

