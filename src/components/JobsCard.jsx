import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const JobsCard = () => {
  const [jobs, setJobs] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const calculateTimeElapsed = (postingDate) => {
    return formatDistanceToNow(new Date(postingDate), { addSuffix: true });
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  };



  return (
    <div className="max-w-[1300px] mx-auto mt-5">
      <div className="overflow-x-auto">
      
        <div className=" bg-slate-900 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-orange-600">Our Available Jobs</h3>
      
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Type</th>
              <th>Salary Range</th>
              <th>Deadline</th>
              <th>Applicants</th>
            </tr>
          </thead>
          {jobs.map((job) => (
            <tbody key={job._id}>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={job.jobBannerURL} alt={job.jobTitle} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.jobTitle}</div>
                      <div className="text-sm opacity-50">
                        {calculateTimeElapsed(job.jobPostingDate)}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{job.jobCategory}</td>
                <td>{job.salaryRange}</td>
                <td>{formatDate(job.applicationDeadline)}</td>
                <td>{job.jobApplicantsNumber}</td>
                <th>
                  <Link to={`/job/${job._id}`}>
                    <button className="btn btn-ghost btn-xs">View Details</button>
                  </Link>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default JobsCard;

