import React from 'react';

function MemberCard({ yearnumber,professorName, doctoralResearchers, doctoralStudents,masterStudents, undergraduateStudents }) {
  return (
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-body p-5">
        <div className="row align-items-center gx-5">
          <div className="col text-center text-lg-start mb-4 mb-lg-0">
            <div className="bg-light p-4 rounded-4">
              <div className="text-primary fw-bolder mb-2">Member {yearnumber}</div>
              <div className="small fw-bolder">教授</div>
              <div className="small text-muted">{professorName}</div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="small fw-bolder">博士研究員</div>
            <ul className="small text-muted">
              {doctoralResearchers.map((name, index) => (
                <li key={index}><b>{name}</b></li>
              ))}
            </ul>
            <div className="small fw-bolder">博士課程</div>
            <ul className="small text-muted">
              {doctoralStudents.map((name, index) => (
                <li key={index}><b>{name}</b></li>
              ))}
            </ul>
            <div className="small fw-bolder">修士課程</div>
            <ul className="small text-muted">
              {masterStudents.map((name, index) => (
                <li key={index}><b>{name}</b></li>
              ))}
            </ul>
            <div className="small fw-bolder">学部生</div>
            <ul className="small text-muted">
              {undergraduateStudents.map((name, index) => (
                <li key={index}><b>{name}</b></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
