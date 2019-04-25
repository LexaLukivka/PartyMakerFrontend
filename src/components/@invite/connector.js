import { connect } from 'react-redux'
import currentUser from 'src/redux/users/selectors/currentUser'

const mapStateToProps = state => ({
  user: currentUser(state),
  guests: []
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)
