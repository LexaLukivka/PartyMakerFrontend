/* eslint-disable class-methods-use-this */
import Http from 'src/services/Http'

class Party {
  all() {
    return Http.get('/party')
  }

  find(id) {
    return Http.get(`/party/${id}`)
  }

  create(form) {
    const party = {
      title: form.title,
      type: form.type,
      address: {
        address: form.address.formatted_address,
        lng: form.address.geometry.location.lng,
        lat: form.address.geometry.location.lat,
        placeId: form.address.placeId,
      },
      district: form.district,
      pictures: form.pictures,
      telegram_url: form.telegramUrl,
      description: form.description,
      people_max: form.peopleMax,
      people_min: form.peopleMin,
      start_time: form.startTime,
      private_party: form.privateParty,
    }

    return Http.post('/party', party)
  }
}

export default new Party()
