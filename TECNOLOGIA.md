# Tecnologia Embarcada no Projeto Avakian

Este documento descreve as tecnologias, frameworks e ferramentas utilizadas no desenvolvimento do site Avakian - Consultoria Empresarial.

---

## 1. Framework Principal

### Angular 19
- **Versão:** 19.2.x
- **Descrição:** Framework JavaScript/TypeScript para construção de aplicações web SPA (Single Page Application)
- **Módulos utilizados:**
  - `@angular/core` - Núcleo do framework
  - `@angular/common` - Diretivas e pipes comuns
  - `@angular/compiler` - Compilador de templates
  - `@angular/platform-browser` - Execução no navegador
  - `@angular/platform-browser-dynamic` - Bootstrap dinâmico
  - `@angular/forms` - Formulários reativos e baseados em template
  - `@angular/router` - Roteamento e navegação

### Características do Angular 19
- Standalone components (componentes independentes)
- Signals para gerenciamento reativo de estado
- Control flow moderno (`@if`, `@for`, `@switch`)
- Compilação otimizada com esbuild

---

## 2. Linguagem

### TypeScript 5.7
- **Versão:** ~5.7.2
- **Target:** ES2022
- **Module:** ES2022
- **Configurações:** Strict mode habilitado para maior segurança de tipos

---

## 3. UI e Estilização

### Bootstrap 5.3
- **Versão:** ^5.3.8
- **Uso:** Sistema de grid responsivo, componentes (navbar, cards, carousel, botões) e utilitários
- **Arquivos:** CSS e JavaScript incluídos via `angular.json`

### Bootstrap Icons 1.11
- **CDN:** `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css`
- **Uso:** Ícones SVG para cards de serviços (check, gráficos, engrenagem, globo, laptop, etc.)

### CSS Customizado
- **Arquivos:** `src/styles.css` (global) e `src/app/app.component.css` (componente)
- **Variáveis CSS:** Paleta de cores (Cinza, Preto, Amarelo)
- **Recursos:** Animações, responsividade, estilos de cards e carrossel

---

## 4. Bibliotecas Auxiliares

### RxJS 7.8
- **Uso:** Programação reativa, observables (integração com Angular)

### Zone.js 0.15
- **Uso:** Detecção de mudanças no Angular (change detection)

### tslib 2.3
- **Uso:** Utilitários de runtime para TypeScript

---

## 5. Build e Desenvolvimento

### Angular CLI 19.2
- **Comandos:** `ng serve`, `ng build`, `ng test`
- **Builder:** `@angular-devkit/build-angular:application`
- **Configurações:** Production (otimizado) e Development (source maps)

### Assets
- **Pasta `public`:** Arquivos estáticos servidos na raiz
- **Pasta `src/app/assets`:** Imagens e recursos copiados para `/assets` no build

---

## 6. Testes

### Karma
- **Versão:** ~6.4.0
- **Uso:** Executor de testes em navegador

### Jasmine
- **Versões:** jasmine-core ~5.6.0, @types/jasmine ~5.1.0
- **Uso:** Framework de testes unitários

### Karma Plugins
- karma-chrome-launcher
- karma-coverage
- karma-jasmine
- karma-jasmine-html-reporter

---

## 7. Integrações Externas

### WhatsApp
- **API:** Links `wa.me` para redirecionamento direto
- **Uso:** Botões "Entre em contato" e "Saiba mais" com mensagem pré-definida

### QR Code
- **API:** `https://api.qrserver.com/v1/create-qr-code/`
- **Uso:** Geração dinâmica de QR Code no footer para acesso ao site

---

## 8. Estrutura do Projeto

```
Avakian/
├── src/
│   ├── app/
│   │   ├── app.component.html    # Template principal
│   │   ├── app.component.ts     # Lógica do componente
│   │   ├── app.component.css    # Estilos do componente
│   │   ├── app.config.ts        # Configuração da aplicação
│   │   └── assets/              # Imagens e recursos
│   ├── index.html               # HTML raiz
│   ├── main.ts                  # Bootstrap da aplicação
│   └── styles.css               # Estilos globais
├── public/
│   └── assets/                  # Assets estáticos (imagens, logos)
├── angular.json                 # Configuração do Angular
├── package.json                 # Dependências
└── tsconfig.json                # Configuração TypeScript
```

---

## 9. Resumo da Stack

| Categoria      | Tecnologia        | Versão  |
|----------------|-------------------|---------|
| Framework      | Angular           | 19.2.x  |
| Linguagem      | TypeScript        | 5.7.x   |
| UI Framework   | Bootstrap         | 5.3.x   |
| Ícones         | Bootstrap Icons   | 1.11.x  |
| Reatividade    | RxJS              | 7.8.x   |
| Change Detection| Zone.js          | 0.15.x  |
| Testes         | Karma + Jasmine   | 6.4 / 5.6 |
| Build          | Angular CLI       | 19.2.x  |

---

## 10. Requisitos de Ambiente

- **Node.js:** v18+ (recomendado LTS)
- **npm:** Gerenciador de pacotes
- **Navegador:** Chrome, Firefox, Safari ou Edge (versões recentes)

---

*Documento gerado para o projeto Avakian - Consultoria Empresarial.*
