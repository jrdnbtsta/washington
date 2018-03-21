import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/mpulse_logo.svg';
import Home from '../../images/home.svg';
import List from '../../images/list.svg';
import Insights from '../../images/insights.svg';
import ProgramBuilder from '../../images/programBuilder.svg';
import Programs from '../../images/programs.svg';
import Settings from '../../images/settings.svg';
import styles from './Navbar.css';

const NavBar = () => (

  <div className={[styles.navbar, styles.nav].join(' ')}>
    <ul className={styles.nav_ul}>
      <li className={styles.link_left}>
        <NavLink
          to={"/"}
          className={styles.link}
          activeClassName={styles.selectedTab}
          exact
        ><button>
            <img className="img-responsive logo" src={Home} alt="logo"></img>
        </button>
        </NavLink>
      </li>

      <li className={[styles.link_right].join(' ')} >
        <NavLink
          to={"/List"}
          className={styles.link}
          activeClassName={styles.selectedTab}
        ><button>
          <img className="img-responsive logo" src={List} alt="List"></img>
        </button></NavLink>
      </li>

      <li className={[styles.link_right].join(' ')} >
        <NavLink
          to={"/ProgramBuilder"}
          className={styles.link}
          activeClassName={styles.selectedTab}
        ><button>
          <img className="img-responsive logo" src={ProgramBuilder} alt="ProgramBuilder"></img>
        </button></NavLink>
      </li>

      <li className={[styles.link_right].join(' ')} >
        <NavLink
          to={"/Programs"}
          className={styles.link}
          activeClassName={styles.selectedTab}
        ><button>
          <img className="img-responsive logo" src={Programs} alt="Programs"></img>
        </button></NavLink>
      </li>

      <li className={[styles.link_right].join(' ')} >
        <NavLink
          to={"/Insights"}
          className={styles.link}
          activeClassName={styles.selectedTab}
        ><button>
          <img className="img-responsive logo" src={Insights} alt="Insights"></img>
        </button></NavLink>
      </li>

      <li className={[styles.link_right].join(' ')} >
        <NavLink
          to={"/Settings"}
          className={styles.link}
          activeClassName={styles.selectedTab}
        ><button>
          <img className="img-responsive logo" src={Settings} alt="Settings"></img>
        </button></NavLink>
      </li>

      <li className={[styles.link_right].join(' ')} >
        <NavLink
          to={"/ImagePage"}
          className={styles.link}
          activeClassName={styles.selectedTab}
        ><button>ImagePage</button></NavLink>
      </li>

      <li className={[styles.link_right].join(' ')} >
        <NavLink
          to={"/LinksPage"}
          className={styles.link}
          activeClassName={styles.selectedTab}
        ><button>LinksPage</button></NavLink>
      </li>

      <li className={[styles.link_right].join(' ')} >
        <NavLink
          to={"/MyApp"}
          className={styles.link}
          activeClassName={styles.selectedTab}
        ><button>MyApp</button></NavLink>
      </li>
    </ul>
  </div>

)

export default NavBar;