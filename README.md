# rtl-10-4-4-repro

Minimum repro case for a potential bug with `jest.useFakeTimers` and `useEffect`.

These are just basic `create-react-app` projects with the added code in `src/repro`. 
The only difference between the `working` and `failing` folders is the `@testing-library/react` version.
Run `npm test` in each folder to see the difference.

See https://github.com/testing-library/react-testing-library/issues/738
