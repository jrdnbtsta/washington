import React from 'react';
import { connect } from 'react-redux';

import { fetchPrograms } from '../../actions/programsAction/programsAction';
import ProgramList from '../../components/ProgramList/ProgramList';

import styles from './ProgramBuilder.css';

class ProgramBuilder extends React.Component {
  constructor(props) {
    super(props);

    //domain needs to be sent via api call to washington backend >> local vs. QA vs. prod
    this.programsUrl = `alexandria.mpulse.io/account/12/programs`;
  }

  render() {
    
    return (
      <section>
        <section>
          <div className={styles.title}>Program Builder</div>
          <div className={styles.description}>Get started, select a program to launch.</div>
        </section>
        <ProgramList
          isLoading={this.props.isLoading}
          hasErrored={this.props.hasErrored}
          programs={this.props.programs}/>
      </section>
    )
  }

  componentDidMount() {
    if (this.props.programs.length === 0) {
      this.props.getPrograms(this.programsUrl);
    }
  }
}

function mapStateToProps(state) {
  return {
    programs: state.programs,
    hasErrored: state.programsFetchError,
    isLoading: state.programsFetchLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPrograms: (url) => dispatch(fetchPrograms(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramBuilder);