import './styles/Projects.css';
export default function Projects(props) {
    return (
        <div className="portBody">
            {props.portfolioData.map((proj) => (
                <div
                    className="projCard"
                    key={proj.id}
                    style={{
                        backgroundImage: `url(${proj.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="overlay">
                        <h3 className="titles">{proj.title}</h3>
                        <p className="description">{proj.description}</p>
                        <div className="buttons">
                            <a href={proj.deployment} target="_blank" rel="noopener noreferrer">
                                <button className="cardbtn">View Deployment</button>
                            </a>
                            <a href={proj.repo} target="_blank" rel="noopener noreferrer">
                                <button className="cardbtn">View Repo</button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}