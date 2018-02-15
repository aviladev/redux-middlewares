import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class UserList extends Component {
  componentWillMount () {
    this.props.fetchUsers()
  }

  renderUser = ({name, company, website}) => (
    <div key={name}
      className="card mb-4"
      style={{ minWidth: 300, width: '30%' }}
    >
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{company.name}</p>
        <a href={website} className="btn btn-primary">Website</a>
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
