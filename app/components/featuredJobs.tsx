"use client";
import React, { useEffect, useState } from "react";
import cardLogo from "../Assets/teamsLogo.png";
import Image from "next/image";
import axios from "axios";
import { FaBookmark } from "react-icons/fa";

interface Job {
  id: number;
  title: string;
  location: string;
  created_at: string;
  company: string;
  type: string;
  applicants: string;
}

const featuredJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const convertDateToDays = (dateString: string): string => {
    const date = new Date(dateString);
    const today = new Date();

    const differenceInTime = today.getTime() - date.getTime();
    const daysAgo = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

    if (daysAgo === 0) return "Today";
    if (daysAgo === 1) return "1 day ago";
    return `${daysAgo} days ago`;
  };

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => setJobs(response.data.jobs))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap w-100%" style={{ gap: "16px" }}>
        {jobs.slice(0, 8).map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow p-4 w-[186px] h-[170px]"
          >
            <div style={{ fontSize: "10px" }}>
              <p>Promoted</p>
            </div>
            {/* Job Logo & Title */}
            <div className="flex items-center mb-2">
              <Image
                src={cardLogo}
                alt="Logo"
                width={40}
                height={40}
                className="p-2"
              />
              <div className="flex flex-col ml-2">
                <p className="text-md font-medium text-sm">{job.title}</p>
                <p className="text-xs">{job.company}</p>
              </div>
            </div>

            {/* Location & Type */}
            <div className="flex items-center text-gray-500 text-xs mb-1">
              <i className="bx bx-map text-gray-600 mr-1"></i>
              <p>
                {job.location.length > 20
                  ? `${job.location.substring(0, 13)}...`
                  : job.location}
              </p>
              <p className="ml-1">({job.type})</p>
            </div>

            {/* Time & Applicants */}
            <div className="flex items-center text-gray-500 text-xs mb-3">
              <i className="bx bx-time-five text-gray-600 mr-1"></i>
              <p>{convertDateToDays(job.created_at)}</p>
              <span className="mx-1">|</span>
              <p className="text-blue-600">{job.applicants} Applicants</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button className="bg-blue-700 text-white py-1.5 px-4 text-xs rounded-lg transition hover:bg-black">
                Apply Now
              </button>
              <FaBookmark className="text-gray-400 cursor-pointer text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default featuredJobs;
