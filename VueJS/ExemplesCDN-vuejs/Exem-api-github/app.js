new Vue({
  el: '#app',
  data: {
    username: '',
    repositories: []
  },
  methods: {
    fetchRepositories() {
      if (this.username) {
        fetch(`https://api.github.com/users/${this.username}/repos`)
          .then(response => response.json())
          .then(data => {
            this.repositories = data
          })
          .catch(error => {
            console.error(error)
            this.repositories = []
          })
      }
    }
  }
})
