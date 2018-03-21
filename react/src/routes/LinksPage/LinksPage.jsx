import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchImages } from '../../actions/imageAction/imageAction';
import ImageLinks from '../../components/ImageLinks/ImageLinks';

class LinksPage extends Component {
  render() {
    
    return (
        <ImageLinks 
          images={this.props.images} 
          hasError={this.props.hasErrored}
          isLoading={this.props.isLoading}
        />
    );
  }
  
  componentDidMount() {
    if (this.props.images.length === 0) {
      this.props.getImages('https://unsplash.it/list/');
    }
  }
}

function mapStateToProps(state) {
  return {
    // comes from api call above for getImages
    images: state.images,
    hasErrored: state.imageFetchError,
    isLoading: state.imagesLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getImages: (url) => dispatch(fetchImages(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LinksPage);
