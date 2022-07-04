export default function ({ $axios }) {
  $axios.onRequest((config) => {})

  $axios.onError((error) => {
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/auth')
    }
  })
}
