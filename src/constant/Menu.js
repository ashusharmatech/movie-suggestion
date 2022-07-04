import { NowPlaying, Popular, TopRated, Upcoming } from "../container/movies";

export const NAV_ITEMS = [

	{
		label: 'Movies',
		children: [
			{
				label: 'Popular',
				href: '/movie/popular'
			},
			{
				label: 'Top Rated',
				href: '/movie/top_rated'
			},
			{
				label: 'Upcoming',
				href: '/movie/upcoming'
			},
			{
				label: 'Now Playing',
				href: '/movie/now_playing'
			}]
	}, {
		label: 'TV',
		children: [
			{
				label: 'Popular',
				href: '/tv/popular'
			},
			{
				label: 'Top Rated',
				href: '/tv/top_rated'
			},
			{
				label: 'Arriving Today',
				href: '/tv/arriving_today'
			},
			{
				label: 'On Air Today',
				href: '/tv/on_air_today'
			}]
	},
	{
		label: 'Random',
		href: '/'
	}
];
