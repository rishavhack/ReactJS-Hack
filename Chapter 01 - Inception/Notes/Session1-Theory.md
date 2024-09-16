# _Chapter 01 - Inception_

## Q: What is `Emmet`?
A: `Emmet` is a toolkit for web developers that helps you write HTML and CSS code faster and more efficiently.


## Q: Difference between a `Library and Framework`?
A: 
| Parameter      | #Framework                                           | #Library                                            |
| :---:          | :---:                                                | :---:                                               |
| Control Flow   | Controls the overall flow of the application         | Developer retains control over the flow             |
| Extensiveness  | More comprehensive, providing a broad set of tools   | Focus on specific functionality or problem-solving  |
| Flexibility    | More rigid with strict conventions and guidlines     | More flexiblem allowing selective usage             |
| Architectural  | May enforce its own architectural patters            | Does not dictate the overall application structure  |
| Examples       | Ruby on Rails, Django, Angular                       | jquery, Reactjs                                     |


## Q: What is a CDN?

A: **CDN** stands for **Content Delivery Network**. It’s a system of distributed servers that work together to deliver web content (like images, videos, and web pages) to users more quickly and efficiently.

### Q: Why Use a CDN?

1. **Faster Load Times:** CDNs cache content closer to users, reducing the distance data travels and speeding up load times.
2. **Reduced Server Load:** By distributing content across multiple servers, CDNs reduce the load on your main server.
3. **Improved Reliability:** CDNs can handle high traffic and recover quickly from server failures.
4. **Better Security:** CDNs offer protection against attacks and help secure your content.


## Q: Why is `React known as React`?
A: `React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.


## Q: What is `crossorigin` in the `<script>` Tag?

The `crossorigin` attribute in the `<script>` tag is used to control how web browsers handle cross-origin requests for JavaScript files. It helps manage the sharing of resources between different domains.

### Why Use `crossorigin`?

1. **Manage Caching:** It helps control how browsers cache JavaScript files from different origins.
2. **Control Access:** It defines how the script’s data can be accessed by other domains, improving security.
3. **Handle Errors:** It helps in handling errors more effectively when the script fails to load due to cross-origin issues.

### Values for `crossorigin`

- **`anonymous`:** Requests are made without sending user credentials (cookies or HTTP authentication).
- **`use-credentials`:** Requests include user credentials (cookies or HTTP authentication) when accessing resources.

Example usage:

```html
<script src="https://example.com/script.js" crossorigin="anonymous"></script>


## Q: Difference Between `React` and `ReactDOM`

| Feature           | `React`                                               | `ReactDOM`                                      |
|---------------    |-----------------------------------------------        |-------------------------------------------------|
| **Purpose**       | Core library for building user interfaces.            | Library for rendering React components to the DOM. |
| **Usage**         | Used to create and manage components.                 | Used to render components to the web page.      |
| **Installation**  | Typically installed as part of the `react` package.   | Typically installed as part of the `react-dom` package. |
| **Example Code**  | `import React from 'react';                           | `import ReactDOM from 'react-dom';`|
| **Main Role**     | Provides the building blocks for creating components and managing their state and props. | Handles rendering of components to the browser’s DOM and updates the DOM. |

In summary, `React` is used for defining components and their logic, while `ReactDOM` is used for rendering these components into the actual web page.
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.



## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?
A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.


## Q: What Are `async` and `defer`?

`async` and `defer` are attributes you can add to the `<script>` tag in HTML to control how JavaScript files are loaded and executed. They help improve page load times and performance.

### `async`

- **Purpose:** The `async` attribute tells the browser to download the script file asynchronously while the HTML page continues to load. The script will be executed as soon as it is downloaded, which might happen before or after the HTML is fully parsed.
- **When to Use:** Use `async` for scripts that don’t depend on other scripts or the HTML content. Good for scripts like analytics or ads that can load independently.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Async Example</title>
  <script src="script.js" async></script>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>

### `defer`

The `defer` attribute is used in the `<script>` tag to control how JavaScript files are loaded and executed. It ensures that the script will be downloaded asynchronously while the HTML document continues to be parsed, but the script will only be executed after the HTML is fully loaded.

### How `defer` Works

- **Purpose:** Allows the browser to download the script file while continuing to parse the HTML. The script is executed only after the HTML document is fully parsed.
- **When to Use:** Use `defer` for scripts that need the HTML to be completely loaded before they execute. Ideal for scripts that interact with the DOM or depend on the structure of the page.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Defer Example</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>



## What is `type="module"`?

The `type="module"` attribute in the `<script>` tag specifies that the script should be treated as an ES6 (ECMAScript 2015) module. This allows you to use modern JavaScript features like `import` and `export` within your scripts.

### Why Add `type="module"`?

1. **Use Modern JavaScript Features:** Allows you to use `import` and `export` statements to include and share code between different JavaScript files. This helps in organizing and managing your code better.

2. **Better Code Organization:** Modules help to keep your codebase modular and maintainable by dividing it into smaller, reusable pieces.

3. **Automatic Strict Mode:** JavaScript modules are always in strict mode, which enforces better coding practices and helps prevent common coding errors.

4. **Async Loading by Default:** Scripts with `type="module"` are loaded asynchronously by default, which means they do not block the HTML parsing.

### Example

**Using `type="module"`:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Module Example</title>
  <script type="module" src="main.js"></script>
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>

