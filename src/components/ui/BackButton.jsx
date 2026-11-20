import { useNavigate } from 'react-router-dom'

import { styled as styledMUI } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'

const BackButton = () => {
	const navigate = useNavigate()
	const backToPreviousPageHandler = () => {
		navigate(-1)
	}

	return (
		<StyledIconButton className='back' variant='outlined' onClick={backToPreviousPageHandler} aria-label='Torna indietro'>
			<ArrowBackIosNewRoundedIcon />
		</StyledIconButton>
	)
}

export default BackButton

const StyledIconButton = styledMUI(IconButton)({
	color: '#F9F6EE',
	backgroundColor: 'rgba(0, 0, 0, 0.6)',
	borderColor: '#F9F6EE',
	minWidth: '44px',
	minHeight: '44px',
	transition: 'background-color 0.3s',

	'& .MuiSvgIcon-root': {
		fontSize: '18px',
	},

	'@media (min-width: 700px)': {
		'& .MuiSvgIcon-root': {
			fontSize: '20px',
		},
	},

	'&.back': {
		marginTop: '25px',
	},

	'&:hover': {
		backgroundColor: '#000',
	},
})
