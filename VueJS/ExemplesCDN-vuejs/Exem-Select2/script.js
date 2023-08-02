const app = new Vue({
  el: '#app', // Elemento HTML que a aplicação Vue irá controlar
  mounted() {
    // Inicialize o Select2 no elemento #mySelect com a opção multiple: true
    $('#mySelect').select2({
      multiple: true
    })
  }
})
