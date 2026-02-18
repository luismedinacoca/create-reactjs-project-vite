
## 🧳 Section 01: *Fundamentos de React con Typescript*

<br>

## 🔧 031. Lesson 031 — *Eventos: onClick*

[🧳 Section 06: *Events*](#-section-06-events)

### 📑 Table of Contents:
- [031. Lesson 031 — *Eventos: onClick*](#-031-lesson-031--eventos-onclick)
- [031.1 Context](#-0311-context)
- [031.2 Updating code/theory according the context](#️-0312-updating-codetheory-according-the-context)
  - [031.2.1 App entry point with MyButton component](#-03121)
  - [031.2.2 Basic onClick — function reference (no parameters)](#-03122)
  - [031.2.3 onClick with parameters — anonymous wrapper function](#-03123)
  - [031.2.4 (Reserved)](#-03124)
- [031.3 Issues](#-0313-issues)
- [031.4 Pending Fixes (TODO)](#-0314-pending-fixes-todo)

### 🧠 031.1 Context:

The `onClick` event is one of the most fundamental **Synthetic Events** in React. It allows components to respond to user clicks on DOM elements such as buttons, divs, links, and more. Under the hood, React wraps the native browser `click` event in a `SyntheticEvent` object, providing a consistent cross-browser API.

**Key Concepts:**

1. **Synthetic Events** — React normalises all native DOM events into `SyntheticEvent` wrappers. `onClick` is one of them and behaves identically across all browsers.
2. **Function Reference vs. Function Call** — You must pass a *reference* to a function (`onClick={handleClick}`), **not** a function *call* (`onClick={handleClick()}`). Calling the function directly causes it to execute during render instead of on click.
3. **Anonymous Wrapper Functions** — When the handler needs arguments, wrap it in an arrow function: `onClick={() => handleClick("msg")}`. This defers execution until the click actually happens.
4. **Handler Naming Convention** — The common convention is to name handlers with the `handle` prefix (e.g., `handleClick`, `handleSubmit`), matching the `on` prefix of the prop (`onClick`, `onSubmit`).
5. **Event Object** — React automatically passes the `SyntheticEvent` as the first argument to the handler. You can access it explicitly: `const handleClick = (e: React.MouseEvent) => { ... }`.

**Advantages:**
- Simple, declarative syntax for attaching click behaviour.
- Cross-browser consistency via `SyntheticEvent`.
- Easy to compose — handlers can be extracted, shared, or parameterised.
- TypeScript integration provides full type-safety for event objects.

**Disadvantages / Gotchas:**
- Calling the handler with `()` in JSX (`onClick={handleClick()}`) triggers it **at render time**, not on click. This is one of the most common beginner mistakes.
- Creating a new anonymous arrow function on every render (`onClick={() => fn()}`) generates a new reference each time, which can cause unnecessary re-renders in child components that rely on reference equality (e.g., when wrapped in `React.memo`).
- Forgetting to type the event parameter in TypeScript can lead to implicit `any` warnings.

**When to Consider Alternatives:**
- For form submissions, prefer `onSubmit` on the `<form>` element over `onClick` on a submit button.
- For keyboard-accessible interactions on non-interactive elements (e.g., `<div>`), add `onKeyDown`/`onKeyUp` alongside `onClick` and ensure proper ARIA roles.
- For complex gesture handling (drag, long-press), consider dedicated libraries such as `react-use-gesture`.

In this project, `onClick` is demonstrated in `src/components/Mybutton.tsx`, progressing from a simple no-argument handler (031.2.2) to a parameterised handler using an anonymous wrapper (031.2.3).

### ⚙️ 031.2 Updating code/theory according the context:

#### **Summary**
- This section demonstrates how to wire up a basic `onClick` event handler in a React/TypeScript component.
- It starts with the top-level `App.tsx` that renders a `MyButton` component (031.2.1).
- It then shows the simplest handler pattern — passing a function reference without arguments (031.2.2) — and explains the pitfall of accidentally *calling* the function.
- Finally, it shows how to pass arguments to the handler via an anonymous arrow function (031.2.3).
- Subsection 031.2.4 is currently empty / reserved.

#### 031.2.1 App entry point — rendering the `MyButton` component

**Subsection Summary**
- Shows the root `App.tsx`, which imports and renders the `MyButton` component.
- Sets up the page heading (`<h1>Eventos</h1>`) to provide context for the lesson topic.
- Uses a React Fragment (`<>...</>`) as the top-level wrapper.

```jsx
/* src/App.tsx */
import "./App.css";
import MyButton from "./components/Mybutton";

function App() {
  return (
    <>
      <h1>Eventos</h1>
      <MyButton />
    </>
  );
}

export default App;
```

#### 031.2.2 Basic `onClick` — passing a function reference (no parameters)

**Subsection Summary**
- Introduces the basic `onClick` pattern: defining a `handleClick` function and passing its **reference** (not its invocation) to the `onClick` prop.
- The handler simply shows a browser `alert` to confirm the click was registered.
- Highlights the critical distinction between `onClick={handleClick}` (correct) and `onClick={handleClick()}` (incorrect — executes immediately during render).
- The follow-up code block asks the reader to reason about what happens when parentheses are added.

```jsx
/* src/components/Mybutton.tsx */
import "./MyButton.css";

const Mybutton = () => {
  const handleClick = () => {                               // 👈🏽 ✅ (1)
    alert("Diste click acá!");
  };

  return (
    <div>
      <button className="btn" onClick={handleClick}>        {/* 👈🏽 ✅ (2) */}
        my button
      </button>
    </div>
  );
};

export default Mybutton;
```

* `onClick` just need the function reference only.

> What would happen when user adds `()`:
```tsx
return (
    <div>
        <button className="btn" onClick={handleClick()}>    {/* 👈🏽 ✅ (1) */}
            my button
        </button>
    </div>
)
```

#### 031.2.3 `onClick` with parameters — using an anonymous wrapper function

**Subsection Summary**
- Extends the handler to accept a `message` parameter (typed as `string`).
- Because the handler now requires an argument, you can no longer pass a bare reference; instead, an **anonymous arrow function** wraps the call: `onClick={() => handleClick("Diste click!")}`.
- Demonstrates the standard React pattern for passing custom data into event handlers without triggering them at render time.

```jsx
/* src/components/Mybutton.tsx */
import "./MyButton.css";

const Mybutton = () => {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <div>
      <button className="btn" onClick={() => handleClick("Diste click!")}>
        my button
      </button>
    </div>
  );
};

export default Mybutton;
```

* `handleClick` has parameters
* `onClick` must need an `anonymous` function.

#### 031.2.4 (Reserved)
```jsx
/*  */

```

### 🐞 031.3 Issues:

- **Naming inconsistency**: The file is named `Mybutton.tsx` but the import alias in `App.tsx` is `MyButton` (capital B). This works because the default export is not name-bound, but it creates a confusing mismatch between the file name and the component reference.
- **Empty subsection 031.2.4**: Subsection 031.2.4 contains an empty code block with no content.
- **Missing `React.MouseEvent` typing**: None of the handler examples demonstrate accessing or typing the native event object (`e: React.MouseEvent<HTMLButtonElement>`).

| Issue | Status | Log/Error |
|---|---|---|
| File / import naming mismatch | ⚠️ Identified | `src/App.tsx:2` imports as `MyButton` but file is `Mybutton.tsx` — inconsistent casing may cause issues on case-sensitive file systems (e.g., Linux CI). |
| Empty subsection 031.2.4 | ℹ️ Low Priority | `docs/LECTURE_STEPS.md` — 031.2.4 contains only a blank code block; consider adding an example using the `React.MouseEvent` object or removing the subsection. |
| No event-object typing example | ℹ️ Informational | `src/components/Mybutton.tsx:4` — handler omits the `event` parameter. A brief example showing `(e: React.MouseEvent<HTMLButtonElement>) => { ... }` would strengthen the lesson. |

### 🧱 031.4 Pending Fixes (TODO)

- [ ] Rename `src/components/Mybutton.tsx` to `src/components/MyButton.tsx` (and update the import in `src/App.tsx:2`) to fix the casing inconsistency.
- [ ] Add a typed-event example in subsection 031.2.4 showing `React.MouseEvent<HTMLButtonElement>` usage, e.g.:
  ```tsx
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.textContent);
  };
  ```
- [ ] Add an English explanation in subsection 031.2.2 answering the "What would happen…" question (the alert fires immediately on render; subsequent renders may loop or error).

[↑ top - 031. Lesson 031 — *Eventos: onClick*](#-031-lesson-031--eventos-onclick)

---

<br>
<br>
<br>

🔥 🔥 🔥 

<br>

## 🔧 XXX. Lesson XXX — *{{TITLE_NAME}}*

### 🧠 XXX.1 Context:

### ⚙️ XXX.2 Updating code/theory according the context:

#### XXX.2.1
```jsx
/*  */

```

#### XXX.2.2
```jsx
/*  */

```

#### XXX.2.3
```jsx
/*  */

```

#### XXX.2.4
```jsx
/*  */

```

### 🐞 XXX.3 Issues:
- **first issue**: something..

| Issue | Status | Log/Error |
|---|---|---|

### 🧱 XXX.4 Pending Fixes (TODO)

- [ ]