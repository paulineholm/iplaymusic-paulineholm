import { useState, useEffect } from 'react';

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		let localTheme = localStorage.getItem('darkmode');
		localTheme === 'true' ? setDarkMode(true) : setDarkMode(false);
	}, []);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		localStorage.setItem('darkmode', !darkMode);
	};

	return [darkMode, toggleDarkMode];
};

export default useDarkMode;
