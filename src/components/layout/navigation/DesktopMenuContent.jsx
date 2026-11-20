import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Button, Typography, styled as styledMUI } from '@mui/material'
import { menuItems } from '@utils/navigation/menu-items'
import { scrollToTopInstant } from '@utils/scroll/scroll-to-top'

const DesktopMenuContent = ({ handleCloseNavMenu }) => {
	const handleActiveItemClick = () => {
		if (handleCloseNavMenu) {
			handleCloseNavMenu()
		}
		scrollToTopInstant()
		window.requestAnimationFrame(() => {
			scrollToTopInstant()
		})
	}

	return (
		<DesktopMenuBox sx={{ display: { xs: 'none', md: 'flex' } }}>
			{menuItems.map(item => {
				if (item.disabled) {
					return (
						<DisabledMenuItem
							key={item.text}
							aria-disabled='true'
							onClick={event => event.preventDefault()}
						>
							{item.icon}
							<DisabledMenuText variant='subtitle1'>
								<span>{item.text}</span>
							</DisabledMenuText>
						</DisabledMenuItem>
					)
				}

				return (
					<DesktopMenuLink
						key={item.text}
						component={Link}
						to={item.path}
						onClick={handleActiveItemClick}
					>
						{item.icon}
						<DesktopMenuLinkText variant='subtitle1'>
							<span>{item.text}</span>
						</DesktopMenuLinkText>
					</DesktopMenuLink>
				)
			})}
		</DesktopMenuBox>
	)
}

DesktopMenuContent.propTypes = {
	handleCloseNavMenu: PropTypes.func,
}

export default DesktopMenuContent

const DesktopMenuBox = styledMUI(Box)({
	flexGrow: 1,
})

const DesktopMenuLink = styledMUI(Button)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '8px 0 8px 5px',
	color: 'white',
	textTransform: 'uppercase',

	'&:hover span::after': {
		width: '100%',
	},
})

const DisabledMenuItem = styledMUI(Box)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '8px 0 8px 5px',
	padding: '6px 8px',
	color: 'rgba(255, 255, 255, 0.58)',
	textTransform: 'uppercase',
	cursor: 'default',
	userSelect: 'none',
	pointerEvents: 'none',
})

const DesktopMenuLinkText = styledMUI(Typography)({
	marginLeft: '10px',
	fontSize: '14px',
	letterSpacing: '2px',
	fontWeight: 'normal',

	'& > span': {
		position: 'relative',
	},
	'& > span::after': {
		content: "''",
		position: 'absolute',
		width: '0%',
		height: '2px',
		bottom: '-8px',
		left: '0',
		backgroundColor: 'white',
		transition: 'width 0.3s ease-in-out',
	},
})

const DisabledMenuText = styledMUI(Typography)({
	marginLeft: '10px',
	fontSize: '14px',
	letterSpacing: '2px',
	fontWeight: 'normal',
})
