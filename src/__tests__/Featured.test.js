import { render, screen, act, waitFor, cleanup } from '@testing-library/react';
import Featured from '../views/Featured';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

describe('featured component', () => {
	jest.mock('axios');
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

	it("displays the text 'Featured'", async () => {
		jest.spyOn(axios, 'get').mockResolvedValue(response);

		act(() => {
			render(
				<AuthContext.Provider value={{ mockContext }}>
					<Featured />
				</AuthContext.Provider>
			);
		});

		await waitFor(() => {
			let listItemText = screen.getByText(/featured/i);
			expect(listItemText).toBeInTheDocument();
		});
	});

	const mockContext = {
		access_token: '1234',
	};

	it('displays the characters in a list', async () => {
		jest.spyOn(axios, 'get').mockResolvedValue(response);

		act(() => {
			render(<Featured />);
		});

		await waitFor(() => {
			let listElement = screen.getAllByText((content, element) => element.tagName === 'IMG')[0];
			expect(listElement).toBeInTheDocument();
		});
	});
});
