## Demo app for first react app

Trying out the idea of a first react app to check if its feasible

### Steps to get here

0. `npx create-react-app my-first-app`
1. `cd my-first-app`
2. Run `npm start` and it will open localhost:3000 in your browser
3. show what's generated

---

0. Show what happens when you change `my-first-app/src/App.js` (change title, remove icon)
1. Create `MessageBoard.js` and `MessageBoard.test.js`
2. `yarn add react-testing-library`
3. write test for title
4. implement component
5. Explain that this kind of test isn't particularly useful. But just showing how easy it is to test DOM in react. We'll look at more useful tests later
6. Include in `App.js`
7. Cleanup `App.css`

---

0. Add a message with title and body. It's not very well styled.
1. Explain styling with css classes, look at App.js again. Explain that this is not very scaleable, as your app grows, you need to be careful about name conflicts, etc.
2. There's an easier way
3. `yarn add styled-components`
4. Style the message card, message board, and message title
5. Pull out a component and add a second message

---

0. Add a message *without* a title
1. Change the message component to have a default title
2. Change the message component to not render the title at all
