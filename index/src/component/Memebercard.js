import React from 'react';

function MemberCard({ yearnumber,professorName, doctoralResearchers, doctoralStudents,masterStudents, undergraduateStudents }) {
  return (
    <div class="card shadow border-0 rounded-4 mb-5">
      <div class="card-body p-5">
        <div class="row align-items-center gx-5">
          <div class="col text-center text-lg-start mb-4 mb-lg-0">
            <div class="bg-light p-4 rounded-4">
              <div class="text-primary fw-bolder mb-2">Member {yearnumber}</div>
              <div class="small fw-bolder">教授</div>
              <div class="small text-muted">{professorName}</div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="small fw-bolder">博士研究員</div>
            <ul class="small text-muted">
              {doctoralResearchers.map((name, index) => (
                <li key={index}><b>{name}</b></li>
              ))}
            </ul>
            <div class="small fw-bolder">博士課程</div>
            <ul class="small text-muted">
              {doctoralStudents.map((name, index) => (
                <li key={index}><b>{name}</b></li>
              ))}
            </ul>
            <div class="small fw-bolder">修士課程</div>
            <ul class="small text-muted">
              {masterStudents.map((name, index) => (
                <li key={index}><b>{name}</b></li>
              ))}
            </ul>
            <div class="small fw-bolder">学部生</div>
            <ul class="small text-muted">
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
