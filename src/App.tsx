import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import Counter_useReducer from "./Counter_useReducer";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <>
      <Greetings name="hwang" onClick={onClick} />
      <Counter />
      <Counter_useReducer />
      <MyForm onSubmit={onSubmit} />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </>
  );
}

export default App;
