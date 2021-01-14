# React Testing strategies

![react-testing-strategies CI](https://github.com/jferrl/react-testing-strategies/workflows/react-testing-strategies%20CI/badge.svg)
[![codecov](https://codecov.io/gh/jferrl/react-testing-strategies/branch/master/graph/badge.svg?token=NNKwNluuyS)](https://codecov.io/gh/jferrl/react-testing-strategies)

## About The Proyect

This project has the intention of being a practical guide on how to make an effective testing in a React.js application, covering the testing of the different casuistics from the unit point of view to E2E.

### Built With

* [React](https://reactjs.org/)
* [Redux](https://react-redux.js.org/)
* [Jest](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Cypress](https://www.cypress.io/)
* [Storybook](https://storybook.js.org/)
* [Chromatic](https://www.chromatic.com/)
* [Bootstrap](https://getbootstrap.com)

## Getting Started

if you want to use this project as a playground, you just have to pull locally and start playing.

### Installation

1. Clone the repo

    ```sh
    git clone https://github.com/jferrl/react-testing-strategies.git
    ```

2. Install NPM packages

    ```sh
    npm install
    ```

3. Run

    ```sh
    npm run start
    ```

## How to test a React.js app

### Test Pyramid

Related Posts:

* [Martin Fowler - TestPyramid](https://martinfowler.com/bliki/TestPyramid.html)
* [Kent C. Dodds - Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests)
* [Kent C. Dodds - Write tests. Not too many. Mostly integration](https://kentcdodds.com/blog/write-tests)
* [Mike Wacker - Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

![TestPyramid](https://kentcdodds.com/static/c56de32357ab41ab66d6feb2dfaec567/00d43/testing-trophy.png)

### Static testing

Catch typos and type errors as you write/transpile the code.

* Use of TypeScript ([TypeScript](https://www.typescriptlang.org/))
  
* Linter (TSLint, ESLint) (pd: TSLint is going to be deprecated, but I like it a lot and I don't want to stop using it :sob:)
  
* Configure your proyect with a good set of linting rules [Linting rules](https://github.com/jferrl/react-testing-strategies/blob/master/tslint.json)

#### Create React + TypeScript proyect

[Create React App - Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)

```sh
    npx create-react-app my-app --template typescript
```

or

```sh
    yarn create react-app my-app --template typescript
```

### Unit + Integration testing

Unit: Verify that individual, isolated parts work as expected.
Integration: Verify that several units work together in harmony.

#### Shallow rendering vs full rendering

> The more your tests resemble the way your software is used, the more confidence they can give you.
>
> Kent C. Dodds - <https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests>

Related Posts:

* [Kent C. Dodds - Why I Never Use Shallow Rendering](https://kentcdodds.com/blog/why-i-never-use-shallow-rendering)

*Why developers use shallow rendering ?*

1) For calling methods in React components
   * This is a great reason to use shallow rendering, but it's a bad testing practice testing our react application.
2) It seems like a waste to render all of the children of each component under test, for every test.
3) For actual unit testing. Testing composed components introduces new dependencies that might trigger an error while the unit itself might still work as intended.

#### Page Object Pattern

A page object wraps an HTML page, or fragment, with an application-specific API, allowing you to manipulate page elements without digging around in the HTML.

![PageObject](https://martinfowler.com/bliki/images/pageObject/pageObject.png)

* [Martin Fowler - PageObject](https://martinfowler.com/bliki/PageObject.html)

### E2E testing

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@jferrl](https://twitter.com/jferrl) - jorgeferrerolinacero@gmail.com

Project Link: [https://github.com/jferrl/react-testing-strategies](https://github.com/jferrl/react-testing-strategies)
