import Header from '../components/Header';
import HeadTitle from '../components/HeadTitle';
import FeaturedAlbums from '../components/FeaturedAlbums';
import ReleasesAlbums from '../components/ReleasesAlbums';
import NavMenu from '../components/NavMenu';

const Albums = () => {
	return (
		<>
			<Header headTitle="Albums" />
			<HeadTitle titleHeadline="All Albums" />
			<FeaturedAlbums />
			<ReleasesAlbums />
			<NavMenu />
		</>
	);
};

export default Albums;
