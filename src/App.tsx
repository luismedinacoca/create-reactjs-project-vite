import { useRef, type FormEvent } from "react";

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("you process....");
    console.log(inputRef.current?.value);
  };

  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} name="user" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
