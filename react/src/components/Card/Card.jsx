import React from 'react';

import Envelope from '../../images/envelope.svg';
import SpeechBubble from '../../images/speech_bubble.svg';

import styles from './Card.css';

const Card = (props) => {
  const { name, description, number_of_actions, tags, channels, engagement_level, rating, isAddProgram } = props;

  if (isAddProgram) {
    return (
      <div className={[styles.cardContainer, styles.addProgramContainer].join(' ')}>
        <div className={styles.addProgramTitle}>Want to add another program?</div>
        <button className={[styles.btn, styles.addProgramBtn].join(' ')}>ADD ANOTHER PROGRAM</button>
      </div>
    )
  }

  let displayedTags = [];
  let charCount = 0;
  for (let i = 0; i < tags.length && charCount < 15; i += 1) {
    let titleCase = tags[i][0].toUpperCase() + tags[i].substring(1);

    displayedTags.push(
      <button className={styles.tag} key={i}>{titleCase}</button>
    );
    charCount += tags[i].length;
  }

  let moreTags = tags.length > displayedTags.length ?
    <span className={styles.moreTags}>+ {tags.length - displayedTags.length} more</span> 
    : '';

  let channelsList = [];

  if (channels.indexOf('sms') !== -1) channelsList.push(<img src={SpeechBubble} alt="SMS Icon" className={styles.smsIcon} key='1'/>);
  if (channels.indexOf('email') !== -1) channelsList.push(<img src={Envelope} alt="Email Icon"  className={styles.emailIcon} key='2'/>);

  return (
    <div className={[styles.cardContainer].join(' ')}>
      <p className={styles.engagementLevel}>{engagement_level[0].toUpperCase() + engagement_level.substring(1)}</p>
      
      <div className={[styles.name].join(' ')}
        ><b>{name}</b></div>
      
      <div className={[styles.description].join(' ')}
        >{description}</div>
      
      <section className={styles.tagsContainer}>
        <div>{displayedTags}</div>
        {moreTags}
      </section>
      
      <section className={styles.actionsSection}>
        <section className={styles.leftSection}>
          <div className={styles.numberOfActions}>{number_of_actions}</div>
          
          <div className={styles.actionText}>Actions</div>
        </section>
        
        <section className={styles.rightSection}>
          {channelsList}
        </section>
      </section>
      
      <button className={[styles.btn, styles.selectBtn].join(' ')}>SELECT</button>
    </div>
  );
}

export default Card;