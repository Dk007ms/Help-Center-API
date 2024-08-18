## React Assignment

### 1. **How can you implement shared functionality across a component tree?**

To implement shared functionality across a component tree, I would use the Context API in React. This allows me to create a context and wrap my components with a Context Provider, which makes the shared data or functions available to all the components within that provider. This way, I can avoid passing props down manually through each level of the component tree, making my code cleaner and easier to maintain.

### 2. **Why is the `useState` hook appropriate for handling state in a complex component?**

I find the `useState` hook appropriate for handling state in a complex component because it lets me create and manage state directly within functional components. It's straightforward to use and helps in keeping the component's UI in sync with its data by re-rendering whenever the state changes. Even in more complex components, I can use multiple `useState` hooks to manage different pieces of state separately, which keeps the logic organized and easy to understand.


