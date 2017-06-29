FROM node:alpine
# MAINTAINER First Name <email@adress>

EXPOSE 4118
ENV PORT=4118 \
    HOST="0.0.0.0" \
    USER="node"

COPY app /app
WORKDIR /app
RUN npm i --only-prod --ignore-scripts --silent --depth=0
RUN chown -R ${USER}:${USER} /app

USER ${USER}
CMD ["npm", "start"]
