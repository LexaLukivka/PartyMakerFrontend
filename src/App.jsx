import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import init from 'lib/init'
import theme from './styles/theme'
import Layout from 'containers/Layout'
import moment from 'moment'
import 'assets/index.css'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'
import { createMuiTheme } from '@material-ui/core/styles'

moment.locale('ru')

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
  }, [])

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <Layout />
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default init(App)
