import { FaNodeJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import "animate.css";

export const renderLogos = () => {
	return (
		<>
			<div className="animate__animated animate__fadeInLeft">
				<IoLogoReact />
			</div>
			<div className="animate__animated animate__fadeInLeft">
				<FaNodeJs />
			</div>
			<div className="animate__animated animate__fadeInLeft">
				<RiNextjsFill />
			</div>
			<div className="animate__animated animate__fadeInLeft">
				<FaJava />
			</div>
			<div className="animate__animated animate__fadeInLeft">
				<SiMysql />
			</div>
		</>
	);
};
