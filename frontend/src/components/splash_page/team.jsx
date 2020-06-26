import React from 'react';

class Team extends React.PureComponent {
  render() {
    return (
      <div className="mainpage-team">
        <ul className="authors">
          <li className="programmer">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jamesjiang13/">
              <img src="linkedin.png" alt="lnkd" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/jamesjiang13">
              <img src="github.png" alt="lnkd" />
            </a>
            James Jiang
          </li>

          <li className="programmer">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jenniferanhhuynh/">
              <img src="linkedin.png" alt="lnkd" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/jennhuynh02">
              <img src="github.png" alt="lnkd" />
            </a>
            Jennifer Huynh
          </li>

          <li className="programmer">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-murry-b3746a1a6/">
              <img src="linkedin.png" alt="lnkd" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/MichaelMurry49">
              <img src="github.png" alt="lnkd" />
            </a>
            Michael Murry
          </li>

          <li className="programmer">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joshua-silva-roland/">
              <img src="linkedin.png" alt="lnkd" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/jsilvaroland">
              <img src="github.png" alt="lnkd" />
            </a>
            Joshua Silva-Roland
          </li>
        </ul>
        <div className="team-copyrights">
          <span>Copyright &copy; 2020 KRMA | Images courtesy of Unsplash</span>
        </div>
      </div>
    );
  }
}

export default Team;
