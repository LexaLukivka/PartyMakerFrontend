import Http from 'src/services/Http'

const Guest = {

  list(room_id) {
    return Http.get(`/rooms/${room_id}/guests`)
  },

  destroy(room_id, id) {
    return Http.delete(`/rooms/${room_id}/guests/${id}`)
  },
}

export default Guest