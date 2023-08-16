import { JobsData } from "../../types";
import data from "../../utils/data";
import "./index.scss";

function Card() {
	return (
		<div>
			{data.map((job: JobsData) => (
				<div className="card py-3 my-5 shadow border-top-0 border-right-0 border-bottom-0 rounded" id={job.featured ? "card" : ""} key={job.id}>
					<img src={job.logo} className="card-img-top" alt="Logo" />
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
							<span className="card-text" key={stack}>{stack}</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default Card;