import { Link } from 'react-router-dom'
import useNavigation from '@hooks/use-navigation'
import { AppBar, Container, Toolbar, Box, Button, styled as styledMUI } from '@mui/material'

import disneyAppLogo from '@images/disney-logo.svg'
import MobileMenuContent from '@components/layout/navigation/MobileMenuContent'
import DesktopMenuContent from '@components/layout/navigation/DesktopMenuContent'
import ProfileContent from '@components/layout/navigation/ProfileContent'
import { scrollToTopInstant } from '@utils/scroll/scroll-to-top'

const MainNavigation = () => {
	const { anchorEl, handleCloseNavMenu, handleOpenNavMenu, user, signoutHandler } = useNavigation()

	return (
		<StyledAppBar position='fixed'>
			<StyledContainer>
				<StyledToolbar disableGutters>
					<Link to='/' onClick={scrollToTopInstant}>
						<LogoBox component='img' src={disneyAppLogo} alt='Logo Disney+' />
					</Link>

					{user === null && (
						<Link to='/signin'>
							<StyledButton variant='outlined'>ACCEDI</StyledButton>
						</Link>
					)}
					{user !== null && (
						<>
							<MobileMenuContent
								handleOpenNavMenu={handleOpenNavMenu}
								handleCloseNavMenu={handleCloseNavMenu}
								anchorEl={anchorEl}
							/>
							<DesktopMenuContent handleCloseNavMenu={handleCloseNavMenu} />
							<ProfileContent user={user} signoutHandler={signoutHandler} />
						</>
					)}
				</StyledToolbar>
			</StyledContainer>
		</StyledAppBar>
	)
}

export default MainNavigation

const StyledAppBar = styledMUI(AppBar)({
	backgroundColor: '#030408',
})

const StyledContainer = styledMUI(Container)({
	minWidth: '100%',
})

const StyledToolbar = styledMUI(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
})

const LogoBox = styledMUI(Box)({
	display: 'flex',
	marginRight: '8px',
	height: '34px',
	width: 'auto',

	'@media (min-width: 400px)': {
		height: '40px',
		marginRight: '12px',
	},

	'@media (min-width: 900px)': {
		height: '50px',
		marginRight: '15px',
	},
})

const StyledButton = styledMUI(Button)({
	width: 'auto',
	minWidth: '104px',
	minHeight: '44px',
	padding: '6px 14px',
	fontWeight: 'normal',
	fontSize: '13px',
	color: 'white',
	backgroundColor: 'black',
	borderRadius: '8px',
	border: '1px solid white',
	transition: 'color 0.3s, background-color 0.3s, border 0.3s',

	'@media (min-width: 600px)': {
		width: '150px',
		fontSize: '14px',
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
