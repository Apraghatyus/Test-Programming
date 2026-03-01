FROM node:20-bookworm

WORKDIR /app

# Instala Python 3.11 y pip
# Bookworm (Debian 12) trae Python 3.11 en sus repositorios nativos
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Instala TypeScript y tsx globalmente
# tsx permite ejecutar archivos .ts directamente sin compilar
RUN npm install -g typescript tsx

ENV CI=true

CMD ["bash"]