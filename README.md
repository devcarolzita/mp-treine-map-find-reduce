# Treine map(), find() e reduce()

Um mini-projeto mais focado em exercícios para treinar o uso de map, find e reduce! 

## 🤓 Antes de começar

Para começar o projeto, utilize a seguinte estrutura já do repositório:

`index.html`: Página principal do projeto.

`styles.css`: Estilização dos elementos.

`data.js`: Arquivo contendo os dados dos produtos 

E crie o seguinte arquivo para exercício:

`script.js`: Arquivo JavaScript para controlar a lógica de interação e manipulação dos elementos.


## 🔨 Requisitos

### Requisito 1 - Seleção de alimentos
Crie a funcionalidade para filtrar alimentos por categoria.
- Utilize o array `foods` que encontra-se no arquivo `data.js`
- Mostre os itens do array `data.js` dentro da div `#food-gallery`
- Cada item deve ter a classe `food-item` 
- O usuário deve selecionar uma categoria no dropdown (ex: "Frutas", "Lanches") e os alimentos correspondentes devem ser exibidos dinamicamente.
- Se a categoria "Todos" for selecionada, todos os alimentos devem ser exibidos.

###  Requisito 2 - Criador de Drinks
Crie a funcionalidade de buscar um drink no array de receitas utilizando o método find.
- O usuário deve poder selecionar uma fruta e um destilado de dois `<select>`.
- Crie a caixa do drink selecionado pelo o javascript
- O drink encontrado deve aparecer em uma caixa abaixo dos selects, utilize a classe `drink-item` para o container dos itens e `drink-item-box-texts` para o container dos textos.
- Ao clicar no botão "Criar Drink", o resultado (nome e descrição do drink ou mensagem de erro) deve ser exibido no DOM.

### Requisito 3 - Calculadora de calorias
Desenvolva uma calculadora de calorias onde ao clicar 
- Cada alimento deve ter uma funcionalidade de clique que permita adicioná-lo à contagem total de calorias.
- Atualizar dinamicamente o valor total de calorias exibido no rodapé da página.
- Permitir ao usuário remover itens selecionados da contagem total
- Ao renderizar cada alimento, adicione a classe `food-item` ao container de cada.
  
> 👀 **Dicas:**
> O reduce pode te ajudar nesse requisito.


## 👉🏽 Sobre esse mini-projeto

### O que você irá praticar:

## JavaScript
- Manipulação do DOM com JavaScript
- Interação dinâmica com os dados (exibição de imagens e informações)
- Uso de funções de manipulação de arrays (Find, Map e Reduce)

## Pré requisitos
Conhecimento básico de HTML, CSS e JavaScript.
Noções sobre como manipular elementos do DOM e adicionar eventos com JavaScript.
