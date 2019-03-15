# @silky/text

The `<Text />` component is a React implementation of the `<text>` SVG element which defines a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, just like any other SVG graphics element.

If text is included within SVG not inside of a <text> element, it is not rendered. This is different from being hidden by default, as setting the display property will not show the text.

## Roadmap

- [ ] Vertical alignment
- [ ] Multiline text
- [ ] Dynamic scaling

## Install

### Yarn

```bash
yarn add @silky/text
```

### NPM

```bash
npm install --save @silky/text
```

## Import

### ES5 Modules

```javascript
import { Text } from '@silky/text';
```

### CommonJS <Node>

```javascript
const Text = require('@silky/text');
```

### Browser

```html
<script src="https://unpkg.com/@silky/text@:version/umd/silky-text.js"></script>
```

## Usage

In this example you can see how to pass translate and rotate values for the transform attribute.

```javascript
const App = () => (
  <svg>
    <Text>foo</Text>
  </svg>
);

render(<App />, document.getElementById('root'));
```

## Props

### `className`

```
  className?: string
```

- **Defaults:** `'silky-text'`
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

### `x`

```
  x?: number | string
```

- **Defaults:** `null`
- **Description:** determines the x coordinate of the starting point of the text baseline.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x)

---

### `y`

```
  y?: number | string
```

- **Defaults:** `null`
- **Description:** determines the y coordinate of the starting point of the text baseline.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y)

---

### `dy`

```
  dy?: number | string
```

- **Defaults:** `null`
- **Description:** allows you to shift the text position vertically.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy)

---

### `dx`

```
  dx?: number | string
```

- **Defaults:** `null`
- **Description:** allows you to shift the text position horizontally.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx)

---

### `dy`

```
  dy?: number | string
```

- **Defaults:** `null`
- **Description:** allows you to shift the text position vertically.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dy)

---

### `lengthAdjust`

```
  lengthAdjust?: 'spacing' | 'spacingAndGlyphs'
```

- **Defaults:** `null`
- **Description:** when an SVG `<text>` or `<tspan>` element has a specific length, set using the textLength attribute, the lengthAdjust attribute controls how the text is stretched or compressed into that length.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lengthAdjust](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lengthAdjust)

---

### `textLength`

```
  textLength?: number | string
```

- **Defaults:** `null`
- **Description:** lets you specify the width of the space into which the text will draw.
- **Documentation:** [https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/textLength](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/textLength)

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
