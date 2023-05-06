# Usa una imagen de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install --production

# Copia los archivos de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Expone el puerto 80
EXPOSE 80

# Inicia el servidor web
CMD ["npm", "start"]
