import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const JobDetails = () => {

    const { id } = useParams();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(" http://localhost:5000/jobs")
            .then((response) => response.json())
            .then((data) => {
                // console.log("Cart Data:", data);
                // Update the cart data in your context provider
                // Assuming you have a function to set the cart data in your context
                // Replace 'setCartDataInContext' with the actual function name
                setJobs(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching carts:", error);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const formatDate = (date) => {
        const formattedDate = new Date(date).toISOString().split('T')[0];
        return formattedDate;
      };

    const jobDetails = jobs.find((job) => job._id === id);
    return (
        <div>
                       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={jobDetails.jobBannerURL} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{jobDetails.jobTitle}</h1>
      <h1 className=" "><span className="text-2xl font-bold">Job Type:</span> <span className="text-lg">{jobDetails.jobCategory} </span></h1>
      <h1 className=""><span className="text-2xl font-bold">Job Posting Date:</span> <span className="text-lg">{formatDate(jobDetails.jobPostingDate)}</span></h1>
      <h1 className=""><span className="text-2xl font-bold">Deadline:</span> <span className="text-lg">{formatDate(jobDetails.applicationDeadline)}</span></h1>
      <h3 className=""><span className="text-2xl font-bold">Salary Range:</span> <span className="text-lg">{jobDetails.salaryRange}</span></h3>
      <p className="py-6">{jobDetails.jobDescription}</p>
      <button  className="btn btn-primary">Apply</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default JobDetails;