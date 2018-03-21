import React from 'react';

import AccountOnbooarding from '../AccountOnboarding/AccountOnboarding';
import ResourceCenter from '../ResourceCenter/ResourceCenter';
import MyMpulseTeam from '../MyMpulseTeam/MyMpulseTeam';

import styles from './SideBar.css';

const SideBar = () => {
  return(
    <section className={styles.sideBar}>
      <AccountOnbooarding />
      <ResourceCenter />
      <MyMpulseTeam />
    </section>
  )
}

export default SideBar;