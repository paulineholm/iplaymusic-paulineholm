/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BsThreeDots } from 'react-icons/bs';
import CategoryList from './CategoryList';
import { useState } from 'react';

const CategoriesCard = ({ catoName, catoId }) => {
	const [isRoll, setIsRoll] = useState(false);

	const cardButton = css`
		border-radius: 5px;
		border: none;
		display: flex;
		margin: 15px 20px;
		color: white;
		font-weight: bold;
		text-align: start;
		width: 90%;
	`;
	const cardTitle = css`
		width: 80%;
		padding-left: 25px;
		font-size: 15px;
	`;

	const cardIcon = css`
		padding-top: 10px;
		width: 20%;
		font-size: 25px;
	`;

	const colors = ['#FF1168', '#115793', '#0ABEBE', '#3A7634', '#5EB11C', '#F2BC06', '#F18D05'];

	const random_color = colors[Math.floor(Math.random() * colors.length)];

	const handleRoll = () => setIsRoll(!isRoll);

	return (
		<>
			<button css={cardButton} style={{ backgroundColor: random_color }} onClick={handleRoll}>
				<h2 css={cardTitle}>{catoName}</h2>
				<BsThreeDots css={cardIcon} />
			</button>
			{isRoll ? <CategoryList catoId={catoId} /> : null}
		</>
	);
};

export default CategoriesCard;
