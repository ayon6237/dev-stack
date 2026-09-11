# Dev Stack Builder

A responsive web application that allows users to explore different web development technologies and build their own technology stack by selecting their preferred technologies.

## Project Description

Dev Stack Builder is a React-based technology selection website where users can explore popular frontend, backend, database, programming language, styling, DevOps, and development tools.

Users can add technologies to their personal stack, remove individual technologies, remove all selected technologies, and get notifications for different actions.

The technology information is loaded dynamically from a JSON file.

## Technologies Used

* React.js
* JavaScript
* Tailwind CSS
* DaisyUI
* React Toastify
* JSON
* Vite

## Key Features

### 1. Explore Technologies

Users can explore different technologies with their name, category, description, rating, difficulty level, icon, and badge.

### 2. Build Your Own Stack

Users can add technologies to their personal stack without adding the same technology multiple times. They can also remove individual technologies or remove all selected technologies.

### 3. Toast Notifications

The application provides toast notifications for important actions such as adding a technology, removing a technology, attempting to add a duplicate technology, and removing all technologies.


# React Questions & Answers

## 1. What is the difference between props and state?

**Props** and **state** are both used to manage data in React, but they have different purposes.

**Props** are used to pass data from a parent component to a child component. Props are read-only and should not be modified by the child component.

**State** is data that is managed inside a component. When state changes, React re-renders the component.

Example:

```jsx
function User({ name }) {
  const [age, setAge] = useState(20);

  return <h2>{name} - {age}</h2>;
}
```

Here, `name` is a **prop** and `age` is a **state**.

---

## 2. What is the difference between state and props?

The main difference is that **props come from the parent**, while **state is managed by the component itself**.

* Props are passed from parent to child.
* Props are read-only.
* State belongs to the component.
* State can be changed using a state setter function.
* Changing state causes the component to re-render.

For example:

```jsx
const [count, setCount] = useState(0);
```

Here, `count` is state and `setCount` changes the state.

---

## 3. What is the purpose of useEffect in React?

`useEffect` is a React Hook used to perform **side effects** in a component.

Side effects can include:

* Fetching data from an API
* Setting up event listeners
* Updating the document title
* Working with timers
* Subscribing to external services

For example, in this project `useEffect` is used to fetch technology data from the JSON file:

```jsx
useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    });
}, []);
```

The empty dependency array `[]` means the effect runs when the component is initially rendered.

---

## 4. What is the difference between useState and useEffect?

`useState` is used to **store and manage data**, while `useEffect` is used to **perform side effects**.

For example:

```jsx
const [data, setData] = useState([]);
```

Here, `useState` stores the technology data.

And:

```jsx
useEffect(() => {
  fetch("/data.json");
}, []);
```

Here, `useEffect` performs the data-fetching operation.

So simply:

**useState → manages component data**

**useEffect → performs side effects**

---

## 5. What is conditional rendering in React?

Conditional rendering means showing different UI elements depending on a condition.

For example, in this project we show a loading spinner while the technology data is being loaded:

```jsx
if (loading) {
  return <p>Loading...</p>;
}
```

We also use conditional rendering for the stack:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <StackItem />
)}
```

If the stack is empty, the empty message is shown. Otherwise, the selected technologies are displayed.

---

## 6. What is the purpose of keys in React lists?

Keys help React identify which items in a list have changed, been added, or removed.

For example:

```jsx
{data.map((item) => (
  <TechnologyList
    key={item.id}
    item={item}
  />
))}
```

Here, `item.id` is used as the key.

Keys should be unique among the items in a list. Using a proper key helps React efficiently update the UI when the list changes.

---

## 7. What is lifting state up in React?

Lifting state up means moving state from a child component to a common parent component so that multiple child components can share and use the same data.

In this project, the `stack` state is stored in the `TechnologyCard` parent component:

```jsx
const [stack, setStack] = useState([]);
```

Then the stack data and functions are passed to child components through props:

```jsx
<TechnologyList
  item={item}
  stack={stack}
  onAdd={addToStack}
/>

<YourStack
  stack={stack}
  onRemove={removeFromStack}
  onRemoveAll={removeAll}
/>
```

This allows both `TechnologyList` and `YourStack` to work with the same stack data.

Therefore, this is an example of **lifting state up**.
