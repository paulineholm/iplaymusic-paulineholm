/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { IoIosPulse } from 'react-icons/io';
import { IoIosMicrophone } from 'react-icons/io';
import { IoMdFunnel } from 'react-icons/io';
import { IoMdContrast } from 'react-icons/io';
import { SiAirplayaudio } from 'react-icons/si';
import { Link } from '@reach/router';

const NavMenu = ({ toggleDarkMode }) => {
	const theme = useTheme();

	const navBar = css`
		background-color: ${theme.menu};
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	`;

	const ul = css`
		list-style: none;
		text-align: center;
		padding-left: 0;
		margin: auto 0;
	`;

	const li = css`
		display: inline-flex;
		font-size: 35px;
		width: 10vw;
		margin: 1vh 3vw;
		cursor: grab;
	`;

	const liMidBorder = css`
		border-radius: 50%;
		background: linear-gradient(90deg, rgba(238, 9, 121, 1) 35%, rgba(255, 106, 0, 1) 100%);
		height: 4.7vh;
		width: 5.5vh;
		display: inline-block;
		text-align: center;
	`;

	const liMidIcon = css`
		color: ${theme.menu};
		font-size: 29px;
		margin-top: 11px;
	`;

	return (
		<>
			<svg width="0" height="0">
				<linearGradient id="pinkish-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
					<stop stopColor="#ee0979" offset="0%" />
					<stop stopColor="#ff6a00" offset="100%" />
				</linearGradient>
			</svg>
			<nav css={navBar}>
				<ul css={ul}>
					<li css={li}>
						<Link to="../../albums">
							<IoIosPulse style={{ fill: 'url(#pinkish-gradient)' }} />
						</Link>
					</li>
					<li css={li}>
						<Link to="../../featured">
							<IoIosMicrophone style={{ fill: 'url(#pinkish-gradient)' }} />
						</Link>
					</li>
					<li css={li}>
						<span css={liMidBorder}>
							<Link to="../../player">
								<SiAirplayaudio css={liMidIcon} />
							</Link>
						</span>
					</li>
					<li css={li} onClick={toggleDarkMode}>
						<IoMdContrast style={{ fill: 'url(#pinkish-gradient)' }} />
					</li>
					<li css={li}>
						<Link to="../../categories">
							<IoMdFunnel style={{ fill: 'url(#pinkish-gradient)' }} />
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavMenu;
