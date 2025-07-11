# NLW Agents Intermediário

Este projeto é uma aplicação web full-stack construída com as seguintes tecnologias:

## Tecnologias Utilizadas

### Backend

*   **[Fastify](https://fastify.io/):** Framework web de alta performance para Node.js.
*   **[Drizzle ORM](https://orm.drizzle.team/):** ORM TypeScript para interação com o banco de dados.
*   **[PostgreSQL](https://www.postgresql.org/):** Banco de dados relacional.
*   **[Zod](https://zod.dev/):** Biblioteca de validação de schemas.

### Frontend

*   **[React](https://react.dev/):** Biblioteca para construção de interfaces de usuário.
*   **[Vite](https://vitejs.dev/):** Ferramenta de build para o frontend.
*   **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utility-first.
*   **[React Router](https://reactrouter.com/):** Para gerenciamento de rotas.
*   **[TanStack Query](https://tanstack.com/query/latest):** Para data fetching e caching.

## Padrões de Projeto

*   **API:** O backend segue uma arquitetura de API RESTful.
*   **Componentização:** O frontend é construído com componentes reutilizáveis.
*   **Tipagem:** O projeto utiliza TypeScript tanto no backend quanto no frontend para garantir a tipagem estática.

## Setup e Configuração

### Pré-requisitos

*   [Node.js](https://nodejs.org/en/) (v20 ou superior)
*   [Docker](https://www.docker.com/) (para o banco de dados)

### Backend

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Configure as variáveis de ambiente:**
    *   Copie o arquivo `.env.example` para `.env`.
    *   Preencha as variáveis de ambiente no arquivo `.env`.

3.  **Inicie o banco de dados:**
    ```bash
    docker-compose up -d
    ```

4.  **Rode as migrations do banco de dados:**
    ```bash
    npm run db:migrate
    ```

5.  **Popule o banco de dados com dados de teste (opcional):**
    ```bash
    npm run db:seed
    ```

6.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

### Frontend

1.  **Navegue até o diretório `web`:**
    ```bash
    cd web
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
