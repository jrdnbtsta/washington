import React from 'react';
import { connect } from 'react-redux';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { ROUTE_BASE } from '../config/styles';
import { fetchArticles } from '../actions/articlesAction';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.articlesUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=07437e5aea824797941b6c54487cd1c4'
    this.state = {
      articles: {}
    };
  }

  componentDidMount() {
    this.props.getArticles(this.articlesUrl)
      .then(() => this.setState({ articles: this.props.articles }));
  }

  createCardRow(list) {
    if (!list) return [];
    return list.map(article => (
        <Card
          style= {
            { 
              verticalAlign: 'top',
              margin: '10px',
            }
          }
        >
          <CardHeader
            title={article.title}
            subtitle={`By ${article.author}`}
            avatar={article.urlToImage}
            actAsExpander={true}
          />
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>   
    ))
  }

  render() {
    return (
      <section className="route" id="home" style={ROUTE_BASE} >
        <div style = {
          {
            overflowX: 'scroll',
            overflowY: 'hidden',
            whiteSpace: 'nowrap'
          }
        }
    >{ this.createCardRow(this.state.articles.data) }</div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    hasErrored: state.articlesFetchError,
    isLoading: state.articlesFetchLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArticles: url => dispatch(fetchArticles(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);