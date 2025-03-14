FROM node:lts as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

FROM nginx:stable
COPY --from=builder /app/build /usr/share/nginx/html
ARG REPO_URL
LABEL org.opencontainers.image.source "https://github.com/${REPO_URL}"
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]