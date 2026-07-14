import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewTeam = () => {
  const [teamData, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view_team")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered align-middle text-center">
                <thead className="table-primary">
                  <tr>
                    <th>Team ID</th>
                    <th>Team Name</th>
                    <th>Team Leader</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>College</th>
                    <th>Members</th>
                    <th>Project Title</th>
                    <th>Problem Track</th>
                    <th>Technology Stack</th>
                    <th>Mentor</th>
                    <th>Registration Date</th>
                    <th>Table / Station</th>
                  </tr>
                </thead>

                <tbody>
                  {teamData.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value.teamId}</td>
                        <td>{value.teamName}</td>
                        <td>{value.teamLeaderName}</td>
                        <td>{value.leaderEmail}</td>
                        <td>{value.leaderPhone}</td>
                        <td>{value.collegeName}</td>
                        <td>{value.numberOfMembers}</td>
                        <td>{value.projectTitle}</td>
                        <td>{value.problemStatementTrack}</td>
                        <td>{value.technologyStack}</td>
                        <td>{value.mentorName}</td>
                        <td>{value.registrationDate}</td>
                        <td>{value.tableStationNumber}</td>
                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;