# Chapter 03 - Laying the Foundation

## Q: What is another way of starting the build of the project?

Instead of using `npx parcel index.html`, we can create scripts in the `package.json` file for easier project management. This allows us to have different commands for Development and Production environments.

### Steps to Create Scripts

1. Open your `package.json` file.
2. In the `scripts` section, add the following commands:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

Running the Scripts
To start your project in Development mode, run:

```json
npm run start
```

or simply:

```json
npm start
```

To create a Production build, use:

```json
npm run build
```


## Q: What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that resembles HTML or XML. It allows you to write elements in a way that looks like markup, making it easier to visualize the structure of your UI components.

### Key Points About JSX:

- **Not a Requirement**: While JSX is commonly used in React, it is not a part of React itself. You can build React applications without it, although the code may become more difficult to read and maintain.
  
- **Not HTML**: It's important to note that JSX is not HTML embedded in JavaScript. Instead, it is a syntax that ultimately gets compiled to JavaScript.

- **JavaScript Engine**: The JavaScript engine does not understand JSX directly; it only recognizes standard ECMAScript. JSX must be transformed into regular JavaScript before the browser can interpret it.

### Conclusion

JSX enhances the readability and structure of React components, making it a popular choice among developers.

## Creating Elements in React: `createElement` vs. JSX

In React, you can create elements using either `React.createElement` or JSX syntax. Here’s a comparison of both methods:

### Using `React.createElement`

```javascript
const heading = React.createElement("h1", { id: "heading" }, "Pranam React");
```

### Using JSX

```javascript
const jsxHeading = <h1 id="heading">Pranam React using JSX</h1>;
```

#### Output Comparison

When you log both `heading` and `jsxHeading`, you will find that they produce the same object representation in React:

```javascript
console.log(heading);
console.log(jsxHeading);
```
Both methods will create a React element that looks similar when rendered. However, JSX is generally preferred for its readability and ease of use.


## Why We Use Babel for JSX

The JavaScript engine does not understand JSX syntax directly, as it only recognizes standard ECMAScript. To bridge this gap, we use **Babel**.

### What is Babel?

Babel is a JavaScript compiler that transforms JSX (and other modern JavaScript features) into plain JavaScript that the engine can understand. 

### How It Works

1. **Transpilation**: Babel converts JSX code into `React.createElement` calls, which the JavaScript engine can process.
    Before the code reaches the JavaScript engine, it is sent to Parcel for transpilation. This process converts JSX into valid JavaScript that browsers can understand. 

   - **Transpilation**: This means converting code into a format that browsers can interpret.
  
   For example, the JSX:

   ```javascript
   const jsxHeading = <h1 id="heading">Pranam React using JSX</h1>;
   ```

2. **Integration**: Babel can be easily integrated into your build process (e.g., with tools like Webpack), allowing you to write JSX while ensuring compatibility with all browsers.

3. **Babel's Role**: Parcel acts as a manager that delegates the transpilation task to a package called **Babel**. Babel is a JavaScript compiler/transpiler that is typically included in the `node_modules` of your project.

   - Babel takes JSX and converts it into JavaScript code that browsers can execute as soon as you save your file.
4. **Transformation Flow**: The transformation process can be summarized as follows:

   - **JSX (transpiled by Babel)** → `React.createElement` → React Element → JavaScript Object → HTML Element (render)


## Q: What is the difference between HTML and JSX?

While JSX resembles HTML, it is important to understand that JSX is not HTML; it is an HTML-like syntax designed specifically for use with React. Here are some key differences between the two:

### Key Differences

1. **Property Names**:
   - **HTML**: Uses the `class` attribute to define CSS classes.
   - **JSX**: Uses `className` instead of `class` to avoid conflicts with the JavaScript `class` keyword.

2. **Syntax for Property Names**:
   - **HTML**: Allows hyphens in attribute names (e.g., `data-attribute`).
   - **JSX**: Follows camelCase syntax for property names (e.g., `dataAttribute`).

3. **Self-Closing Tags**:
   - **HTML**: Tags like `<img>` or `<input>` can be written without a closing tag.
   - **JSX**: Requires self-closing tags to be explicit, such as `<img />` or `<input />`.

### Conclusion

These differences ensure that JSX can be seamlessly integrated into JavaScript and enhance the development experience in React.

## Q: Single Line and Multi-Line JSX Code

### Single Line JSX

For a single line of JSX, you can simply write:

```javascript
const jsxHeading = <h1>Pranam React</h1>;
```

### Multi-Line JSX
When writing JSX over multiple lines, it is mandatory to use parentheses. This helps Babel understand where the JSX starts and ends:
```javascript
const jsxHeading = (
  <div>
    <h1>Pranam React</h1>
  </div>
);

```

### Why Use Parentheses?
Using parentheses improves code readability and ensures that JSX is correctly interpreted, especially when it spans multiple lines. It makes it clear to both the developer and the compiler that the content is part of a single expression.


## Introducing React Components

In React, everything revolves around **components**. They are the building blocks of any React application.

### Q: What are Components?

Components are reusable pieces of code that define how a certain part of a user interface should appear and behave. There are two primary types of components in React:

1. **Class-Based Components**:
   - Traditionally used for creating components in React.
   - They are more complex and provide additional features, such as lifecycle methods.
   - While they are still supported, they are used less frequently in modern development.

2. **Functional Components**:
   - The modern approach to writing components in React.
   - Simpler and more concise than class-based components.
   - With the introduction of React Hooks, functional components can now manage state and lifecycle events, making them the preferred choice in most cases.


## Q: What is a React Functional Component?

A **React Functional Component** is simply a JavaScript function that returns JSX or a React element. 

### Naming Conventions

- Always start the name of a React Functional Component with a capital letter. This distinguishes it from regular functions and helps avoid confusion.

### Examples of Functional Components

Here are three ways to define a functional component that returns the same output:

1. **Single-Line Arrow Function**:
   ```javascript
   const HeadingComponent1 = () => (
     <h1>Pranam</h1>
   );
  ```

2. **Multi-Line Arrow Function**:
 ```javascript
   const HeadingComponent2 = () => {
      return <h1>Pranam</h1>;
    };
 ```

3. **Implicit Return with Arrow Function**:
 ```javascript
   const HeadingComponent3 = () => <h1>Pranam</h1>;
 ```

### Rendering a Functional Component
To render a functional component, you use the following syntax:

  ```javascript
   <HeadingComponent1 />
  ```

  This is the syntax that Babel understands. Additionally, you can render components in these ways:

* Using an opening and closing tag:
  ```javascript
    <Title></Title>
  ```

* Using curly braces to invoke the function:

 ```javascript
    {Title()}
 ```


## Component Composition

**Component composition** refers to the practice of embedding one component within another. This allows for the creation of more complex UIs by combining smaller, reusable components.

### Example of Component Composition

```javascript
const Title = () => <h1>Pranam React</h1>;

const HeadingComponent = () => (
  <div id="container">
    <Title />
  </div>
);
```

### How It Works
In this example:
- The `Title` component returns an `<h1>` element with the text "Pranam React".
- The `HeadingComponent` includes the `Title` component within a `<div>` with an ID of "container".

When the `HeadingComponent` is rendered, it effectively becomes:

```javascript
const HeadingComponent = () => (
  <div id="container">
    <h1>Pranam React</h1>
  </div>
);

```

This illustrates how the code inside the `Title` component is incorporated directly into the `HeadingComponent`.


## Q: How to Use JavaScript Code Inside JSX?

In React, you can incorporate JavaScript expressions directly into JSX by using curly braces `{}`. This allows you to dynamically render values or execute expressions within your components.

### Example

```javascript
const number = 10000;

const HeadingComponent = () => (
  <div id="container">
    {number}
    <h1>Pranam React</h1>
  </div>
);

```

### How It Works
In the example above:

* The variable number is defined with a value of 10000.
* Inside the HeadingComponent, {number} is placed within the JSX. This tells React to evaluate the expression and render its value in the output.

When rendered, the output will look like this:

```javascript
<div id="container">
  10000
  <h1>Pranam React</h1>
</div>
```

## Q: What will happen if we call 2 elements inside each other?
If we put 2 components inside each other, then it will go into
an infinite loop and the stack will overflow. It will freeze
your browser, so it’s not recommended to do so.

## Advantages of Using JSX

### 1. Sanitizes the Data
JSX helps prevent cross-site scripting (XSS) attacks by sanitizing data. If malicious data is passed through an API, JSX escapes it before rendering, protecting your application from potential threats. This ensures that harmful scripts cannot access cookies, local storage, session storage, or sensitive device information.

### 2. Improves Code Readability
JSX allows developers to write HTML-like syntax directly within JavaScript, making it easier to visualize the structure of components. This eliminates the need for verbose `React.createElement()` calls, resulting in cleaner and more intuitive code.

### 3. Simplifies Code Structure
The syntax of JSX simplifies the creation of UI components, making the code more elegant and concise. This reduction in boilerplate helps developers focus on building functionality rather than dealing with complex syntax.

### 4. Provides More Useful Errors and Warnings
JSX enhances the developer experience by providing clear error messages and warnings during development. This allows developers to identify issues quickly, improving debugging efficiency.

### 5. Prevents Code Injections
By using JSX, you minimize the risk of code injection attacks. Since JSX automatically escapes values, it ensures that any potentially harmful code is rendered harmless.

### Conclusion
Overall, JSX offers significant benefits in terms of security, readability, simplicity, and error handling, making it a valuable tool for React developers.
