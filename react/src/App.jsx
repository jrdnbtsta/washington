import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import NotFound from './routes/NotFound/NotFound';
import ImagePage from './routes/ImagePage/ImagePage';
import LinksPage from './routes/LinksPage/LinksPage';
import ProgramBuilder from './routes/ProgramBuilder/ProgramBuilder';
import { fetchImages } from './actions/imageAction/imageAction';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div id={styles.app}>
            <Header />
            {/* <Navbar /> */}
            <div id={styles.main}>
              <Switch>
                <Route exact={true} path="/" component={ProgramBuilder} />
                <Route path="/ProgramBuilder" component={ProgramBuilder} />              
                <Route path="/ImagePage" component={ImagePage} />
                <Route path="/LinksPage" component={LinksPage} />
                <Route component={NotFound} />
              </Switch>
            </div>
            {/* <SideBar /> */}
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }

  //if want to make api calls when app is opened
  // componentDidMount() {
  //   this.props.getImages('https://unsplash.it/list');
  // }
}

function mapDispatchToProps(dispatch) {
  return {
    getImages: (url) => dispatch(fetchImages(url))
  }
}



export default connect(null, mapDispatchToProps)(App);

