import inputStyle from './index.module.css';

const Input = () => {
  return <div className={inputStyle['input-container']}>
    <span className="label">input anything: </span>
    <input></input>
  </div>
}

export default Input;