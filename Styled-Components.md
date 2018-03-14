### O que é Styled-Components ?
Styled-Components é uma ferramenta de CSS que ajuda na organização do mesmo em projetos React.

### Principais objetivos e benefícios:
* Descarta o mapeamento entre estilo e componentes. Todas as vezes em que criamos dumb components temos que fazer
também um arquivo style.css, ou seja, são sempre criados dois arquivos. No começo isso pode parecer bom entretanto
quando o projeto começa a crescer irá acabar com muitos arquivos. O Styled-Components permite que você escreva
CSS dentro do componente React, o que é perfeito para resolver esse problema.

* São construídos pequenos e reusáveis componentes. Usando o Styled-Components podemos facilmente construir pequenos 
componentes e ampliá-los utilizando props.

* Reduzir o risco de choque de especificidade. Um exemplo é quando queremos inserir uma margem a um parágrafo mas isso
impacta em outro parágrafo. Podemos resolver esse problema aplicando uma classe CSS de cada vez. O Styled-Components
gera automaticamente uma classe com nome único e passa isso ao componente.

* Usa a mesma sintaxe que o CSS.

### Começando:
Styled-Components utiliza tagged template literals para estilizar os components.
```javascript
const Title = styled.h1`
    font-size: 15px;
    text-align: center;
`;
```
> Cria uma tag h1
```javascript
render(
  <Title> Título </Title>
);
```
