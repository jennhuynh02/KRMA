import React from 'react';

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="mainpage-footer">
        <div className="authors">
          <span className="programmer">
            <a href="https://www.linkedin.com/in/jamesjiang13/">
              <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '45px' }} />
            </a>
            <a href="https://github.com/jamesjiang13">
              <i className="fa fa-github" style={{ color: 'black', fontSize: '45px' }} />
            </a>
            James Jiang
          </span>

          <span className="programmer">
            <a href="https://www.linkedin.com/in/jenniferanhhuynh/">
              <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '45px' }} />
            </a>
            <a href="https://github.com/jennhuynh02">
              <i className="fa fa-github" style={{ color: 'black', fontSize: '45px' }} />
            </a>
            Jennifer Huynh
          </span>

          <span className="programmer">
            <a href="https://www.linkedin.com/in/michael-murry-b3746a1a6/">
              <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '45px' }} />
            </a>
            <a href="https://github.com/MichaelMurry49">
              <i className="fa fa-github" style={{ color: 'black', fontSize: '45px' }} />
            </a>
            Michael Murry
          </span>

          <span className="programmer">
            <a href="https://www.linkedin.com/in/joshua-silva-roland/">
              <i className="fa fa-linkedin-square" style={{ color: '#0077b5', fontSize: '45px' }} />
            </a>
            <a href="https://github.com/jsilvaroland">
              <i className="fa fa-github" style={{ color: 'black', fontSize: '45px' }} />
            </a>
            Joshua Silva-Roland
          </span>
        </div>
        <p>Copyright &copy; 2020 TreasureBox</p>
      </footer>
    );
  }
}

export default Footer;
