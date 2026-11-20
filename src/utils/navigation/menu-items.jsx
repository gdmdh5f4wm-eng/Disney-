import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined'
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined'

export const menuItems = [
	{ text: 'Home', path: '/', icon: <HomeOutlinedIcon />, disabled: false },
	{ text: 'Cerca', path: '/search', icon: <SearchIcon />, disabled: false },
	{ text: 'La mia lista', path: '/mylist', icon: <PlaylistAddIcon />, disabled: true },
	{ text: 'Film', path: '/movie', icon: <LocalMoviesOutlinedIcon />, disabled: true },
	{ text: 'Serie TV', path: '/series', icon: <MovieFilterOutlinedIcon />, disabled: true },
]
