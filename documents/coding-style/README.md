# Coding Style

The code will follow the coding style of Eslint, including some rules:

## 1. Import Order:


Follow rules from [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort) and the config is from [This Article](https://dev.to/julioxavierr/sorting-your-imports-with-eslint-3ped)..

## 2. Storing and API Calling:
  1. We will use `Jotai` to store the global state of the app.

## 3. Component's Styling:
For components, we will use Shadcn UI for the UI library.

We will use CSS Modules and TailwindCSS to style our components. The reason why we still keep using CSS Modules is that we can use the same class name in different components without worrying about the conflict. The config is from [Next.js](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css).

1. Use the CSS module.
2. Global is only allowed to be used in the following cases:

   a. Custom class of NPM Package.

   b. Custom class of other modules.

3. Naming rules:
   a. Name the class using Pascal case (`styles.MyClass`)

   b. Use CSS Modules exclusively. Do not use global CSS for self-written code. Global CSS should only be used when referencing a class from another module outside of the component, or when using a class generated by a package.

   c. The style file should be named [Component Name].module.css.
4. Order of CSS:
   a. TailwindCSS (⚠️)
   b. CSS display, width, height, flex-grow, padding, margin, postion (⚠️)
   c. Border, background, shadow, (UI css block)
   d. UI CSS for text: font, color, text-align, text-transform, line-height (Sort by alphabet) (⚠️)
   e. Animation: animation, @frame, transition, transform.
   f. @media
   g. `&:hover`, `&:active`, `&:focus`, `&:disabled`
   h. `&-XXX`

## 4. Function utils naming:

For normal function, we will use this structure, that will allow us not to modify the function on other files when we need to add more parameters.

  ```js
  // Bad
  function action(x, y, isShowWarning, isXXX) {
    ...
  }
  ```

   ```js
   function action(values = {}, options = {}) {
   	const { x, y } = values;
   	const { isShowWarning, isXXX } = options;
   	...
   	return { value }
   }
   ```

Every function will be written in a single file. The file name will be the function name.

## 5. Commenting:
We use a consistent commenting style throughout our codebase. There are three prefixes that we use for comments:

* TODO: Use this prefix when there is something that needs to be done in the code, but you haven't had a chance to tackle it yet.
* FIXME: Use this prefix when there is a bug or error in the code that needs to be fixed.
* EX: Use this prefix when you want to provide an example or additional context in your code comments. (EX: Example/Explanation)
