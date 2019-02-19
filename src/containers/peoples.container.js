import { connect } from 'react-redux';
import TablePeople from '../components/TablePeople';
import { addPerson, removePeople } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        people: state.people
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPeople: (people) => {
            dispatch(addPerson(people));
        },
        deletePeople: (id) => {
            dispatch(removePeople(id));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TablePeople);