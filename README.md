
# Projeto React: Trabalhando com Componentes

## Descrição do Projeto
Este é um projeto de estudo em React com o objetivo de praticar e consolidar o entendimento sobre a criação e utilização de componentes em React. O projeto explora a troca de dados via `props`, o uso do atributo `children`, e a construção de interfaces dinâmicas utilizando formulários e listas.

## Funcionalidades
- Adicionar itens por meio de um formulário.
- Exibir itens adicionados em uma lista dinâmica.
- Utilização de `props` para comunicação entre componentes.
- Implementação do atributo `children` para renderizar componentes de forma flexível.

## Estrutura dos Componentes
O projeto contém quatro componentes principais:
1. **FormItem**: Componente responsável por renderizar um formulário para adicionar itens.
2. **Item**: Componente que exibe um único item na lista.
3. **ItemList**: Componente que exibe uma lista de itens, utilizando o componente `Item`.
4. **Container**: Componente pai que utiliza o atributo `children` para encapsular outros componentes.

## Como Rodar a Aplicação

### Pré-requisitos
Certifique-se de que você tem o Node.js instalado em sua máquina.

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd my-components-project
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o projeto:
   ```bash
   npm start
   ```

A aplicação será iniciada em `http://localhost:3000`.

## Estrutura de Pastas
- **src/components**: Contém os componentes `FormItem`, `Item`, `ItemList`, e `Container`.
- **src/App.js**: Gerencia o estado e combina todos os componentes.
- **src/App.css**: Contém os estilos personalizados para o projeto.

## Tecnologias Utilizadas
- React
- JavaScript (ES6+)
- CSS3

## Licença
Este projeto é de uso livre e não possui uma licença específica.
