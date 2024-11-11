# E2E

E2E testing Cypress Playwright

## Getting Started

Choose a one of the project directories (cypess or playwright) and follow the instructions below.

```
npm install
npm start
```

## Running Cypress tests

In cypress project directory, you can run:

```
npx cypress open
```

Please note you should have an app server running on port 3000.

## Running Playwright tests

In playwright project directory, you can run the following

To see the test logs in the terminal:

```
npx playwright test
```

To see HTML Test Reports:

```
npx playwright show-report
```

Running the tests in UI Mode:
```
npx playwright test --ui
```

Please note you do not need to have a server running for this one.