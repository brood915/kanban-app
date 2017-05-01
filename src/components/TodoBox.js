import React from 'react';
import PropTypes from 'prop-types';
import Tasks from './Tasks';
import { Button } from 'react-bootstrap';


function TodoBox(props) {
    function handleOnClick(e) {
        let index = e.target.getAttribute('id');
        props.startTask(index);
        console.log(index);
    }		
	const border = {borderLeft: props.border};
    return (
    	<div className="taskBox" style = {border}>
	    	{props.children}
	    	{props.tasks
	    	.filter((each)=>(each.stage === 'ready'))
	    	.map((each, index)=>(
	    	<div  className="tasks" key={index}>
		    	<Tasks tasks={each}/>
		    	<Button id = {index} onClick = {handleOnClick} bsStyle='primary'>Start</Button>
		    </div>))}
    	</div>
    );
}




TodoBox.propTypes = {
	 startTask: PropTypes.func.isRequired,
	 tasks: PropTypes.array.isRequired
}

export default TodoBox;