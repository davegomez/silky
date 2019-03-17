# @silky/line

The `<Line />` component is a React implementation of the `<line>` SVG basic shape used to create a line connecting two points.

## Install

### Yarn

```bash
yarn add @silky/line
```

### NPM

```bash
npm install --save @silky/line
```

## Import

### ES5 Modules

```javascript
import { Line } from '@silky/line';
```

### CommonJS <Node>

```javascript
const Line = require('@silky/line');
```

### Browser

```html
<script src="https://unpkg.com/@silky/line@:version/umd/silky-line.js"></script>
```

## Usage

If you do not specify the `stroke` color the line will not be visible, but you can also pass the property through the `css` prop.

```javascript
const App = () => (
  <svg>
    <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
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

### `x1`

```
  x1: number | string
```

- **Defaults:** `null`
- **Description:** defines the x-axis coordinate of the line starting point.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x1](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x1)

---

### `x2`

```
  x2: number | string
```

- **Defaults:** `null`
- **Description:** defines the x-axis coordinate of the line starting point.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x2](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x2)

---

### `y1`

```
  y1: number | string
```

- **Defaults:** `null`
- **Description:** defines the y-axis coordinate of the line starting point.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y1](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y1)

---

### `y2`

```
  y2: number | string
```

- **Defaults:** `null`
- **Description:** defines the y-axis coordinate of the line ending point.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y2](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y2)

---

### `pathLength`

```
  d: string
```

- **Defaults:** `null`
- **Description:** lets authors specify the total length for the path, in user units. Works better in combination with the CSS properties `stroke-dasharray` and `stroke-dashoffset`.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pathLength)
