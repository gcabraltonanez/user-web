"use client";
import { useForm } from "react-hook-form";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	const patterns = {
		email: /\S+@\S+\.\S+/,
		name: /^([A-ZÁÉÍÓÚÑÇa-zñáéíóúñ]{1,}'?-?[A-ZÁÉÍÓÚÑÇa-zñáéíóúç]+[\s]*)+$/,
	};

	const messages = {
		req: "Este campo es obligatorio",
		name: "Ingrese un nombre válido",
		email: "Ingrese un mail válido",
	};

	return (
		<section id="contact">
			<h2>Contacto</h2>
			{isSubmitSuccessful ? (
				<p>¡Mensaje enviado con éxito!</p>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<label htmlFor="name">Nombre:</label>
						<input
							type="text"
							id="name"
							{...register("name", {
								required: messages.req,
								pattern: {
									value: patterns.name,
									message: messages.name,
								},
							})}
							className={errors.name ? "error" : ""}
						/>
						{errors.name && <p className="error-message">{errors.name.message}</p>}
					</div>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							id="email"
							{...register("email", {
								required: messages.req,
								pattern: { value: patterns.email, message: messages.email },
							})}
							className={errors.email ? "error" : ""}
						/>
						{errors.email && <p className="error-message">{errors.email.message}</p>}
					</div>
					<div className="form-group">
						<label htmlFor="message">Mensaje:</label>
						<textarea
							id="message"
							{...register("message", { required: messages.req })}
							rows="4"
							className={errors.message ? "error" : ""}
						/>
						{errors.message && <p className="error-message">{errors.message.message}</p>}
					</div>
					<button type="submit">Enviar</button>
				</form>
			)}
		</section>
	);
};

export default ContactForm;
