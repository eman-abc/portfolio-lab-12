// 3. Skills Component
const Skills = () => {
    return (
      <div className="p-3">
        <h3 className="text-warning"><i className="bi bi-tools"></i> Skills & Interests</h3>
        <div>
          <h5 className="text-info">Technical</h5>
          <p>
            <span className="badge badge-primary">C/C++</span>
            <span className="badge badge-success">Python</span>
            <span className="badge badge-warning">NumPy</span>
            <span className="badge badge-info">Django</span>
            <span className="badge badge-dark">MERN Stack</span>
          </p>
          <h5 className="text-info">Soft Skills</h5>
          <p>Project Planning, Research, Communication, Team Collaboration...</p>
          <h5 className="text-info">Domains</h5>
          <p>Machine Learning, Data Science, Web Development...</p>
          <h5 className="text-info">Languages</h5>
          <p>English (Professional), Urdu (Native), Punjabi (Native), Arabic (Elementary).</p>
        </div>
      </div>
    );
  };
  
  export default Skills;
  