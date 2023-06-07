import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      favorites: 0,
      heart: '♡',
      dark: false
    }
  }

  favorite = () => {
    this.setState({
      favorites: this.state.favorites + 1,
      heart: '❤️'

    })
  }

  // prevState fix from chatGPT
  darkBeast = () => {
    this.setState((prevState) => ({
      dark: !prevState.dark,
    }));
  }

  openModalHelper = () => {
    this.props.handleOpenModal(this.props.title)
  }
  
  render(){
    return(
      <Card style={{ width: '18rem' }}>
      <div className = "image-container">
        <Card.Img onClick= {this.openModalHelper} className={this.state.dark ? 'negative-image': ''} variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.description} />
      </div>
      <Card.Body>
        <Card.Title>{this.props.title}<br />{this.state.heart} {this.state.favorites} favorites</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <Button onClick= {this.darkBeast} variant="dark">{this.state.dark ? 'Back to Normal' : 'Take me to the Upside Down'}</Button>
        <Button onClick= {this.favorite} variant="dark">Favorite This Beast</Button>
      </Card.Body>
    </Card>
    )
  }
}

export default HornedBeast;