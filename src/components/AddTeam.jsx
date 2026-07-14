import axios from "axios";
import React, { useState } from "react";

const AddTeam = () => {
  const [input, changeInput] = useState({
    teamId: "",
    teamName: "",
    teamLeaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    collegeName: "",
    numberOfMembers: "",
    projectTitle: "",
    problemStatementTrack: "",
    technologyStack: "",
    mentorName: "",
    registrationDate: "",
    tableStationNumber: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value });
  };

  const readValues = () => {
    axios
      .post("http://localhost:3000/add_team", input)
      .then((response) => {
        setMessage("Team added successfully");
        setError("");

        changeInput({
          teamId: "",
          teamName: "",
          teamLeaderName: "",
          leaderEmail: "",
          leaderPhone: "",
          collegeName: "",
          numberOfMembers: "",
          projectTitle: "",
          problemStatementTrack: "",
          technologyStack: "",
          mentorName: "",
          registrationDate: "",
          tableStationNumber: "",
        });
      })
      .catch((err) => {
        setMessage("");

        if (err.response) {
          setError(err.response.data.message);
        } else {
          setError("Error");
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h3 className="mb-4">Team Registration</h3>

          {message && <div className="alert alert-success">{message}</div>}

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Team ID</label>
              <input
                type="text"
                className="form-control"
                name="teamId"
                value={input.teamId}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Team Name</label>
              <input
                type="text"
                className="form-control"
                name="teamName"
                value={input.teamName}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Team Leader Name</label>
              <input
                type="text"
                className="form-control"
                name="teamLeaderName"
                value={input.teamLeaderName}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Leader Email</label>
              <input
                type="email"
                className="form-control"
                name="leaderEmail"
                value={input.leaderEmail}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Leader Phone</label>
              <input
                type="text"
                className="form-control"
                name="leaderPhone"
                value={input.leaderPhone}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">College Name</label>
              <input
                type="text"
                className="form-control"
                name="collegeName"
                value={input.collegeName}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Number of Members</label>
              <input
                type="number"
                className="form-control"
                name="numberOfMembers"
                value={input.numberOfMembers}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Project Title</label>
              <input
                type="text"
                className="form-control"
                name="projectTitle"
                value={input.projectTitle}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Problem Statement Track</label>
              <input
                type="text"
                className="form-control"
                name="problemStatementTrack"
                value={input.problemStatementTrack}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Technology Stack</label>
              <input
                type="text"
                className="form-control"
                name="technologyStack"
                value={input.technologyStack}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Mentor Name</label>
              <input
                type="text"
                className="form-control"
                name="mentorName"
                value={input.mentorName}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Registration Date</label>
              <input
                type="date"
                className="form-control"
                name="registrationDate"
                value={input.registrationDate}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Table / Station Number</label>
              <input
                type="text"
                className="form-control"
                name="tableStationNumber"
                value={input.tableStationNumber}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12">
              <button className="btn btn-primary" onClick={readValues}>
                Add Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
