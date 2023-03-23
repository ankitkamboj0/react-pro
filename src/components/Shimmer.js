import { Component } from 'react';
class Shimmer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('did mount');
  }
  componentDidUpdate() {
    console.log('component did update');
  }
  render() {
    console.log('render', this.props);
    return (
      <div className="grid-gap-20 flex flex-wrap">
        {Array(this.props.lengthOfBlocks)
          .fill('')
          .map((_, index) => (
            <div className="shimmer-card" key={index}>
              <div className="shimmerBg media"></div>
              <div className="shimmer-lines">
                <div className="shimmerBg content-line"></div>
                <div className="shimmerBg content-line"></div>
                <div className="shimmerBg content-line"></div>
                <div className="shimmerBg content-line end"></div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
export default Shimmer;
