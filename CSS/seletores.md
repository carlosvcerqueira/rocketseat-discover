# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

* Elemento selector
    - Todos os elementos html

* ID Selector 

    - Um elemento que tenha um atributo 'id'
    - Ca id deverá ser único

* Class Selector
    - Os elementos que contenham um atributo 'class'
    - Podemos ter uma ou mais classes.

* Atribute selector
    - Um elemento que tenha um atributo específico 

* Pseudo-class selector
    - Elementos em um estado específico

## Múltiplos

Você poderá selecionar múltiplos elementos a aplicar regra css para todos eles.

Usamos uma separação por vírgulas

``` css
h1, p, a {
    color: red;
}
```

# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre seletores
* Busca um elemento dentro de outro

```css
body article h2
```
## Child combinator

* Identificado pelo sinal ` > ` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elemento depois do filho direto serão desconsiderados

``` css
body > ul > li
```

## Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direito que é irmão direto na hierarquia

``` css
h1 + p
```

## General Sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona todos os elementos irmãos

```css
h1 ~ p
```

## Utilizando combinadores

```css
ul > li(class="red")
```

## Dica

* Seletores muito especificos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente

# Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado especifico

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele

Pseudo-classes começam com dois pontos : seguido do nome da pseu class `:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
* :nth-of-type()
* :nth-child()

## Ações do usuário

* :hover
* :focus

## Atributos

* :disabled
* :required

# Pseudo-elements

Com pseudo-elementos nós podemos adicionar elmentos htmlpelo próprio CSS

`::pseudo-element-name`

## Exemplos

* ::before
* ::after
* ::first-line