FROM node:alpine

ARG PROJECT_NAMESPACE=samplemobileapp
ARG PROJECT_NAME=backendservice

ENV HOST=0.0.0.0 \
    PORT=3000

WORKDIR /opt/${PROJECT_NAMESPACE}/${PROJECT_NAME}

COPY src/ ./

RUN npm install --only=production && \
    npm cache clean --force && \
    chown -R node:node .

USER node:node

EXPOSE ${PORT}/tcp

ENTRYPOINT ["npm"]

CMD ["start"]
