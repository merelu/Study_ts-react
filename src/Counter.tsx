import React, { useState } from "react";

function Counter() {
  //제네릭으로 사용 useState는 제네릭을 사용하지 않아도 타입을 잘 유추하기 때문에 생략해도 상관없다.
  //상태가 null일수도 있고 아닐수도 있을때 제네릭을 활용하시면 좋다.
  //   type Information = { name: string; description: string };
  //   const [info, setInformation] = useState<Information | null>(null);
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const ondecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={ondecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
