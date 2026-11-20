import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styled as styledMUI } from '@mui/system'

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded'
import AddRoundedIcon from '@mui/icons-material/AddRounded'

const Controls = ({ onVideoHandle, isAddedToWatchList, onRemove, onAdd }) => {
	return (
		<StyledControls>
			<StyledButton onClick={onVideoHandle} className='play' variant='contained' startIcon={<PlayArrowRoundedIcon />}>
				RIPRODUCI
			</StyledButton>

			<StyledButton onClick={onVideoHandle} className='trailer' variant='outlined' startIcon={<PlayArrowRoundedIcon />}>
				TRAILER
			</StyledButton>

			{isAddedToWatchList && (
				<StyledIconButton
					className='remove'
					variant='outlined'
					onClick={onRemove}
					aria-label='Rimuovi dalla mia lista'
					title='Rimuovi dalla mia lista'>
					<DoneRoundedIcon />
				</StyledIconButton>
			)}

			{!isAddedToWatchList && (
				<StyledIconButton
					className='add'
					variant='outlined'
					onClick={onAdd}
					aria-label='Aggiungi alla mia lista'
					title='Aggiungi alla mia lista'>
					<AddRoundedIcon />
				</StyledIconButton>
			)}
		</StyledControls>
	)
}

Controls.propTypes = {
	onVideoHandle: PropTypes.func,
	isAddedToWatchList: PropTypes.bool,
	onRemove: PropTypes.func,
	onAdd: PropTypes.func,
}

export default Controls

const StyledControls = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px;
	margin-bottom: 10px;
`

const StyledButton = styledMUI(Button)({
	fontWeight: 'normal',
	fontSize: '13px',
	minHeight: '44px',
	transition: 'color 0.3s, background-color 0.3s, border 0.3s',

	'& .MuiSvgIcon-root': {
		fontSize: '17px',
	},

	'@media (min-width: 800px)': {
		fontSize: '14px',

		'& .MuiSvgIcon-root': {
			fontSize: '20px',
		},
	},

	'@media (min-width: 1000px)': {
		fontSize: '16px',
	},

	'&.play': {
		color: '#000',
		backgroundColor: '#F9F6EE',
		minWidth: '125px',

		'&:hover': {
			color: '#F9F6EE',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
	},

	'&.trailer': {
		color: '#F9F6EE',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		border: '1px solid rgba(249, 246, 238, 0.35)',
		minWidth: '125px',

		'&:hover': {
			backgroundColor: 'rgb(0, 0, 0)',
			border: '1px solid rgb(0, 0, 0)',
		},
	},
})

const StyledIconButton = styledMUI(IconButton)({
	color: '#F9F6EE',
	backgroundColor: 'rgba(0, 0, 0, 0.6)',
	border: '1px solid rgba(249, 246, 238, 0.35)',
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

	'&:hover': {
		backgroundColor: '#000',
	},
})
