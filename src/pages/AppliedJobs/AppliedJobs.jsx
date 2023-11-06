


import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";


const AppliedJobs = () => {
    
    const [loading, setLoading] = useState(true);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const {user} = useContext(AuthContext);

    console.log(user);
    
    useEffect(() => {
        fetch(" http://localhost:5000/appliedJobs")
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((item) => item?.email === user.email);
                if (filteredData.length === 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'No Products Available',
                        text: 'There are no products available for this brand.',
                    });
                } else {
                    setAppliedJobs(filteredData);    
                    setLoading(false);
                }
            })
                
           
            .catch((error) => {
                console.error("Error fetching carts:", error);
            });
    }, []);
    
    if (loading) {
        return <div>Loading...</div>;
    }

        const calculateTimeElapsed = (postingDate) => {
            return formatDistanceToNow(new Date(postingDate), { addSuffix: true });
          };
        
          const formatDate = (date) => {
            const formattedDate = new Date(date).toISOString().split("T")[0];
            return formattedDate;
          };

    return (
        <div className="max-w-[1300px] mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                <thead>
            <tr>
              <th>Job Title</th>
              <th>Type</th>
              <th>Salary Range</th>
              <th>Deadline</th>
              <th>Applicants</th>
            </tr>
          </thead>
          {appliedJobs.map((job) => (
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
                {/* <th>
                
                    <Link to={`/update/${job._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  
                </th> */}
              </tr>
            </tbody>
          ))}
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;
