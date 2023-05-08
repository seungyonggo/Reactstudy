import { useInput } from "../useInput/useInput";

function displayMessage(message) {
  alert(message);
}

function Custom1() {
  const [inputValue, handleChange, handleSubmit] = useInput("", displayMessage);

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default Custom1;
