# Prop-types

```javascript
npm i prop-types
yarn add prop-types
```
```javascript
Textfieldd.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.oneOf([
        "inherit",
        "primary",
        "secondary",
        "success",
        "error",
        "info",
        "warning",
    ]),
    size: PropTypes.oneOf(["small", "medium"]),
    variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
};
```
[Link](https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/)