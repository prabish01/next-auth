"use client"

import React, { useEffect, useState } from 'react'

import { db } from "@/lib/db";

const JobListPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await db.job.findMany(); // Fetch all jobs data from the database
        setJobs(jobsData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h1 className="font-bold text-2xl text-slate-700">Job Listings</h1>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className="job-card text-black">
            <h2>{job.jobTitle}</h2>
            <p>{job.companyName}</p>
            {/* Render other job details */}
            <p>Location: {job.companyLocation}</p>
            <p>Salary: {job.jobSalary}</p>
            {/* Add more job details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListPage;