import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	showModal: false,
      input: []
    	}
	}

	close() {
		this.setState({showModal: false});
    this.setState({input: []});
	}

	open() {
		this.setState({showModal: true});
	}

  addInput () {
    const input = this.state.input;
    const key = input.length;
    input.push(<input key = {key.toString()} name = {"task" + key} type = 'text' placeholder="Task"/>);
    this.setState({input});
  }

  removeInput (e) {
    const input = this.state.input;
    input.pop();
    this.setState({input});

  }

	render() {
      return(<div className = "modal">
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
          className = "openBtn"
        >
          Add
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add your task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <input type = 'text' name="name" placeholder="Name" />
            <input type = 'text' name="exp" placeholder="Explanation" />
            <input type = 'text' name="task" placeholder="Task" />
            {this.state.input.map(function(each){return each})}
            <section>
            <span className="modalBtn" onClick={this.addInput.bind(this)}>+</span>
            {this.state.input.length !== 0 &&
               <span className="modalBtn" onClick={this.removeInput.bind(this)}>-</span>
            }
            </section>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle='primary'>Add</Button>
            <Button bsStyle='primary' onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>)
	}
}

ModalContainer.propTypes = {

}

const mapDispatchToProps = (dispatch) => {
   return {

   }
};

const mapStateToProps = (state) => {
   return {

   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);