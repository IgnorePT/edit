# 12. Use a component to draw a dynamic form

Use a component to draw a dynamic form - receives the fields from props - and print the fields on console when submit

# 13. Update UI with promise result

Draw a component with a `h1` with the result returned by the following promise, resolving the promise inside the component

```js
const promise = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            return resolve('React');
        }, 1000);
    });
};
```

```html
<h1>Hello React</h1>
```

# 14. Update UI with an array as result of the promise

Draw a component with the result returned by the following promise, resolving the promise inside the component and generating the desired HTML

```js
const promise = () => {
    return new Promise(function (resolve, reject) {
    setTimeout(() => {
        return resolve({
            '2': {
                class: 'number_two',
                number: 2
            },
            'number_three': {
                class: 'number_three',
                number: 3
            },
            '4': {
                class: 'number_four',
                number: 4
            },
            'number_one': {
                class: 'number_one',
                number: 1
            }
        });
    }, 1000);
    });
};
```

```html
<div>
    <ul>
        <li class="number_one">1</li>
            <ul>
                <li class="number_one">1</li>
                <li class="number_two">2</li>
            </ul>
        <li class="number_two">2</li>
            <ul>
                <li class="number_one">1</li>
                <li class="number_two">2</li>
            </ul>
    </ul>
</div>
```

# 15. Loading message when promise is resolving

Same as exercise 13, but with the following html while the promise is still pending

```html
<h1>Loading ...</h1>
```

# 16. Verify promise result

Draw a component that should show loading message and render the text, if the promise fails should show a error message and try resolve the promise again until the promise is resolved with success

```js
const promise = () => {
    return new Promise(function (resolve, reject) {
    setTimeout(() => {
        const randomBoolean = Math.random() >= 0.5;
        if (randomBoolean) {
            return resolve('React');
        } else {
            return reject('Failed');
        }

    }, 1000);
    });
};
```