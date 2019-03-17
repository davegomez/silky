# @silky/path

The `<Path />` component is a React implementation of the `<path>` SVG element which is the generic element to define a shape. All the basic shapes can be created with a path element.

## Install

### Yarn

```bash
yarn add @silky/path
```

### NPM

```bash
npm install --save @silky/path
```

## Import

### ES5 Modules

```javascript
import { Path } from '@silky/path';
```

### CommonJS <Node>

```javascript
const Path = require('@silky/path');
```

### Browser

```html
<script src="https://unpkg.com/@silky/path@:version/umd/silky-path.js"></script>
```

## Usage

The `d` prop is require every time you want to use the `Path` component.

```javascript
const App = () => (
  <svg>
    <Path
      d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z"
    />
  </svg>
);

render(<App />, document.getElementById('root'));
```

## Props

### `className`

```
  className?: string
```

- **Defaults:** `'silky-path'`
- **Description:** any additional class name will be appended to the default one.
- **Documentation:** [https://reactjs.org/docs/faq-styling.html](https://reactjs.org/docs/faq-styling.html)

---

### `css`

```
  css?: Object
```

- **Defaults:** `null`
- **Description:** accepts an [Emotion](https://emotion.sh) CSS declaration using the `css` prop.
- **Documentation:** [https://emotion.sh/docs/css-prop](https://emotion.sh/docs/css-prop)

---

### `d`

```
  d: string
```

- **Defaults:** `null`
- **Description:** defines the shape of the path.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)

---

### `pathLength`

```
  d: string
```

- **Defaults:** `null`
- **Description:** lets authors specify the total length for the path, in user units. Works better in combination with the CSS properties `stroke-dasharray` and `stroke-dashoffset`.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength)
