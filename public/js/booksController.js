(function(){
  angular.module('BookList')
  .controller('booksController', booksController)

  function booksController($http){
    var url = 'http://localhost:3000'
    var self = this

    $http.get(`${url}/books`)
      .then(function(response){
        self.books = response.data.books
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })

    self.create = function(book){
      return $http({
        url: `${url}/books`,
        method: 'POST',
        data: book
      })
      .then(function(response){
        book.title = response.data.book.title
        book.read = response.data.book.read
      })
      .catch(function(error){
        console.log(error);
      })
    }

    self.update = function(book){
      return $http({
        url: `${url}/books/${book.id}`,
        method: 'PUT',
        data: book
      })
      .then(function(response){
        book.title = response.data.book.title
        book.read = response.data.book.read
        console.log(book);
      })
      .catch(function(error){
        console.log(error);
      })
    }

    self.destroy = function(book){
      return $http({
        url: `${url}/books/${book.id}`,
        method: 'DELETE',
        data: book
      })
      .then(function(response){
        console.log('DELETE WORKS', response);
      })
      .catch(function(error){
        console.log(error);
      })
    }

  }
})()
