import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import HornForm from './Form';
import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data.json';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selected: '',
      image_url: '',
      description: '',
      searchText: '',
      horns: '',
    }
  }

  handleOpenModal = (beast) => {
    this.setState({
      showModal:true,
      selected: beast,
      image_url: data.filter(element => element.title === beast)[0].image_url,
      description: data.filter(element => element.title === beast)[0].description

    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleSearch = (searchText) => {
    this.setState({searchText});
  };

  handleSelect = (event) => {
    this.setState({
      horns: event.target.value
    })
  }



  render() {
    const filteredData = data.filter((item) =>
    (item.title.toLowerCase().includes(this.state.searchText.toLowerCase()) || (item.description.toLowerCase().includes(this.state.searchText.toLowerCase())))
    ).filter((hornVal) => {
      return String(hornVal.horns).includes(this.state.horns);
    });
    
    
    return (
      <>
        <Header />
        <div className="search-container">
          <Search className = "Search" onSearch={this.handleSearch} />
          <HornForm handleSelect = {this.handleSelect} />
        </div>
        
        <Main
        data={filteredData}
        handleOpenModal={this.handleOpenModal}
        />
        <SelectedBeast description={this.state.description} src={this.state.image_url} beast={this.state.selected} show={this.state.showModal} onHide={this.handleCloseModal} />
        <Footer />
      </>
    )
  }
}

export default App;
