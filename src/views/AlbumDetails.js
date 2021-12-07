import AlbumDetail from '../components/AlbumDetail';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
/* import ErrorBoundary from "../components/ErrorBoundary"; */
import * as Sentry from '@sentry/react';

const AlbumDetails = ({ id }) => {
	return (
		<>
			<Header whiteHeader headTitle="Album Details" />
			{/* <ErrorBoundary message="Sorry, we are unable to show the albums right now!"> */}
			<Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
				<AlbumDetail id={id} />
			</Sentry.ErrorBoundary>
			{/* </ErrorBoundary> */}
			<NavMenu />
		</>
	);
};

export default AlbumDetails;
