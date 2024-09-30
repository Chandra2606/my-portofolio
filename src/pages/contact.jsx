import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in connecting with me. I appreciate your feedback, inquiries, and suggestions. If you have a specific question or comment, please do not hesitate to send me an email directly at &nbsp;<a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I strive to reply to all messages within 24 hours, though responses may be delayed during peak times. Alternatively, you can reach out through the contact form on my website. Just complete the necessary fields, and I will get back to you promptly. Lastly, if you prefer social media interactions, you can follow me on <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">{INFO.socials.instagram}</a>. I regularly update and interact with my followers there, so feel free to connect. Thank you once again for your interest, and I look forward to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
