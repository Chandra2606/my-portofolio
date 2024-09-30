import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, image, slug } = props;

	return (
		<React.Fragment>
			<div className="project-card">
				{image && (
					<div className="project-image-container">
						<img
							src={image}
							alt={title}
							className="project-image"
						/>
					</div>
				)}
				<div className="project-details">
					<h3 className="project-title">{title}</h3>
					<div className="project-buttons">
					<button
						onClick={() => window.open(`/project/${slug}`, "_blank")}
						className="project-preview-button"
					>
						<FontAwesomeIcon icon={faEye} /> Preview
					</button>
					<button
						onClick={() => window.open(link, "_blank")}
						className="project-github-button"
					>
							<FontAwesomeIcon icon={faGithub} /> Repository
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};



export default Project;
