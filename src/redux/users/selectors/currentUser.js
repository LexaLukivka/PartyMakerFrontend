import { createSelector } from 'reselect'

const currentUser = (users, user_id, accounts) => {

  const user = users[user_id]

  if (!user) return null

  return {
    ...user,
    account: accounts.find(a => a.user_id),
  }
}

export default createSelector(
  state => state.users.entities,
  state => state.auth.user_id,
  state => Object.values(state.accounts.entities),

  currentUser,
)
