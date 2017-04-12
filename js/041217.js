$(document).ready(function() {
  //$('li em').addClass('seasonal');
//$('li.hot').addClass('favorite');
//$('li[id!="one"]')
//  .hide()
//  .delay(500)
//  .fadeIn(1400);
//var $listHTML = $('ul').html();
//$('ul').append($listHTML);
//var $listText = $('ul').text();
//$('ul').append('<p>' + $listText + '</p>');

//let $listItemHTML = $('li').html();
//$('li').append('<i>' + $listItemHTML + '</i>');
//let $listItemText = $('li').text();
//$('li').append('<i>' + $listItemText + '</i>');
//$(function() {
  //$('li:contains("pine")').text('almonds');
//  $('li.hot').html(function() {
//    return '<em>' + $(this).text() + '</em>';
//  });
//  $('li#one').remove();
//});
//$(function() {
  //$('ul').before('<p class="notice">Just updated</p>');
  //$('li.hot').prepend('+ ');
  //let $newListItem = $('<li><em>gluten free</em> soy sauce</li>');
  //$('li:last').after($newListItem);
//});
//$(function() {
//  $('li#three').removeClass('hot');
//  $('li.hot').addClass('favorite');
//  $('ul').attr('id', 'group');
//});
$(function() {
  $('li').each(function() {
    let ids = this.id;
    $(this).append(' <span class="order">' + ids + '</span>');
  });
});

});
