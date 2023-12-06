	FROM node:21-alpine3.17
	
	LABEL maintener="Luciano Pereira"
	HEALTHCHECK CMD curl -f http://localhost/ || exit 1
	
	ARG VERSION
	
	RUN mkdir /var/node && \
	apk add curl
	
	WORKDIR /var/app
	
	COPY app.js . 
	

	CMD [ "node", "app.js" ]
 
	
