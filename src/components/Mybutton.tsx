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
