FROM node:8.1.2-alpine
ENV PUBLIC_URL="http://bangvu.info"
WORKDIR /usr/src/app
COPY . .
RUN yarn install --production --no-progress
RUN yarn run build
CMD [ "yarn", "run", "start:server" ]