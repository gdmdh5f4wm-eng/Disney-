import collectionImgOne from '@images/collection/disney.jpg'
import collectionImgTwo from '@images/collection/pixar.jpg'
import collectionImgThree from '@images/collection/marvel.jpg'
import collectionImgFour from '@images/collection/starwars.jpg'
import collectionImgSix from '@images/collection/star.jpg'

import collectionVideoOne from '@videos/disney.mp4'
import collectionVideoTwo from '@videos/pixar.mp4'
import collectionVideoThree from '@videos/marvel.mp4'
import collectionVideoFour from '@videos/starwars.mp4'
import collectionVideoSix from '@videos/star.mp4'

export const collectionItems = [
	{ img: collectionImgOne, video: collectionVideoOne, title: 'Collezione Disney', query: 'disney' },
	{
		isBabi: true,
		video: '/image/babi-viewer.mp4.mp4',
		title: 'BABI',
		query: 'babi',
	},
	{ img: collectionImgTwo, video: collectionVideoTwo, title: 'Collezione Pixar', query: 'pixar' },
	{ img: collectionImgThree, video: collectionVideoThree, title: 'Collezione Marvel', query: 'marvel' },
	{ img: collectionImgFour, video: collectionVideoFour, title: 'Collezione Star Wars', query: 'starwars' },
	{ img: collectionImgSix, video: collectionVideoSix, title: 'Collezione Star', query: 'star' },
]
