import Image from "next/image";
import styles from "./Header.module.css";
import { renderLogos } from "./renderLogos";

const Header = ({ name, profileImageUrl }) => (
	<header>
		<div className={styles.profile}>
			<Image src={profileImageUrl} alt="profile-pic" width={150} height={150} />
			<div className={styles.container}>
				<h1>{name}</h1>
				<div className={styles.tecnologies}>{renderLogos()}</div>
			</div>
		</div>
	</header>
);

export default Header;
