import './App.css';
import { useState } from 'react'


const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export default function App () {


const [result, setResult] = useState('')
const [isCalculate, setIsCalculate] = useState(false)

const handleClick = (event) => {
	setResult(result.concat(event.target.value))
	setIsCalculate(false)
}

const clear = () => {
	setResult('')
	setIsCalculate(false)
}

const calculate = () => {
	try {
		setResult(String(eval(result)))	
		setIsCalculate(true)
	} catch (error) {
		alert('Некорректное выражение')
		setTimeout(() => {
			setResult('')
		}, 1500);
	}
}

const calculateClassName = isCalculate ? 'equal done' : 'equal';


	return (
		<div className='container'>
			<div className={calculateClassName}>
				<form>
					<input type={'text'} value={result} disabled/>
				</form>
			</div>
			<div className='keypad'>
				{buttons.map((button) =>
					<button className={'number'} key={button} value={button} onClick={handleClick}>{button}</button>
				)}
				<button className={'symbol'} value={'+'} onClick={handleClick}>{' + '}</button>
				<button className={'symbol'} value={'-'} onClick={handleClick}>{' - '}</button>
				<button className={'equal'} onClick={calculate}>{' = '}</button>
				<button className={'clear'} onClick={clear}>{' C '}</button>
			</div>
		</div>
	);
};

// {buttons.numbers.map((number) => {
// 	<li><button>{number.value}</button></li>
// })}

{/* <div className='keypad'>
{buttons.map((button) =>
	<button className={'number'} key={button} value={button} onClick={(event) => {setResult(result + event.target.value)}}>{button}</button>
)}
<button className={'symbol'} value={'+'} onClick={(event) => {setResult(result + ' + ')}}>{' + '}</button>
<button className={'symbol'} value={'-'} onClick={(event) => {setResult(result + ' - ')}}>{' - '}</button>
<button className={'equal'} onClick={() => setResult(String(eval(result)))}>{' = '}</button>
<button className={'clear'} onClick={() => setResult("0")}>{' C '}</button>
</div> */}