Video Playlist: https://www.youtube.com/watch?v=uPXn9S31o7Q&list=PL4cUxeGkcC9gU_GvFygZFu0aBysPilkbB
Github repo: https://github.com/iamshaunjp/solid-js-tutorial

https://www.solidjs.com/guides/getting-started#try-solid
https://docs.solidjs.com/configuration/typescript

ESLint and prettier:
https://www.reddit.com/r/solidjs/comments/z068to/solidjs_typescript_eslint_prettier_setup/
https://khalilstemmler.com/blogs/tooling/prettier/
https://khalilstemmler.com/blogs/tooling/enforcing-husky-precommit-hooks/
https://prettier.io/docs/en/ignore.html

To add tailwind:
https://tailwindcss.com/docs/guides/solidjs

In solid the function does not re render again and again unlike react.
Here the component function runs once only.
After that only the value that is subscribed to signals only changes without the full re render.

There is no virtual dom in solidjs.

State changes happens using createSignal, which retuns a getter and setter functions.
For complex nested objects or arrays we use createStore instead of createSignal.

Solid js Routing usage:
https://docs.solidjs.com/solid-router/concepts/layouts
https://github.com/solidjs/solid-router?tab=readme-ov-file#set-up-the-router

