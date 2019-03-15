# @silky/group

The `<Group />` component is a React implementation of the `<g>` SVG element which is a container used to group other SVG elements.

`<Group />` allows you to pass a className, an Emotion template, and `transform` properties for `translate` and `rotate` in order to improve performance inlining this attribute instead of creating style rules for each individual element.

## Install

### Yarn

```bash
yarn add @silky/group
```

### NPM

```bash
npm install --save @silky/group
```

## Import

### ES5 Modules

```javascript
import { Group } from '@silky/group';
```

### CommonJS <Node>

```javascript
const Group = require('@silky/group');
```

### Browser

```html
<script src="https://unpkg.com/@silky/group@:version/umd/silky-group.js"></script>
```

## Usage

In this example you can see how to pass translate and rotate values for the transform attribute.

```javascript
const App = () => (
  <svg>
    <Group transform={{ rotate: '10 20, 30', translate: [10, 20] }}>
      // ... SVG elements
    </Group>
  </svg>
);

render(<App />, document.getElementById('root'));
```

## Props

### `className`

```
  className?: string
```

- **Defaults:** `'silky-group'`
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

### `transform`

```
  transform?: {
    matrix?: [number]
    rotate?: number | string
    scale?: number | [number]
    skew?: string | [string]
    translate?: [number | string]
  }
```

- **Defaults:** `null`
- **Description:** will generate the correct `transform` attribute value based on the properties passed in the object.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)
