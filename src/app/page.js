import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Interests from "@/components/interests/Interests";
import ContactForm from "@/components/contactForm/ContactForm";

const interestsData = ["Tecnología", "Fútbol", "Videojuegos"];
const description =
	"Me llamo Gabriel Cabral Toñanez, tengo 29 años, desarrollador de software y estudiante de ingeniería informática. Apasionado por la tecnología. Conocimientos en tecnologías como ReactJS, NextJS, NodeJS, Java, Bases de datos relacionales y no relacionales, entre otras.";

export default function Home() {
	return (
		<>
			<Header name={"Gabriel Cabral Toñanez"} profileImageUrl={"/perfil.jpg"}></Header>
			<main>
				<About description={description} />
				<Interests interests={interestsData}></Interests>
				<ContactForm />
			</main>
		</>
	);
}
