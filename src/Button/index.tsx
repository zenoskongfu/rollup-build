import { useState } from "react"

const Button = (props: { contents: string }) => {
  const [count, setCount] = useState(0);
  return <div><button onClick={() => setCount(count + 1)}>count: {count}</button>
    <div>{props.contents}</div>
  </div>
}

export default Button;

