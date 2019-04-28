## Demo app for first react app

Trying out the idea of a first react app to check if its feasible

### Steps to get here

#### Initial Setup

0. `npx create-react-app my-first-app`
1. `cd my-first-app`
2. Run `npm start` and it will open localhost:3000 in your browser
3. show what's generated

---

#### Changing and creating components and tests

0. Show what happens when you change `my-first-app/src/App.js` (change title, remove icon)
1. Create `MessageBoard.js` and `MessageBoard.test.js`
2. `yarn add react-testing-library`
3. write test for title
4. implement component
5. _Explain that this kind of test isn't particularly useful. But just showing how easy it is to test DOM in react. We'll look at more useful tests later_
6. Include in `App.js`
7. Cleanup `App.css`

---

#### Styling

0. Add a message with title and body. It's not very well styled.
1. _Explain styling with css classes, look at App.js again. Explain that this is not very scaleable, as your app grows, you need to be careful about name conflicts, etc._
2. There's an easier way
3. `yarn add styled-components`
4. Style the message card, message board, and message title
5. Pull out a component and add a second message

---

#### Conditionals

0. Add a message *without* a title
1. Change the message component to have a default title
2. Change the message component to not render the title at all

---

#### State and effects

1. _Explain messages wouldn't normally be hardcoded, they'd come from an API_.
2. Messages might be in the form `[{ title: 'string', content: 'string' }, ...]`
3. Hard code an array of messages, and use a map function to render them all
4. `import React, { useState, useEffect } from 'react';`
5. _Explain promises, async, await, fetch library_ (no API for example, no fetch needed)
6. Create a service to fetch messages from the API.
7. Use the state and effect hooks to import messages from an API.
8. Lack of feedback when loading is bad, let's add a spinner
9. _Explain (briefly) css spinner_
10. Extract state and effect hooks into their own hook/file
