## Namaste React Course by Akshay Saini
# _Chapter 02 - Igniting our App_


## Q: What is `NPM`?

It is a tool used for package management and the default package manager for Node projects. `NPM is installed when NodeJS` is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.  `NPM` is used to manage and install libraries and dependencies that a JavaScript project may require. 

To use `NPM`, you generally interact with it via the command line. Common commands include:
- `npm install [package]`: Install a package.
- `npm update [package]`: Update a package.
- `npm uninstall [package]`: Remove a package.
- `npm init`: Create a `package.json` file for a new project.
- `npm run [script]`: Run a custom script defined in `package.json`.

For more details, you can visit the official [NPM website](https://www.npmjs.com/).


## How to Initialize `NPM`?

To initialize `NPM` in a project, you need to create a `package.json` file which will hold metadata about your project and its dependencies. Here’s how you can do it:

1. **Navigate to Your Project Directory**:
   Open your terminal or command prompt and navigate to the root directory of your project.

   ```sh
   cd path/to/your/project
   ```

2. **Run the Initialization Command**:
   Execute the following command to start the initialization process:

   ```sh
   npm init
   ```
   This command will prompt you to enter details about your project. The prompts typically include:
    - `name:` The name of your project.
    - `version:` The version number of your project.
    - `description:` A brief description of your project.
    - `entry point:` The main file of your project (e.g., index.js).
    - `test command:` Command to run tests.
    - `repository:` URL of the project's repository.
    - `keywords:` Keywords related to your project.
    - `author:` The author of the project.

    You can press Enter to accept default values or provide your own for each prompt.

    After you complete the prompts, NPM will generate a `package.json` file in your project directory. This file contains metadata about your project and manages its dependencies.

3. Use **npm init -y** for Default Values: If you prefer to create a `package.json` file with default values without going through the prompts


## Q: What is `Parcel`/`Webpack`? Why Do We Need It?

`Parcel` and `Webpack` are popular tools known as **module bundlers** or **build tools** used in web development. They are designed to manage and optimize the assets of a web application, such as JavaScript, CSS, HTML, and images. 

### `Parcel`

`Parcel` is a zero-configuration web application bundler that simplifies the development process. It offers several advantages:
- **Zero Configuration**: Parcel requires minimal setup and configuration. It automatically handles most of the configuration, allowing developers to focus on writing code.
- **Blazing Fast Performance**: Parcel leverages multicore processing and features like caching to provide fast build times.
- **Supports Various File Types**: Parcel can handle various file types as entry points, including HTML, JavaScript, CSS, and more. 

### `Webpack`

`Webpack` is a highly configurable module bundler with a powerful feature set:
- **Rich Ecosystem**: Webpack provides extensive plugins and loaders to handle a wide range of file types and transformations. It allows for detailed customization of the build process.
- **Code Splitting**: Webpack can split code into smaller bundles, which improves the loading time of web applications by loading only the necessary code.
- **Advanced Features**: Webpack supports features like hot module replacement, tree shaking (removing unused code), and asset management.

### Why Do We Need Them?

Both `Parcel` and `Webpack` are used to:
- **Bundle Assets**: They combine various assets into a single or smaller number of files, reducing the number of HTTP requests and improving performance.
- **Optimize Code**: They optimize code by minifying and compressing files, which enhances load times and reduces the size of files served to users.
- **Transform Code**: They transform modern JavaScript (ES6+) and other languages or syntax into formats that are compatible with older browsers.

By using tools like `Parcel` or `Webpack`, developers can streamline their development workflow, improve application performance, and manage complex project dependencies more effectively.



### Q: Parcel Features

`Parcel` is known for its impressive set of features that enhance the development experience and optimize the build process. Some key features include:

* **HMR (Hot Module Replacement)**: Parcel tracks file changes using a file watcher algorithm and instantly reflects these changes in the application without a full reload.
* **File Watcher Algorithm**: Implemented in C++, this algorithm efficiently monitors file changes for quick updates.
* **Minification**: Automatically reduces the size of JavaScript, CSS, and HTML files by removing unnecessary characters and whitespace.
* **Code Cleaning**: Optimizes and cleans up code, improving performance and readability.
* **DEV and Production Builds**: Facilitates both development and production builds with optimized settings for each environment.
* **Super Fast Building Algorithm**: Leverages parallel processing and caching to ensure rapid build times.
* **Image Optimization**: Compresses and optimizes image assets to improve load times and performance.
* **Caching During Development**: Utilizes caching mechanisms to speed up the build process during development.
* **Compression**: Compresses files to reduce their size, which helps in faster load times.
* **Compatibility with Older Browsers**: Ensures that the output is compatible with older browser versions by transpiling code as necessary.
* **HTTPS in Development**: Supports HTTPS for local development, enhancing security.
* **Port Number**: Allows configuration of the development server's port number.
* **Consistent Hashing Algorithm**: Uses consistent hashing to manage and resolve module identifiers efficiently.
* **Zero Configuration**: Requires minimal setup and configuration, making it easy to get started.
* **Automatic Code Splitting**: Automatically splits code into smaller bundles, optimizing loading times by only loading the necessary parts.

These features collectively make `Parcel` a powerful tool for managing and optimizing modern web applications.


### Q: Installation Commands

- **Install Parcel**:
  To install `Parcel` as a development dependency, use the following command:

  ```sh
  npm install -D parcel
  ```
  The `-D` flag indicates that Parcel is being added as a development dependency.

- Parcel Commands :
    - For development build : To start a development server and build the project for development, use:
    ```
    npx parcel <entry_point> 
    ```
    Replace `<entry_point>` with the path to your entry file, such as `index.html or src/index.js`.
    - For production build :To build the project for production with optimizations, use:
    ```
    npx parcel build <entry_point> 
    ```
    Replace `<entry_point>` with the path to your entry file. This command will generate optimized, minified output suitable for production deployment.


## Q: What is `.parcel-cache`?

`.parcel-cache` is a directory used by `Parcel`, a web application bundler, to enhance build performance. 

### Purpose of `.parcel-cache`

- **Reduce Build Time**: The `.parcel-cache` directory stores cached information about your project from previous builds. This cache helps `Parcel` avoid re-parsing and re-analyzing files every time you build or rebuild your project.
- **Speed Up Development**: By leveraging this cache, `Parcel` can quickly access previously processed data, significantly speeding up build times during development.

The use of `.parcel-cache` is a key factor in why `Parcel` performs so efficiently, especially in development mode where frequent builds and changes occur.


## Q: What is `npx`?
A: `npx` is a tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

## Q: Difference Between `npm` and `npx`

| Feature                       | `npm`                                                       | `npx`                                                               |
|-------------------------------|-------------------------------------------------------------|---------------------------------------------------------------------|
| **Purpose**                   | Manages packages and dependencies                           | Executes binaries from Node modules                                 |
| **Installation**              | Installs packages globally or locally                       | Executes packages directly without installation                     |
| **Global Packages**           | `npm install -g <package>` installs globally                | Executes global packages without explicitly installing them         |
| **Local Packages**            | `npm install <package>` installs locally                    | Executes local binaries from `node_modules/.bin`                    |
| **Usage of Binaries**         | Requires installation or reference in scripts               | Directly runs binaries wthout needing a global or local installation|
| **Version Management**        | Use `npm install <package>@<version>` for specific versions | Use `npx <package>@<version>` to execute a specific version         |
| **Command Execution**         | `npm run <command>` for scripts in `package.json`           | `npx <package> <command>` for running packages directly             |
| **Configuration Management**  | Manages `package.json` and `package-lock.json`              | Runs commands with no changes to `package.json`                     |

### Key Points

- **`npm`** is primarily used for managing packages, including installation, updating, and version control. It handles package dependencies and manages global and local installations.
- **`npx`** is a utility for executing binaries from Node modules, whether they are installed globally or locally. It allows for temporary execution without managing global installations or adding to project dependencies.

This table should help clarify the primary differences between `npm` and `npx` and their respective use cases.



## Difference Between `dependencies` and `devDependencies`

In a `Node.js` project, `dependencies` and `devDependencies` are two types of dependencies that you can specify in your `package.json` file. They serve different purposes and are used in different contexts.

| Feature                | `dependencies`                                        | `devDependencies`                                 |
|------------------------|-------------------------------------------------------|---------------------------------------------------|
| **Purpose**            | Packages required for the application to run in production. | Packages needed only during development and testing. |
| **Usage**              | Used by the application in a live environment.        | Used for development tools, testing frameworks, and build tools. |
| **Installation Command** | `npm install` or `npm install <package>`               | `npm install --save-dev <package>` or `npm install -D <package>` |
| **In Production**      | Installed in production environments (e.g., on a server). | Not installed in production environments.         |
| **Examples**           | - `express` (web framework)                           | - `jest` (testing framework)                      |
|                        | - `mongoose` (MongoDB object modeling tool)           | - `webpack` (module bundler)                      |
|                        | - `react` (UI library)                               | - `babel` (JavaScript compiler)                   |
| **Impact on `package.json`** | Listed under the `dependencies` section.             | Listed under the `devDependencies` section.       |

### Key Points

- **`dependencies`**: These are essential for the application to function properly in a production environment. They include libraries and modules that are required for the core functionality of your application.

- **`devDependencies`**: These are used during the development process but are not needed in production. They include tools and libraries for testing, building, and other development-related tasks.

When you run `npm install` without any flags, both `dependencies` and `devDependencies` are installed. However, when deploying to production, you might choose to install only the `dependencies` to reduce the size of the deployment and avoid unnecessary packages.

Understanding the distinction between these two types of dependencies helps keep your project’s dependencies organized and ensures that only necessary packages are included in production builds.


## Q: What is `Tree Shaking`?

`Tree Shaking` is a term used in modern JavaScript development to describe the process of removing unused code during the build process. It is a dead code elimination technique used to optimize and reduce the size of the final output bundle.

### How It Works

- **Eliminates Unused Code**: `Tree Shaking` identifies and removes code that is not used or referenced in the application. This helps in reducing the amount of code that gets included in the final build, leading to smaller and more efficient bundles.

- **Static Analysis**: The technique relies on static analysis of the codebase. By analyzing the import/export statements and the references within the code, tools can determine which parts of the code are actually in use and which are not.

- **Optimizes Bundles**: By removing unnecessary code, `Tree Shaking` helps in creating leaner and faster-loading JavaScript bundles. This improves the performance of the application by reducing load times and resource usage.

### Benefits

- **Reduced Bundle Size**: Helps decrease the size of the JavaScript files served to the client, which can lead to faster page load times and improved performance.
  
- **Improved Performance**: By eliminating unused code, the application becomes more efficient, as the browser needs to parse and execute less JavaScript.

- **Cleaner Code**: Encourages better coding practices by removing code that is no longer needed or used.

### Example

In a module-based system, if you import only specific functions from a library, `Tree Shaking` can ensure that only those functions are included in the final build, while unused functions are excluded.

Overall, `Tree Shaking` is a valuable optimization technique in modern JavaScript tooling that contributes to better performance and efficiency of web applications.


## Q: What is `Hot Module Replacement`?
A: `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload.



## Q: What is `.gitignore`? What should we `add and not add` into it?
A: The `.gitignore file` is a text file that tells `Git` which files or folders to `ignore` in a project during `commit to the repository`.
The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, For security, the security key files and API keys should get added to the gitignore.
`package-lock.json` should `not add` into your `.gitignore` file.

The entries in this file can also follow a matching pattern.
```
* is used as a wildcard match
/ is used to ignore pathnames relative to the .gitignore file
# is used to add comments to a .gitignore file
```
This is an example of what the .gitignore file could look like:
```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```


## q:  Difference Between `package.json` and `package-lock.json`

| Feature                       | `package.json`                                            | `package-lock.json`                                      |
|-------------------------------|---------------------------------------------------------- |----------------------------------------------------------|
| **Purpose**                   | Configures project metadata and specifies dependencies    | Locks the exact versions of dependencies and their sub-dependencies |
| **Contains**                  | - Project metadata (name, version, description)           | - Exact versions of installed packages and their dependencies |
|                               | - Scripts (custom scripts for development and production) | - Dependency tree snapshot with resolved URLs and integrity hashes |
| **Dependency Versions**       | Uses version ranges (e.g., `^1.2.3`, `~1.2.3`)            | Records exact versions (e.g., `1.2.3`), ensuring consistency |
| **Usage**                     | Determines which dependencies to install based on version ranges | Ensures consistent installation of dependencies across environments |
| **Installation Command**      | `npm install` reads `package.json`                        | `npm install` uses `package-lock.json` to install exact versions |
| **Example Entry**             | ```json                                                   | ```json                                                  |
|                               | {                                                         | {                                                        |
|                               |   "name": "my-project",                                   |   "name": "my-project",                                 |
|                               |   "version": "1.0.0",                                     |   "version": "1.0.0",                                   |
|                               |   "dependencies": {                                       |   "dependencies": {                                     |
|                               |     "express": "^4.17.1"                                  |     "express": {                                        |
|                               |   }                                                       |       "version": "4.17.1",                              |
|                               | }                                                         |       "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz", |
|                               | ```                                                       |       "integrity": "sha512-..."                         |
|                               |                                                           |     }                                                    |
|                               |                                                           |   }                                                      |
| **Version Management**        | Flexible version ranges allowing for minor updates        | Fixed versions to avoid discrepancies across environments |
| **Generated By**              | Manually created and edited by developers                 | Automatically generated and updated by npm               |

### Summary

- **`package.json`**: Used to configure project metadata, scripts, and dependency version ranges. It allows flexibility in dependency versions.
- **`package-lock.json`**: Automatically generated to lock the exact versions of dependencies, ensuring consistent installations and reproducibility across different environments.

This table provides a clear comparison between `package.json` and `package-lock.json`, highlighting their distinct roles in managing project dependencies.


**~** or **^** in `package.json` file :
These are used with the versions of the package installed.

For example  in `package.json` file:
```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
```

* **~** : `Approximately equivalent to version`, will update you to all future patch versions, without incrementing the minor version.
* **^** : `Compatible with version`, will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development.


## Q: Why should I not modify `package-lock.json`?
A: `package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM. and also we can cross check the version of production and development. If something is working in local
but not on production



## Q: What is `node_modules` ? Is it a good idea to push that on git?
A: `node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path).
`Don't push node_modules`in github because it contains lots of files(more than 100 MB), it will cost you memory space.


## Q: What is the `dist` Folder?

The `/dist` folder, short for "distribution," is a directory used to store the final, optimized version of your application's code. This folder typically contains files that are ready for deployment in a production environment.

### Purpose of the `dist` Folder

- **Minimized Code**: The `/dist` folder holds minified and optimized versions of the source code. Minification reduces the size of the files by removing unnecessary characters, such as whitespace and comments, which helps in improving load times and performance in production.

- **Compiled Modules**: It includes compiled versions of the source code. For instance, if you're using a build tool like Webpack, Babel, or Parcel, these tools transform your source files (e.g., TypeScript, SCSS) into JavaScript and CSS that can be executed by web browsers.

- **Production Ready**: The contents of the `/dist` folder are what you deploy to your production environment. This folder often includes:
  - **JavaScript Bundles**: Consolidated and minified JavaScript files.
  - **CSS Files**: Compiled and minified CSS stylesheets.
  - **Assets**: Optimized images and other static resources.
  - **Source Maps**: (Optional) Files that map minified code back to the original source code for debugging purposes.


## Q: What is `browserslist`?
A: `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.
