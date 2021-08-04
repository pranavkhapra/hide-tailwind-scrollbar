# hide-tailwind-scrollbar

## Installation
Install the plugin from npm:

```sh
# Using npm
npm install hide-tailwind-scrollbar
you can use yarn also....
```

Now add this bad boy to `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('hide-tailwind-scrollbar')
    // ...
  ]
}
```

## Now you can use it like this

```jsx
<div className="scrollbar-hide">...</div>
```

## EXTRAS
*i am thinking of adding more plugins doing the different thing to the scrollbars may be write them some other time.
