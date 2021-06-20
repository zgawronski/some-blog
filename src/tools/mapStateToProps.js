import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPosts, getUsers, getComments } from 'actions/usersActions';

const mapStateToProps = (state) => ({ data: state });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getPosts,
      getUsers,
      getComments,
    },
    dispatch,
  );

// eslint-disable-next-line no-undef
export default connect(mapStateToProps, mapDispatchToProps)(Card);
