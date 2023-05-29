FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/CyberSamuZa/DarkSamuza /root/CyberSamuZa
WORKDIR /root/CyberSamuZa
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
