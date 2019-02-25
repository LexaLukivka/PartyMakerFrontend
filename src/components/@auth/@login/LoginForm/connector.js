import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import auth from 'src/redux/app/auth/action'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: {
    login: bindActionCreators(auth.login, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)