import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleActions from '../../actions';

function mapStateToProps(state, props) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch)
  }
}

class PeopleContainer extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
    this.addPeople = this.addPeople.bind(this);
  }

  addPeople() {
    const people = this.state.input.trim();
    if (people !== '') {
      this.props.actions.addPeople(people);
    }
  }

  render() {
    const { people } = this.props;
    const { input } = this.state;
    const peopleList = people.map((p, index) => (
      <div key={index}>{p}</div> 
    ));
    return (
      <div>
        <input
          value={input}
          onChange={e => this.setState({ input: e.target.value })} 
        />
        <button onClick={() => this.addPeople()}>submit</button>
        {peopleList}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);