import { render, screen, act, waitFor, cleanup } from '@testing-library/react';
import FeaturedList from '../components/FeaturedList';

describe('FeaturedList component', function () {
	afterEach(cleanup);

	const response = {
		data: {
			playlists: {
				items: [
					{
						description: 'De bedste helt nye sange samlet i én playlist.',
						id: '37i9dQZF1DWWuIAAkPM0Lu',
						images: [
							{
								href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWuIAAkPM0Lu',
							},
						],
					},
					{
						description: 'Fredag aften',
						id: '37i9dQZFsdfjfkPM0Lu',
						images: [
							{
								href: 'https://api.spotify.com/v1/playlists/37i9dQZFsdfjfkPM0Lu',
							},
						],
					},
				],
			},
		},
	};

	it('expects the playlists prop to be provided', function () {
		act(function () {
			render(<FeaturedList playlists={response.data.playlists.items} />);
		});

		waitFor(function () {
			expect(playlists).toBeTruthy();
		});
	});

	it('expects the playlists prop to be an array', function () {
		act(function () {
			render(<FeaturedList playlists={response.data.playlists.items} />);
		});

		waitFor(function () {
			let dataArray = response.data.playlists.items;
			expect(typeOf(dataArray) === 'Array').toBeTruthy();
		});
	});
});
