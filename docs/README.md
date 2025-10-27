# Conecta ONG

## 📖 Sobre o Projeto

**Conecta ONG** é um protótipo de site institucional desenvolvido como parte de um projeto acadêmico para o curso de Desenvolvimento Front-End. O objetivo foi criar uma plataforma web simples e funcional para uma ONG, aplicando conceitos fundamentais de desenvolvimento com **HTML5, CSS3 e JavaScript puro**, sem o uso de frameworks.

O site foi projetado para ser uma ferramenta de divulgação de projetos, captação de voluntários e comunicação com o público, seguindo as melhores práticas de semântica, responsividade e acessibilidade.

---

## ✨ Funcionalidades Principais

-   **Site 100% Responsivo:** Design *mobile-first* que se adapta a diferentes tamanhos de tela (celulares, tablets e desktops).
-   **Estrutura Semântica:** Uso correto de tags HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, etc.) para melhor SEO e acessibilidade.
-   **5 Páginas Integradas:**
    -   **Início:** Apresentação da ONG, missão, visão, valores e um banner de destaque.
    -   **Projetos:** Galeria de projetos sociais com descrição e imagens.
    -   **Voluntários:** Seção para engajamento, com oportunidades e depoimentos.
    -   **Cadastro:** Formulário completo com validação nativa e melhorias de usabilidade.
    -   **Contato:** Informações institucionais, formulário de contato e mapa de localização (Google Maps).
-   **Interatividade com JavaScript:**
    -   **Máscaras de Input:** Formatação automática para campos de CPF, CEP e Telefone, melhorando a experiência do usuário.
    -   **API de CEP:** Preenchimento automático do endereço ao digitar o CEP, utilizando a API do ViaCEP.
    -   **Manipulação de Formulário:** Confirmação de envio e limpeza dos campos após o cadastro.
-   **Código Limpo e Organizado:** Estrutura de pastas bem definida, separando HTML, CSS e JavaScript.
-   **Acessibilidade (WCAG):**
    -   **Modo Escuro / Alto Contraste:** Implementação de um interruptor de tema que alterna entre os modos claro e escuro, salvando a preferência do usuário para visitas futuras.
    -   **Uso de Atributos ARIA:** Melhoria da acessibilidade para leitores de tela através de `aria-labels` e outros atributos.

---

## 🚀 Tecnologias Utilizadas

-   **HTML5:** Para a estruturação e semântica do conteúdo.
-   **CSS3:** Para estilização, layout (Flexbox, Grid) e responsividade (Media Queries).
 -   **JavaScript (ES6+):** Para interatividade, manipulação do DOM, validações de formulário e consumo de APIs.
---

## 📂 Estrutura de Pastas

O projeto está organizado da seguinte forma:

```
/
|-- index.html
|-- projetos.html
|-- cadastro.html
|-- voluntarios.html
|-- contato.html
|-- README.md
|
|-- /css/
|   |-- style.css
|
|-- /img/
|   |-- banner.jpg
|   |-- projeto1.jpg
|   |-- projeto2.jpg
|   |-- projeto3.jpg
|   |-- certificado.jpg
|   |-- voluntario.jpg
|
|-- /js/
|   |-- script.js
|
|-- /assets/
|   |-- /icons/
|       |-- face.svg
|       |-- insta.svg
|       |-- linkedin.svg
|       |-- whatsapp.svg
```

---

## ⚙️ Como Executar

### Localmente

1.  Clone este repositório: `git clone https://github.com/Viniriter/conectaong/tree/atividade-4`
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` em seu navegador de preferência.

### Online (GitHub Pages)

O projeto pode ser visualizado online através do GitHub Pages. Após fazer o push para o seu repositório, basta ativar o serviço nas configurações (`Settings` > `Pages`).

---

## 🎨 Personalização

O código foi estruturado para facilitar a personalização:
-   **Cores e Temas:** As cores são gerenciadas por variáveis CSS (`:root`). O site inclui um tema claro (padrão) e um tema escuro (`[data-theme="dark"]`), que podem ser facilmente customizados no arquivo `css/style.css`.
-   **Imagens:** Substitua as imagens na pasta `/img/` mantendo os nomes dos arquivos ou atualize os caminhos nos arquivos HTML correspondentes.

---

## 👨‍💻 Autor

**Vinícius Riter de Faria** - [GitHub](https://github.com/Viniriter)

*Projeto desenvolvido para a disciplina de Desenvolvimento Front-End Para Web.*

*Algumas imagens foram geradas por IA e outras baixadas de svgrepo.com*
