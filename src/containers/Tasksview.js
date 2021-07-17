import {connect} from 'react-redux';
import Listview from '../listview';

const mapStateToProps =state=>({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    changetaskstat:id=> dispatch({ type: 'Change_task_stat', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Listview);