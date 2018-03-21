import React from 'react';

import GreenCheck from '../../images/green-check.svg';
import styles from './AccountOnboarding.css';

const AccountOnboarding = (props) => {

  //need logic to determin which img src to be used >> check : empty
  return (
    <section className={styles.accountOnboarding}>
      <div className={styles.title}>Account Onboarding</div>
      <section className={styles.attrContainer}>
      <div className={styles.onboardingAttr}
        ><img src={GreenCheck} alt="check"/>mPulse Team Assigned</div>
      <div className={styles.onboardingAttr}
        ><img src={GreenCheck} alt="check"/>Account Setup</div>
      <div className={styles.onboardingAttr}
        ><img src={GreenCheck} alt="check"/>Content Approval</div>
      <div className={styles.onboardingAttr}
        ><img src={GreenCheck} alt="check"/>API Integration</div>
      <div className={styles.onboardingAttr}
        ><img src={GreenCheck} alt="check"/>Program Launch</div>
      </section>
    </section>
  )
}
export default AccountOnboarding;