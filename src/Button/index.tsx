import { useState } from "react"
import './index.css';
const Button = (props: { contents: string }) => {
  const [count, setCount] = useState(0);
  return <div className="button-container"><button onClick={() => setCount(count + 1)}>count: {count}</button>
    <div>{props.contents}</div>
  </div>
}

export default Button;

export const name = 'button'
export const testFunc = async () => await Promise.resolve(1)
export class Dong { }

