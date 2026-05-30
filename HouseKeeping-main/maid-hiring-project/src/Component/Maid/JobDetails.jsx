import React from "react";
import { useParams } from "react-router-dom";

export default function JobDetails() {

  const { id } = useParams();

  const jobs = [
    {
      id: 1,
      client: "Rahul Sharma",
      work: "Cook",
      status: "Ongoing",
      mobile: "9876543210",
      address: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      client: "Priya Singh",
      work: "Babysitter",
      status: "Completed",
      mobile: "9123456780",
      address: "Delhi, India",
    },
  ];

  const job = jobs.find((item) => item.id === Number(id));

  return (
    <div className="container py-5">

      <div className="card shadow border-0 rounded-4 p-5">

        <h1 className="mb-4">
          Customer Details
        </h1>

        <h3>{job.client}</h3>

        <p>
          <strong>Work:</strong> {job.work}
        </p>

        <p>
          <strong>Status:</strong> {job.status}
        </p>

        <p>
          <strong>Mobile:</strong> {job.mobile}
        </p>

        <p>
          <strong>Address:</strong> {job.address}
        </p>

      </div>

    </div>
  );
}