import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; //아무것도 리턴하지 않는다는 함수를 의미한다.
};

const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hellog, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;

//React.FC를 사용 할 때는 props의 타입을 Generics로 넣어서 사용한다. 이렇게 사용해서 얻을 수 있는 이점은 두가지이다.
//첫번째는,props에 기본적으로 children이 들어가 있다.
//두번째는 컴포넌트의 defaultProps, propTypes, contextTypes를 설정 할 때 자동완성이 될 수 있다는 것이다.

//단점도 존재한다. children이 옵셔널 형태로 들어가 있다 보니까 어찌 보면 컴포넌트의 props의 타입이 명백하지 않다. 예를 들어 어떤 컴포넌트는 children이 무조건 있어야 하는 경우도 있을 것이고, 어떤 컴포넌트는 children이 들어가면 안되는 경우도 있을 것이다. React.FC를 사용하면 기본적으로는 이에 대한 처리를 제대로 못하게 된다. 만약 하고 싶다면 결국 Props타입 안에 children을 설정해야한다.

//그리고 React.FC는 defaultProps가 제대로 작동하지 않는다.

//위와 같은 이슈때문에 React.FC를 쓰지 않는 것을 권장
//컴포넌트에 만약 있어도 되고 없어도 되는 props가 있다면 ?문자를 사용하면된다.
