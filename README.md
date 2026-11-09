# FSWFoods

O FSWFoods é um sistema inspirado no iFood, projetado para facilitar a conexão entre usuários e restaurantes, permitindo pedidos de comida de forma simples e intuitiva.

Acesse a aplicação online: [FSWFoods](https://fws-foods.vercel.app/)

## Tecnologias Utilizadas 🚀

- Next.js: Framework React para criação de aplicações web modernas.

- Prisma: ORM para gerenciamento e integração com banco de dados.

- Tailwind CSS: Biblioteca de estilos utilitários para design responsivo e customizado.

- NextAuth.js: Biblioteca de autenticação para o framework Next.js

## Funcionalidades 📑

- Realizar login por meio do Google
- Exibir os restaurantes e seus produtos
- Criar e acompanhar os pedidos
- Adicionar restaurantes aos favoritos
- Pesquisar por restaurantes

## Como Executar 🛠️

#### Pré-requisitos

- [Node.js](https://fws-foods.vercel.app/)
- [Docker](https://fws-foods.vercel.app/)

#### Passos para Instalação

1 - Clone o repositório:

```bash
  git clone https://github.com/emerss001/fws-foods.git
```

2 - Instale as dependências:

```bash
  npm install
```

3 - Execute o banco de dados com Docker:

```bash
  docker compose up -d
```

4 - Configure o ambiente:

- Crie um arquivo ` .env` na raiz do projeto.

- Configure as variáveis de ambiente necessárias:

```dotenv
DATABASE_URL="mysql://user:password@localhost:3306/fswfoods"

GOOGLE_CLIENT_ID="sua-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="seu-client-secret"
NEXTAUTH_SECRET="uma-chave-secreta"
```

As variáveis do **Google** devem ser configuradas para o **login funcionar**

Você deve configurar seu projeto no [Google Cloud](https://console.cloud.google.com/)

5 - Execute as migrações do banco de dados:

```bash
  npx prisma migrate dev
```

6 - Povoar o banco de dados com a seed do prisma:

```bash
  npx prisma db seed
```

7 - Executar localmente:

```bash
  npm run dev
```

Acesse pelo navegador [http://localhost:3000](http://localhost:3000)


---

Feito por [Emerson Neves](https://www.devemerson.site)
