import styles from './Interest.module.css';

const Interests = ({ interests }) => (
	<section id="interests" className={styles.interests}>
		<h2>Intereses</h2>
		<ul className={styles.interestList}>
			{interests?.map((interest, index) => (
				<li key={index}>{interest}</li>
			))}
		</ul>
	</section>
);

export default Interests;
