COPY package.json package-lock.json* ./
RUN npm i && npm cache clean --force
COPY ./src ./src
