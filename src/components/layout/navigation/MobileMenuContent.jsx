import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, IconButton, Menu, MenuItem, Button, Typography, styled as styledMUI } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { Divide as Hamburger } from 'hamburger-react'
import { menuItems } from '@utils/navigation/menu-items'
import { scrollToTopInstant } from '@utils/scroll/scroll-to-top'

const MobileMenuContent = ({ handleOpenNavMenu, handleCloseNavMenu, anchorEl }) => {
	const handleActiveMobileClick = () => {
		if (handleCloseNavMenu) {
			handleCloseNavMenu()
		}
		scrollToTopInstant()
		window.requestAnimationFrame(() => {
			scrollToTopInstant()
		})
		setTimeout(() => {
			scrollToTopInstant()
		}, 60)
	}

	return (
		<MobileMenuBox sx={{ display: { xs: 'flex', md: 'none' } }}>
			<MobileMenuBoxIcon
				aria-label='Menu di navigazione'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleOpenNavMenu}
				color='inherit'>
				<Hamburger toggled={Boolean(anchorEl)} toggle={() => {}} size={16} rounded />
			</MobileMenuBoxIcon>

			<MobileMenu
				id='menu-appbar'
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorEl)}
				onClose={handleCloseNavMenu}
				sx={{
					display: { xs: 'block', md: 'none' },
				}}>
				<AnimatePresence>
					{anchorEl && (
						<>
							{menuItems.map((item, index) => {
								if (item.disabled) {
									return (
										<DisabledMobileMenuItem
											key={item.text}
											component={motion.li}
											initial={{ opacity: 0, x: -5 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -5 }}
											transition={{ duration: 0.3, delay: (index + 1.5) * 0.15 }}
											aria-disabled='true'
											tabIndex={-1}
											onClick={event => event.preventDefault()}>
											<DisabledMobileItemBox>
												{item.icon}
												<MobileMenuLinkText variant='subtitle1'>{item.text}</MobileMenuLinkText>
											</DisabledMobileItemBox>
										</DisabledMobileMenuItem>
									)
								}

								return (
									<MenuItem
										key={item.text}
										component={motion.li}
										initial={{ opacity: 0, x: -5 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -5 }}
										transition={{ duration: 0.3, delay: (index + 1.5) * 0.15 }}
										onClick={handleActiveMobileClick}>
										<MobileMenuLink component={Link} to={item.path}>
											{item.icon}
											<MobileMenuLinkText variant='subtitle1'>{item.text}</MobileMenuLinkText>
										</MobileMenuLink>
									</MenuItem>
								)
							})}
						</>
					)}
				</AnimatePresence>
			</MobileMenu>
		</MobileMenuBox>
	)
}

MobileMenuContent.propTypes = {
	handleOpenNavMenu: PropTypes.func,
	handleCloseNavMenu: PropTypes.func,
	anchorEl: PropTypes.any,
}

export default MobileMenuContent

const MobileMenuBox = styledMUI(Box)({
	flexGrow: 1,
	justifyContent: 'flex-end',
})

const MobileMenuBoxIcon = styledMUI(IconButton)({
	padding: '0',
	minWidth: '44px',
	minHeight: '44px',
})

const MobileMenu = styledMUI(Menu)({
	'& .MuiPaper-root': {
		maxHeight: '450px',
		maxWidth: '250px',
		backgroundColor: '#030408',
		borderRadius: '20px',
		filter: 'drop-shadow(0px 2px 8px rgba(42,49,65,0.32))',
	},
})

const MobileMenuLink = styledMUI(Button)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '44px',
	margin: '4px 8px',
	color: 'white',
	textTransform: 'uppercase',
	'& .MuiSvgIcon-root': {
		fontSize: '17px',
	},
	'&:hover': {
		backgroundColor: 'transparent',
	},
})

const DisabledMobileMenuItem = styledMUI(MenuItem)({
	cursor: 'default',
	pointerEvents: 'none',
	'&:hover': {
		backgroundColor: 'transparent',
	},
})

const DisabledMobileItemBox = styledMUI(Box)({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '44px',
	margin: '4px 8px',
	padding: '6px 8px',
	color: 'rgba(255, 255, 255, 0.52)',
	textTransform: 'uppercase',
	userSelect: 'none',
	'& .MuiSvgIcon-root': {
		fontSize: '17px',
	},
})

const MobileMenuLinkText = styledMUI(Typography)({
	marginLeft: '8px',
	fontSize: '13px',
	letterSpacing: '2.5px',
})
