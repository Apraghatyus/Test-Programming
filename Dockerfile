FROM node:20-bullseye

WORKDIR /app

# Instala Python 3 y pip
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Instala TypeScript y tsx globalmente
# tsx permite ejecutar archivos .ts directamente sin compilar
RUN npm install -g typescript tsx

ENV CI=true

CMD ["bash"]