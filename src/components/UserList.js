import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class UserList extends Component {
  componentWillMount () {
    this.props.fetchUsers()
  }

  renderUser = ({name}) => (
    <div key={name}>
      <h4>{name}</h4>
      <p>Company Name</p>
      <a>Email</a>
    </div>
  )

  render () {
    const { users } = this.props

    return (
      <div>
        {users.map(this.renderUser)}
      </div>
    )
  }
}

const mapStateToProps = ({users}) => ({users})

export default connect(mapStateToProps, {fetchUsers})(UserList)
