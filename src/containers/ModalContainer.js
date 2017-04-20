import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style/main.scss';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


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
    input.push(<input type = 'text' placeholder="Task" />);
    this.setState({input});

  }


	render() {
      return(<div className ={styles.modal}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
        >
          Add
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add your task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <input type = 'text' placeholder="Name" />
            <input type = 'text' placeholder="Explanation" />
            <input type = 'text' placeholder="Task" />
            {this.state.input.map(function(each){return each})}
            <div className={styles.modalBtn} onClick={this.addInput.bind(this)}>+</div>
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

export default ModalContainer;