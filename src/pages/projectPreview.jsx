import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import INFO from "../data/user";
import "./styles/projectPreview.css";

const ProjectPreview = () => {
	const { slug } = useParams();
	const project = INFO.projects.find((project) => project.slug === slug);
    const [openModal, setOpenModal] = useState({ open: false, image: '' });


	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
			</Helmet>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="project-preview-logo-container">
						<div className="project-preview-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="project-preview-container">
						<div className="project-preview-content">
							<div className="project-preview-title">
								{project.title}
							</div>
							<div className="project-preview-description">
								<h3>Description</h3>
								<p>{project.description}</p>
							</div>
							
							<div className="project-preview-gambar">
								<h3 className="project-preview-gambar-title">
									Preview
								</h3>

								<ul className="project-preview-gambar-list">
									{project.gambar.map((gambar, index) => (
										<li key={index} onClick={() => setOpenModal({ open: true, image: gambar.image })}>
											<h3 className="project-preview-gambar-title">
												{gambar.title}
											</h3>
											<img
												className="project-preview-gambar-image"
												src={gambar.image}
												alt={gambar.title}
											/>
										</li>
									))}
								</ul>
								{openModal.open && (
									<div className="modal" onClick={() => setOpenModal({ open: false, image: '' })}>
										<img className="modal-content" src={openModal.image} alt="Modal Image" />
										<span className="close">&times;</span>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProjectPreview;
