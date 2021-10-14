FROM node:16-alpine AS builder
WORKDIR /app

## Install dependencies
COPY ["./package.json", "./package-lock.json", "/app/"]

RUN npm install

## Add source code
COPY ["./tsconfig.json", "/app/"]
COPY "./src" "/app/src/"

## Build
RUN npm run build

FROM node:16-alpine
WORKDIR /app

COPY --from=builder [\
  "/app/package.json", \
  "/app/package-lock.json", \
  "/app/" \
  ]

COPY --from=builder "/app/dist" "/app/dist"

RUN npm ci --only=production
EXPOSE 3000

CMD PORT=$PORT node dist/app.js
