$( document ).ready(function() {

  var wineQuery = function(name){

    return $.ajax({
      url: "http://daretodiscover.net/wine",
      data: {id:name}
    });

  };

  $.when(wineQuery(name)).done(function(results){
    var ul = $("<ul>").attr("id", "list");
    results.forEach(function(wine){
      
      // console.log(results);
      // console.log(wine);
      // wine.forEach(function(wine){

      var wineHTML = HandlebarsTemplates["wines"](wine);
      ul.append(wineHTML);
    });
    $("#container").append(ul);

    // });
  });

  // Library.loadBooks = function() { // Fetch all the books
  //   $("#books").remove(); //clear out books
  //   $.get("/books").done(function(books){ // AJAX request
  //     var ul = $("<ul>").attr("id", "books"); // Create a ul to use later
  //     books.forEach(function(book){ // iterate through the books our AJAX returned
  //       var bookHTML = HandlebarsTemplates["books/book"](book);
  //       ul.append(bookHTML); // append the li to the ul
  //     });
  //     $("#container").append(ul);
  //   });
  // };

});