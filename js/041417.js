$(document).ready(function(){
//  $('h2').hide().slideDown();
//  let $li = $('li');
//  $li.hide().each(function(index) {
//    $(this).delay(700 * index).fadeIn(700);
//  });
//  $li.on('click', function() {
//    $(this).fadeOut(700);
//  });

//$(function() {
//  $('li').on('click', function() {
//    $(this).animate({
//      opacity: 0.0,
//      paddingLeft: '+=200'
//    }, 500, function() {
//      $(this).remove();
//    });
//  });
//});

//$(function() {
//  let $h2 = $('h2');
//  $('ul').hide();
//  $h2.append('<a class="show">show</a>');

//  $h2.on('click', function() {
//    $h2.next()
//      .fadeIn(500)
//      .children('.hot')
//      .addClass('complete');
//    $h2.find('a').fadeOut();
//  });
//});

//  let $listItems = $('li');
//  $listItems.filter('.hot:last').removeClass('hot');
//  $('li:not(.hot)').addClass('cool');
//  $listItems.has('em').addClass('complete');
//
//  $listItems.each(function() {
//    let $this = $(this);
//    if ($this.is('hot')) {
//      $this.prepend('Priorty item: ');
//    }
//  });
//  $('li:contains("honey")').append(' (local)');
//  });
//  $(function() {
//    $('li:lt(2)').removeClass('hot');
//    $('li').eq(0).addClass('complete');
//    $('li:gt(2)').addClass('cool');
//  });
//  $(function() {
//    let $newItemButton = $('#newItemButton');
//    let $newItemForm = $('#newItemForm');
//    let $textInput = $('input:text');
//
//    $newItemButton.show();
//    $newItemForm.hide();
//
//    $('#showForm').on('click', function(){
//      $newItemButton.hide();
//      $newItemForm.show();
//    });
//
//    $newItemForm.on('submit', function(e) {
//      e.preventDefault();
//      let newText = $textInput.val();
//      $('li:last').after('<li>' + newText + '</li>');
//      $newItemForm.hide();
//      $newItemButton.show();
//      $textInput.val('');
//    });
//  });

//$(function() {
//  let $p = $('p');
//  let $clonedQuote = $p.clone();
//  $p.remove();
//  $clonedQuote.insertAfter('h2');

//  let $moveItem = $('#one').detach();
//  $moveItem.appendTo('ul');
//});

$(function() {
  let listHeight = $('#page').height();
  $('ul').append('<p>Height: ' + listHeight + 'px</p>');
  $('li').width('50%');
  $('li#one').width(125);
  $('li#two').width('75%');
});










});
