import react, {PureComponent, Fragment} from 'react';
import propTypes from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying = props.isPlaying;
    }

    componentDidMount() {
      
    }
  }
}
