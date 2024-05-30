// About.js
import React from 'react';
import MemberCard from './Memebercard';

//Member_2023
const yearnumber2024=["2024"];
const doctoralResearchers_2024 = ["Ermioni Qafzezi"];
const doctoralStudents_2024 = ["D3: Phudit Ampririt"];
const masterStudents_2024 = ["M2: Higashi Shunya", "M1: Irie Yusuke"];
const undergraduateStudents_2024 = ["B4: Kawaguchi Yuki", "B4: Kondo Koya", "B4: Sohara Naoya", "B4: Yoshida Tomose", "B4: Saito Kentaro", "B4: Nagatani Taiki", "B4: Nanamatasu Taiga", "B4: Miyazaki Taisei"];
//Member_2023
const yearnumber2023=["2023"];
const doctoralResearchers_2023 = ["Ermioni Qafzezi"];
const doctoralStudents_2023 = ["D3: Phudit Ampririt"];
const masterStudents_2023 = ["M1: Higashi Shunya"];
const undergraduateStudents_2023 = ["No"];
//Member_2022
const yearnumber2022=["2022"];
const doctoralResearchers_2022 = ["Kevin Bylykbashi"];
const doctoralStudents_2022 = ["D3: Ermioni Qafzezi", "D2: Phudit Ampririt"];
const masterStudents_2022 = ["No"];
const undergraduateStudents_2022 = ["B4: Higashi Shunya", "B4: Irie Yusuke", "B4: Inaba Koutarou", "B4: Kondou Takumi", "B4: Hayama Kei", "B4: Higashi Shunya", "B4:  Mukai Tomoya", "B4:  Ichōda Akira"];

//Member_2021
const yearnumber2021=["2021"];
const doctoralResearchers_2021 = ["No"];
const doctoralStudents_2021 = ["D3: Kevin Bylykbashi", "D2: Ermioni Qafzezi"];
const masterStudents_2021 = ["M2: Seiji Ohara", "M2: Phudit Ampririt", "M1: Peng Xu"];
const undergraduateStudents_2021 = ["B4:  Ono Kenta", "B4:  Kawakami Kouya", "B4:  Omine Taichi", "B4:  Nagase Kazuki", "B4:  Tanaka Miyasu", "B4:  Fujiwara Takurou", "B4:  Takahashi Yuki"];


const Member = () => {
    return (
    <div className="container px-5 my-5">
        <div className="text-center mb-5">
                    <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">研究メンバー</span></h1>
        </div>
                {/* Member 2024 */}
                <MemberCard
  yearnumber={yearnumber2024}
  professorName="Prof. Leonard Barolli"
  doctoralResearchers={doctoralResearchers_2024}
  doctoralStudents={doctoralStudents_2024}
  masterStudents={masterStudents_2024}
  undergraduateStudents={undergraduateStudents_2024}
/>
        {/* Member 2023 */}
        <MemberCard
  yearnumber={yearnumber2023}
  professorName="Prof. Leonard Barolli"
  doctoralResearchers={doctoralResearchers_2023}
  doctoralStudents={doctoralStudents_2023}
  masterStudents={masterStudents_2023}
  undergraduateStudents={undergraduateStudents_2023}
/>
        {/* Member 2022 */}
                            <MemberCard
  yearnumber={yearnumber2022}
  professorName="Prof. Leonard Barolli"
  doctoralResearchers={doctoralResearchers_2022}
  doctoralStudents={doctoralStudents_2022}
  masterStudents={masterStudents_2022}
  undergraduateStudents={undergraduateStudents_2022}
/>
        {/* Member 2021 */}
        <MemberCard
  yearnumber={yearnumber2021}
  professorName="Prof. Leonard Barolli"
  doctoralResearchers={doctoralResearchers_2021}
  doctoralStudents={doctoralStudents_2021}
  masterStudents={masterStudents_2021}
  undergraduateStudents={undergraduateStudents_2021}
/>

    </div>
    );
}

export default Member;
