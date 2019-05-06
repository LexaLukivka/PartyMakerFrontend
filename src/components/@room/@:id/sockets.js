import Socket from 'services/Socket'

export default async function connectToSockets({ match, actions, auth }) {

  const room_id = match.params.id

  await Socket.subscribe(`room:${room_id}`)

  Socket.emit('join', room_id)

  Socket.on('join', (user_id) => {
    actions.room.messages.read(room_id)
    actions.users.online(user_id)
  })

  Socket.on('leave', actions.users.offline)

  Socket.on('message', actions.room.messages.receive)

}
