
import './loader.css'




export const LoaderSpinner = () => {
	return (
	<div>
		<div style={{
		display: 'flex',
		justifyContent: 'center',
		margin: '.5rem',
		width: '1140px',
		height: '95%'
	}}>
			<div className="lds-default">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		</div>
		<div>Загружаем данные</div>
	</div>


	)
}