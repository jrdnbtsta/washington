import React from 'react';

import DownArrow from '../../images/arrow_down.svg';
import RightArrow from '../../images/arrow_right.svg';
import filledRightArrow from '../../images/arrow_right_filled.svg'

import styles from './ResourceCenter.css';

class ResourceCenter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: {
        apiDocs: false,
        productUpdates: false,
        tutorials: false,
        mpulseUpdates: false,
      }
    }
  };

  handleListItemClick(key) {
    let cState = { ...this.state };
    cState['isOpen'][key] = !cState['isOpen'][key];
    return this.setState({ isOpen: cState['isOpen']});
  }

  
  render() {
    const nestedAPIDocs = this.state.isOpen.apiDocs ? 
      (
        <div className={styles.nest}>
          <div><img src={filledRightArrow} alt="right-arrow"/><a href="#">first link</a></div>
          <div><img src={filledRightArrow} alt="right-arrow"/><a href="#">second link</a></div>
          <div><img src={filledRightArrow} alt="right-arrow"/><a href="#">third link</a></div>
        </div>
      ) 
      : '';
    
    const nestedTutorials = this.state.isOpen.tutorials ? 
    (
      <div className={styles.nest}>
        <div><img src={filledRightArrow} alt="right-arrow"/><a href="#">first link</a></div>
        <div><img src={filledRightArrow} alt="right-arrow"/><a href="#">second link</a></div>
        <div><img src={filledRightArrow} alt="right-arrow"/><a href="#">third link</a></div>
      </div>
    ) 
    : '';

    return (
      <section className={styles.resourceCenter}>
        <div className={styles.title}>Resource Center</div>
        <div className={styles.list}>
          <div 
            className={styles.listItem} 
            onClick={() => this.handleListItemClick('apiDocs')}
            >API Docs
            <img src={this.state.isOpen.apiDocs ? DownArrow : RightArrow} alt="down"/>
            {nestedAPIDocs}</div>
          <div 
            className={styles.listItem} 
            onClick={() => this.handleListItemClick('productUpdates')}
            >Product Updates
            <img src={this.state.isOpen.productUpdates ? DownArrow : RightArrow} alt="down"/>
            </div>
          <div 
            className={styles.listItem} 
            onClick={() => this.handleListItemClick('tutorials')}
            >Tutorials
            <img src={this.state.isOpen.tutorials ? DownArrow : RightArrow} alt="down"/>            
            {nestedTutorials}</div>
            
          <div 
            className={styles.listItem} 
            onClick={() => this.handleListItemClick('mpulseUpdates')}
            >mPulse Updates
            <img src={this.state.isOpen.mpulseUpdates ? DownArrow : RightArrow} alt="down"/>
            </div>
        </div>
        
      </section>
    )
  }
}

export default ResourceCenter;