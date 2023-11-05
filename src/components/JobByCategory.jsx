import  { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';


const JobByCategory = () => {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Fetch job data from your MongoDB API using AXIOS
    axios.get('http://localhost:5000/jobs')
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching job data: ', error);
      });
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const calculateTimeElapsed = (postingDate) => {
    return formatDistanceToNow(new Date(postingDate), { addSuffix: true });
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  };

  return (
    <div className='w-[1200px] mx-auto gird grid-cols-2'>
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <TabList className="flex gap-6 items-center justify-center mb-10">
           <Tab className="hover:bg-gray-500 border  p-4 shadow-xl ">All Jobs</Tab>
          <Tab className="hover:bg-gray-500 border  p-4 shadow-xl ">On Site Job</Tab>
          <Tab className="hover:bg-gray-500 border  p-4 shadow-xl ">Remote Job</Tab>
          <Tab className="hover:bg-gray-500 border  p-4 shadow-xl ">Hybrid</Tab>
          <Tab className="hover:bg-gray-500 border  p-4 shadow-xl ">Part Time</Tab>
        </TabList>
        <TabPanel >
         <div className='grid grid-cols-2'>
         {jobs.map((job, index) => (
            <div className="border" key={index}>
              <p>Category: {job.jobCategory}</p>
              <p>Logged In User: {job.loggedInUserName}</p>
              <p>Title: {job.jobTitle}</p>
              <p>Posting Date: {formatDate(job.jobPostingDate)} <span>({calculateTimeElapsed(job.jobPostingDate)})</span></p>
              <p>Deadline: {formatDate(job.applicationDeadline)}</p>
              <p>Salary Range: {job.salaryRange}</p>
              <p>Applicants: {job.jobApplicantsNumber}</p>
              <button>View Details</button>
            </div>
          ))}
         </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-2'>
          {jobs
            .filter((job) => job.jobCategory === 'On Site')
            .map((job, index) => (
              <div className="border" key={index}>
                 <p>Category: {job.jobCategory}</p>
              <p>Logged In User: {job.loggedInUserName}</p>
              <p>Title: {job.jobTitle}</p>
              <p>Posting Date: {formatDate(job.jobPostingDate)} <span>({calculateTimeElapsed(job.jobPostingDate)})</span></p>
              <p>Deadline: {formatDate(job.applicationDeadline)}</p>
              <p>Salary Range: {job.salaryRange}</p>
              <p>Applicants: {job.jobApplicantsNumber}</p>
              <button>View Details</button>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
         <div className='grid grid-cols-2'>
         {jobs
            .filter((job) => job.jobCategory === 'Remote')
            .map((job, index) => (
              <div className="border" key={index}>
                 <p>Category: {job.jobCategory}</p>
              <p>Logged In User: {job.loggedInUserName}</p>
              <p>Title: {job.jobTitle}</p>
              <p>Posting Date: {formatDate(job.jobPostingDate)} <span>({calculateTimeElapsed(job.jobPostingDate)})</span></p>
              <p>Deadline: {formatDate(job.applicationDeadline)}</p>
              <p>Salary Range: {job.salaryRange}</p>
              <p>Applicants: {job.jobApplicantsNumber}</p>
              <button>View Details</button>
              </div>
            ))}
         </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-2'>
          {jobs
            .filter((job) => job.jobCategory === 'Hybrid')
            .map((job, index) => (
              <div className="border" key={index}>
                 <p>Category: {job.jobCategory}</p>
              <p>Logged In User: {job.loggedInUserName}</p>
              <p>Title: {job.jobTitle}</p>
              <p>Posting Date: {formatDate(job.jobPostingDate)} <span>({calculateTimeElapsed(job.jobPostingDate)})</span></p>
              <p>Deadline: {formatDate(job.applicationDeadline)}</p>
              <p>Salary Range: {job.salaryRange}</p>
              <p>Applicants: {job.jobApplicantsNumber}</p>
              <button>View Details</button>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-2'>
          {jobs
            .filter((job) => job.jobCategory === 'Part-Time')
            .map((job, index) => (
              <div className="border" key={index}>
                 <p>Category: {job.jobCategory}</p>
              <p>Logged In User: {job.loggedInUserName}</p>
              <p>Title: {job.jobTitle}</p>
              <p>Posting Date: {formatDate(job.jobPostingDate)} <span>({calculateTimeElapsed(job.jobPostingDate)})</span></p>
              <p>Deadline: {formatDate(job.applicationDeadline)}</p>
              <p>Salary Range: {job.salaryRange}</p>
              <p>Applicants: {job.jobApplicantsNumber}</p>
              <button>View Details</button>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobByCategory;
