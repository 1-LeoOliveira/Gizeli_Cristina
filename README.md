# Gizeli Cristina — Site Psicóloga

Landing page profissional construída com **Next.js 14 + TypeScript**.

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
# Acesse http://localhost:3000

# 3. Build para produção
npm run build
npm start
```

## Deploy na Vercel (recomendado — gratuito)

1. Suba o projeto para o GitHub
2. Acesse vercel.com e importe o repositório
3. Clique em Deploy — zero configuração necessária

## ⚠️ O que personalizar antes de publicar

### 1. Número de WhatsApp
Busque por `5534999999999` em todos os arquivos e substitua pelo número real da Gizeli.

### 2. Foto (`/public/gizeli.png`)
Já incluída. Para substituir, coloque a nova foto em `/public/gizeli.png`.

### 3. Depoimentos
Se tiver avaliações do Google ou depoimentos de pacientes, criar um componente `Reviews.tsx` e importar em `page.tsx` antes do FAQ.

### 4. Redes sociais
No `Footer.tsx`, adicionar os links de Instagram e outras redes quando disponíveis.

## Estrutura

```
gizeli-cristina/
├── app/
│   ├── globals.css         ← Paleta de cores e estilos
│   ├── layout.tsx          ← Metadata SEO
│   └── page.tsx            ← Montagem das seções
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── About.tsx
│   ├── Areas.tsx
│   ├── Approach.tsx        ← TCC, ACT, Esquemas, TFE
│   ├── HowItWorks.tsx      ← Primeira sessão + Localização
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── AnimatedSection.tsx
│   └── icons.tsx
├── public/
│   └── gizeli.png          ← Foto profissional
└── package.json
```
# Gizeli_Cristina
