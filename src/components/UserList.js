import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class UserList extends Component {
  componentWillMount () {
    this.props.fetchUsers()
  }

  renderUser = ({name}) => (
    <div key={name}
      className="card mb-4"
      style={{ minWidth: 300, width: '30%' }}
    >
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Company Name</p>
        <a href="#" className="btn btn-primary">Email</a>
      </div>
    </div>
  )

  render () {
    const { users } = this.props

    const style = {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }

    return (
      <div className="container pt-2" style={style}>
        {users.map(this.renderUser)}
      </div>
    )
  }
}

const mapStateToProps = ({users}) => ({users})

export default connect(mapStateToProps, {fetchUsers})(UserList)
