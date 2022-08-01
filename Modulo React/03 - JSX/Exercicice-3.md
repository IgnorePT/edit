# 4.

Generate this HTML with createElement and use CSS to change the text to the correct color

```html
<div>
    <h1 class="blue">Bigger</h1>
    <h2 class="red">Not so big</h2>
    <h3 class="yellow">H3 text</h3>
    <h4 class="green">Smaller</h4>
</div>
```

# 5.

Generate this HTML with createElement and with these items:

```js
const items = [3, 4, 5, 2, 1];
```

```html
<div>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</div>
```

# 6.

Generate this HTML with createElement and with these items:

```js
const items = [
    {
        class: 'number_two',
        number: 2
    },
    {
        class: 'number_three',
        number: 3
    },
    {
        class: 'number_four',
        number: 4
    },
    {
        class: 'number_one',
        number: 1
    }
];
```

```html
<div>
    <ul>
        <li class="number_one">1</li>
        <li class="number_two">2</li>
    </ul>
</div>
```
20h14
# JSX

- This tag syntax is neither a string nor HTML
- It is a syntax extension to JavaScript
- JSX produces React elements

```js
const element = <h1>Hello, world!</h1>;

const element = React.createElement('h1', null, 'Hello, world!');
```

- Using expressions in JSX

```js
const foo = 'world';
const element = <h1>Hello, {foo}</h1>;

ReactDOM.render(
  element,
  document.getElementById('container')
);
```

- We can use functions inside expressions

```js
function formatText(name) {
  return 'Hello, ' + name;
}

const name = 'React';

const element = (
  <h1>
    Hello, {formatText(name)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('container')
);
```

- Using attributes with JSX

```js

const classXPTO = 'blue';
const element = <h1 class={classXPTO}>Hello</h1>;
```

- JSX may contain multiline:

```js
const element = (
  <div>
    <h1>Hello</h1>
    <h2>Hello again</h2>
  </div>
);
```