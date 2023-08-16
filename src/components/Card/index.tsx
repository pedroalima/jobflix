import data from "../../utils/data";

interface JobsData {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}

function Card() {
	return (
		<div>
			{data.map((job: JobsData) => (
				<div className="card" key={job.id}>
					<img src={job.logo} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{job.company}</h5>
						{job.new && <span className="card-text">New</span>}
						{job.featured && <span className="card-text">Featured</span>}
						<p className="card-text">{job.position}</p>
						<p className="card-text">
							<small className="text-muted">{job.postedAt}</small> • <small className="text-muted">{job.contract}</small> • <small className="text-muted">{job.location}</small>
						</p>
					</div>
					<div className="card-body">
						<span className="card-text">{job.role}</span>
						<span className="card-text">{job.level}</span>
						{job.languages.map((stack: string) => (
							<span className="card-text">{stack}</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default Card;