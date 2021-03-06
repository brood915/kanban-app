import React from 'react';
import PropTypes from 'prop-types';
import TodoBox from '../components/TodoBox';
import InProgressBox from '../components/InProgressBox';
import CompletedBox from '../components/CompletedBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeTask } from '../actions/actions';
import { startTask } from '../actions/actions';
import { finishTask } from '../actions/actions';


const TaskContainer = (props) => 
   (  
    	<div className="taskContainer">
    	<TodoBox removeTask = {props.removeTask} tasks = {props.tasks} startTask = {props.startTask} border="#47B8E0 7px solid"><h4><span className="arrowDown"></span>To-Do</h4></TodoBox>
    	<InProgressBox removeTask = {props.removeTask} tasks = {props.tasks} finishTask = {props.finishTask} border="#fbd14b 7px solid"><h4><span className="arrowDown"></span>In-Progress</h4></InProgressBox>
    	<CompletedBox removeTask = {props.removeTask} tasks = {props.tasks} border="#FA5D29 7px solid"><h4><span className="arrowDown"></span>Done</h4></CompletedBox>
    	</div>
    );



TaskContainer.propTypes = {
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  startTask: PropTypes.func.isRequired,
  finishTask: PropTypes.func.isRequired
} 

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ removeTask, startTask, finishTask }, dispatch); 
};

const mapStateToProps = (state) => {
   return {
    tasks: state.tasks.tasks
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
