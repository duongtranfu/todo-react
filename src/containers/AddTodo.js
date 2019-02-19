import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddingToDo from '../components/AddingTodos';

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoAction: (data) => {
      dispatch(addTodo(data));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddingToDo)