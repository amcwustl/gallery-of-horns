import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data/data.json';
import './Main.css';

class Main extends React.Component {
  render(){
    return (

      <main>
        {this.props.data.map(beastObj => {
          return <HornedBeast handleOpenModal={this.props.handleOpenModal} image_url={beastObj.image_url} title ={beastObj.title} description ={beastObj.description} />
        })}
      </main>
    )
  }
}

export default Main;