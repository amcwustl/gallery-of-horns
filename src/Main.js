import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import './Main.css';

class Main extends React.Component {
  render(){
    return (

      <main>
        {data.map(beastObj => {
          return <HornedBeast image_url={beastObj.image_url} title ={beastObj.title} description ={beastObj.description} />
        })}
      </main>
    )
  }
}

export default Main;