(function(){
  angular.module('BookList')
  .controller('booksController', booksController)

  function booksController($http){
    // var url = 'http://localhost:3000'
    var url = 'https://intense-waters-10666.herokuapp.com'
    var self = this

    $http.get(`${url}/books`)
      .then(function(response){
        self.books = response.data.books
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })

    self.index = function(books){
      return $http({
        url: `${url}/books`,
        method: 'GET',
        data: books
      })
      .then(function(response){
        self.books = response.data.books
        console.log('GOT BOOKS ===>', response.data.books);
      })
      .catch(function(error){
        console.log(error);
      })
    }

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
      .then(function(response){
        book.title = ''
        self.index();
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
        console.log(book);
      })
      .then(function(response){
        self.index();
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
      .then(function(response){
        self.index();
      })
      .catch(function(error){
        console.log(error);
      })
    }

    //Move book from to read -> read
    self.finished = function(book){
      book.read = true
      return $http({
        url: `${url}/books/${book.id}/finished`,
        method: 'PUT',
        data: book
      })
      .then(function(response){
        console.log(book.read);
      })
      .then(function(response){
        self.index();
      })
      .catch(function(error){
        console.log(error);
      })
    }

  }
})()
