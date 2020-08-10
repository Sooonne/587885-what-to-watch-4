import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentactiveItem: props.defaultItem,
      };

      this._handleItemClick = this._handleItemClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          currentactiveItem: this.props.defaultItem,
        });
      }
    }

    _handleItemClick(activeItem) {
      this.setState({
        currentactiveItem: activeItem,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onItemClick={this._handleItemClick}
          activeItem={this.state.currentactiveItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    defaultItem: PropTypes.string.isRequired,
  };

  return WithActiveItem;
};

export default withActiveItem;
