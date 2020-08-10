import React, {PureComponent} from "react";

const withPreview = (Component) => {
  class WithPreview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this._handleSmallMovieCardMouseOver = this._handleSmallMovieCardMouseOver.bind(this);
      this._handleSmallMovieCardMouseOut = this._handleSmallMovieCardMouseOut.bind(this);
    }

    _handleSmallMovieCardMouseOver() {
      this.setState({
        isPlaying: true
      });
    }

    _handleSmallMovieCardMouseOut() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onCardOver = {this._handleSmallMovieCardMouseOver}
          onCardOut = {this._handleSmallMovieCardMouseOut}
        />
      );
    }
  }

  return WithPreview;
};

export default withPreview;
