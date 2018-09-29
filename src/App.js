import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ModelDetails from './components/ModelDetails';
import addComputer from './actions/addComputer';

const data = {
  'Ivel Z3': {
    manufacturer: 'Ivasim',
    year: 1969,
    origin: 'Croatia'
  },
  'Bally Astrocade': {
    manufacturer: 'Bally Consumer Products',
    year: 1977,
    origin: 'USA'
  },
  'Sord M200 Smart Home Computer': {
    manufacturer: 'Sord Computer Corporation',
    year: 1971,
    origin: 'Japan'
  },
  'Commodore 64': {
    manufacturer: 'Commodore',
    year: 1982,
    origin: 'USA'
  }
};

class App extends Component {
  state = {
    value: null
  };
  updateSelection = e => {
    if (e.target.value) {
      this.setState({
        value: e.target.value
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value) {
      const modelDetails = data[this.state.value];
      this.props.dispatch(addComputer(this.state.value, modelDetails));
    }
    this.setState({
      value: null
    });
  };
  render() {
    const computerNames = Object.keys(data);
    return (
      <div className="App">
        <h1>Homework week 3</h1>
        <div className="main">
          <ModelDetails computers={this.props.computers} />
          <form>
            <select className="select-model" onChange={this.updateSelection}>
              <option value="">-- pick a model --</option>
              {computerNames.map((comp, i) => (
                <option key={i} value={comp}>
                  {comp} ({data[comp].year})
                </option>
              ))}
            </select>
            <button className="add-btn" onClick={this.handleSubmit}>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    computers: state
  };
};

export default connect(mapStateToProps)(App);
