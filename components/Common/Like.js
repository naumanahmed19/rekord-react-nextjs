import { Component } from "react";

class Like extends Component {
  state = { liked: false, likes: 0 };
  classNames = (size) => {
    let classNames = [size,'text-primary'];
    const icon = this.state.liked ? "icon-heartbeat" : "icon-heart-o";
    classNames.push(icon);
    return classNames.join(" ");
  };
  handleLike = () => {

  

    let likes = this.state.likes;
    !this.state.liked ? likes++ : likes--;
    let liked = !this.state.liked;
    this.setState({
      liked,
      likes
    });

  };

  componentDidMount() {

    this.setState({
      likes: this.props.likes,
      liked: this.props.liked,
    });
  }

  render() {
    const { size = "s-18",className } = this.props;

    return (
      <span className={className +' clickable relative '} onClick={this.handleLike}>
        <i className={this.classNames(size)}></i>
        <span className="fav-count">
          <span>{this.state.likes}</span>

   
        </span>
      </span>
    );
  }
}

export default Like;
