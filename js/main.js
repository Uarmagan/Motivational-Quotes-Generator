$(document).ready(function() {
  getQuote();
});

function getQuote() {
  $.ajax({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json',
    dataType: 'json'
  }).done(function(data) {
    let q = data[Math.floor(Math.random() * data.length)];
    $("#quote").html('"' + q.quoteText + '"');
    $("#author").html(q.quoteAuthor || 'Anonymous');
  });
}

function tweetIt() {
  let currQuote = $('#quote').text();
  let currAuthor = $('#author').text();
  window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(currQuote + "  -" + currAuthor));

}
