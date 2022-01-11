import { sleep } from 'k6'
import http from 'k6/http'

export let options = {
  duration: '5m',
  vus: 50,
}

const url = 'https://www.google.com/'

export default function() {
  const response = http.get(url)
  sleep(1)
}
