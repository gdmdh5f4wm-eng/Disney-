import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Box, Typography, Avatar, Button, styled as styledMUI } from '@mui/material'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

function ProfileContent({ user, signoutHandler }) {
	return (
		<ProfileIconBox>
			<UserName sx={{ display: { xs: 'none', md: 'flex' } }}>{user.userName}</UserName>
			{user.userName && <Avatar alt='Icona profilo'>{user.userName.trim().charAt(0).toUpperCase()}</Avatar>}
			<LogoutLink to='/signin'>
				<StyledButton variant='outlined' className='signout' onClick={signoutHandler} aria-label='Esci' title='Esci'>
					<LogoutRoundedIcon />
				</StyledButton>
			</LogoutLink>
		</ProfileIconBox>
	)
}

ProfileContent.propTypes = {
	user: PropTypes.shape({
		userName: PropTypes.string,
	}).isRequired,
	signoutHandler: PropTypes.func.isRequired,
}

export default ProfileContent

const ProfileIconBox = styledMUI(Box)({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	flexGrow: 0,
	gap: '4px',

	'& .MuiAvatar-root': {
		width: '34px',
		height: '34px',
		fontSize: '15px',
	},

	'@media (min-width: 600px)': {
		gap: '0',
		'& .MuiAvatar-root': {
			width: '40px',
			height: '40px',
			fontSize: '18px',
		},
	},
})

const UserName = styledMUI(Typography)({
	padding: '12px',
})

const LogoutLink = styledMUI(Link)({
	padding: '0',
	minWidth: '44px',
	minHeight: '44px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'@media (min-width: 600px)': {
		padding: '12px',
	},
})

const StyledButton = styledMUI(Button)({
	fontWeight: 'normal',
	fontSize: '14px',
	color: 'white',
	backgroundColor: 'black',
	border: '1px solid rgba(255, 255, 255, 0.6)',
	transition: 'color 0.3s, background-color 0.3s, border 0.3s',

	'&.signout': {
		minWidth: 'auto',
		width: '30px',
		height: '30px',
		padding: '0',
		borderRadius: '50%',

		'& .MuiSvgIcon-root': {
			fontSize: '16px',
		},

		'@media (min-width: 600px)': {
			width: '40px',
			height: '40px',
			border: '1px solid white',

			'& .MuiSvgIcon-root': {
				fontSize: '22px',
			},
		},
	},

	'&:hover': {
		color: 'black',
		backgroundColor: 'white',
		border: 'white',
	},

	'@media (min-width: 1000px)': {
		fontSize: '16px',
	},
})
