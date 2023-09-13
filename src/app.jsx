import { useState } from 'preact/hooks'
import style from './app.css?inline'
import axios from 'axios';

export function Home() {
	const [advice, setAdvice] = useState("");
	const [adviceId, setAdviceId] = useState(0);

	axios.get('https://api.adviceslip.com/advice')
		.then(function (response) {
			setAdvice(response.data.slip.advice);
			setAdviceId(response.data.slip.id);
		});

	function handleClick() {
		axios.get('https://api.adviceslip.com/advice')
			.then(function (response) {
				setAdvice(response.data.slip.advice);
				setAdviceId(response.data.slip.id);
			});
	}



	return (
			<div class="adviceCard">
				<p class="adviceNumber">ADVICE #{adviceId}</p>
				<h2>"{advice}"</h2>
				<div class="centralalign">
					<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>


					<button onClick={handleClick} class="nextBtn" >
						<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
					</button></div>
			</div>
	)

}
