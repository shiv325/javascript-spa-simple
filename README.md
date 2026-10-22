# Vanilla SPA
A simple example of a Single Page Application using Javascript, HTML, and CSS.

Tools used in this example are:
* Webpack
* Sass

# Installation

Install dependencies, including the local `npm-check-updates` CLI:
```shell
npm ci
```

Then run the app and checks:
```shell
npm start # to execute in development mode at http://localhost:8080
npm run build # to compile project to production
npm run lint # to lint JavaScript source and webpack configuration
npm test # to run the built-in Node.js test suite (Node.js 18+; CI uses Node.js 20)
npm run audit:fix # to apply non-breaking dependency security fixes
npm run check:updates # to check for newer dependency versions with ncu
npm run update:packages # to update dependency ranges in package.json with ncu
```

After updating package ranges, run `npm install` to refresh `package-lock.json`, then run the tests and build.