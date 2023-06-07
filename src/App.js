import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
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



  render() {
    const filteredData = data.filter((item) =>
    (item.title.toLowerCase().includes(this.state.searchText.toLowerCase()) || (item.description.toLowerCase().includes(this.state.searchText.toLowerCase())))
    );
    return (
      <>
        <Header />
        <Search className = "Search" onSearch={this.handleSearch} />
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
