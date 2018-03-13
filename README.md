# Exemplo de como devemos escrever as classes:
![](https://serving.photos.photobox.com/72621498a566e112c0e48f74546a8487483ee78689bb62f7ef7037d369568c7e62c93a42.jpg)

![#000000](https://placehold.it/15/000000/000000?text=+) ``preto``
```html
class="metrics"
```
![#FF0000](https://placehold.it/15/FF0000/000000?text=+) ``vermelho``
```html
class="calendar"
```
![#FFFF00](https://placehold.it/15/FFFF00/000000?text=+) ``amarelo``
```html
class="calendar__days"
```
![#FFA500](https://placehold.it/15/FFA500/000000?text=+) ``laranja``
```html
class="calendar__full-date"
```
![#0000ff](https://placehold.it/15/0000ff/000000?text=+) ``azul``
```html
class="metrics-options"
```
![#8c198c](https://placehold.it/15/8c198c/000000?text=+) ``roxo``
```html
class="metrics-options__box"
```
![#7f6b00](https://placehold.it/15/7f6b00/000000?text=+) ``ouro``
```html
class="metrics-options__box--green"
class="metrics-options__box--grey"
class="metrics-options__box--purple"
class="metrics-options__box--grey"
```
![#008000](https://placehold.it/15/008000/000000?text=+) ``verde``
```html
class="graph"
```

#### Resultado final:   
```html
<div class="metrics">
    <div class="calendar">
        <div class="calendar__days"></div>
        <div class="calendar__full-date"></div>
    </div>
    <div class="metrics-options">
        <div class="metrics-options__box metrics-options__box--green"></div>
        <div class="metrics-options__box metrics-options__box--grey"></div>
        <div class="metrics-options__box metrics-options__box--purple"></div>
        <div class="metrics-options__box metrics-options__box--grey"></div>
    </div>
    <div class="graph"></div>
</div>
```

### Entendendo:
> metrics é o bloco principal  
> calendar, metrics-options e graph são blocos dentro do bloco principal  
> calendar__days, calendar__full-date e metrics-options__box são elementos dos seus respectivos blocos  
> metrics-options__box--green, metrics-options__box--grey e metrics-options__box--purple são modificadores dos blocos  

### Observações:
* Os nomes das classes devem ser descritivos e intuitívos.
* Se estamos utilizando o bootstrap, não devemos usar outro sistema de grid como o flexbox, css grid layout, etc.
* Se for necessário posicionar o elemento de uma forma mais específica, utilizar a sua própria classe para isso.
