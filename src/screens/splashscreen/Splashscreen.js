import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getUser } from '../state/actions/'
import styles from './Screen.styles'

class Screen extends Component {
  static navigationOptions = {
    header: null
  }

  wait = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

  async componentDidMount () {
    this.props.getUser().then(async (data2) => {
      await this.wait(500)
      if (data2.payload.fname) {
        this.props.navigation.navigate('Dashboard')
      } else {
        this.props.navigation.navigate('Login')
      }
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>INSIDE OUT</Text>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps, { getUser }
)(Screen)
