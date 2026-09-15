# Simulação de Voto Interativa

Uma landing page interativa em formato de jornada (Simulação de Urna -> Quiz -> Produto). 
Este projeto é construído em React com Vite e Tailwind CSS, e foi desenhado de forma totalmente responsiva (mobile-first).

## 1. Como instalar
1. Certifique-se de ter o Node.js instalado (versão 18+ recomendada).
2. Na raiz do projeto, execute:
   ```bash
   npm install
   ```

## 2. Como executar localmente
Para iniciar o servidor de desenvolvimento e ver a página:
```bash
npm run dev
```
O servidor rodará em \`http://localhost:3000\` ou na porta indicada no terminal.

## 3. Como substituir as imagens
Todas as imagens estão dentro da pasta \`public/images/\`:
* \`urna.jpg\`: Imagem do candidato que aparece após digitar o número na urna.
* \`pergunta-1.jpg\` até \`pergunta-5.jpg\`: Imagens que ilustram cada uma das perguntas do quiz.
* \`produto.jpg\`: Imagem exibida no card final de produto.

Basta colocar as suas imagens nessa pasta e garantir que tenham exatamente os mesmos nomes (ou então alterar os caminhos no arquivo \`src/data/questions.ts\` e nos componentes).

## 4. Como editar as perguntas
As perguntas do quiz estão armazenadas no arquivo \`src/data/questions.ts\`. 
Você pode abrir este arquivo em qualquer editor e alterar o texto das perguntas (campo \`question\`), as opções de resposta (campo \`options\`) e indicar qual é a resposta correta pelo índice (campo \`correctAnswer\`, lembrando que 0 é a primeira opção, 1 é a segunda, etc).

## 5. Como alterar o produto
Abra o arquivo \`src/components/ProductCard.tsx\`. Você pode alterar livremente os textos de título, descrição, os benefícios listados no array de itens, e o preço apresentado.

## 6. Como colocar o link do checkout
No mesmo arquivo \`src/components/ProductCard.tsx\`, procure pelo elemento de link \`<a href="#" ...>QUERO CONHECER</a>\`. 
Substitua o \`href="#"\` pelo seu link de checkout real (ex: \`href="https://pay.hotmart.com/XYZ"\`).

## 7. Como publicar na Vercel
O projeto já está configurado corretamente.
1. Envie seu código para um repositório no GitHub.
2. Acesse sua conta na Vercel (vercel.com).
3. Clique em "Add New..." -> "Project".
4. Importe o repositório do GitHub.
5. As configurações padrão de Vite (Build Command: \`npm run build\`, Output Directory: \`dist\`) serão detectadas automaticamente.
6. Clique em "Deploy" e aguarde a finalização!
