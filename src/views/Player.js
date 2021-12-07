import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import PlayerElement from '../components/PlayerElement';

const Player = ({ id }) => {
	return (
		<>
			<Header headTitle="Playing" />
			<PlayerElement id={id} />
			<NavMenu />
		</>
	);
};

export default Player;
