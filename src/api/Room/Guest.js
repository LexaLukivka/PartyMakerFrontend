import Http from 'services/Http'

const guest = {

  list(room_id) {
    return Http.get(`/rooms/${room_id}/guests`)
  },

  kick(room_id, id) {
    return Http.delete(`/rooms/${room_id}/guests/${id}`)
  },
}

export default guest
