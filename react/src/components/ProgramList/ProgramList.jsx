import React from 'react';
import Card from '../Card/Card'
import styles from './ProgramList.css';

const ProgramList = (props) => {
  const { isLoading, hasErrored, programs } = props;

  if (isLoading) return (
    <div>is loading</div>
  )

  if (hasErrored) return (
    <div>error</div>
  )

  const programList = programs.map((p, i )=> {
    return (
      <Card
        key={i}
        name={p.name}
        description={p.description}
        number_of_actions={p.number_of_actions}
        tags={p.tags}
        channels={p.channels}
        engagement_level={p.engagement_level}
        rating={p.rating}/>
    ) 
  })
  
  programList.push(<Card isAddProgram={true} key="add"/>);
  
  return (
    <section className={styles.programList}>
      {programList}  
    </section>

  )
}

export default ProgramList;