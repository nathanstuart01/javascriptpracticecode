$(document).ready(function(){
//  $(function() {
//  let ids = '';
//  let $listItems = $('li');
//
//  $listItems.on('mouseover click', function() {
//    ids = this.id;
//    $listItems.children('span').remove();
//    $(this).append(' <span class="priority">' + ids + '</span>');
//  });

//  $listItems.on('mouseout', function() {
  //  $(this).children('span').remove();
//  });
//});

//$(function() {
//  $('li').on('click', function(e) {
//    $('li span').remove();
//    let date = new Date();
//    date.setTime(e.timeStamp);
//    let clicked = date.toDateString();
//    $(this).append('<span class="date">' + clicked + '' + e.type + '</span>');
//  });
//})

$(function() {
  let listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(#four)',
    {status: 'important'},
    function(e) {
      listItem = 'Item: ' + e.target.textContent + '<br />';
      itemStatus = 'Status: ' + e.data.status + '<br />';
      eventType = 'Event: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );
});
});
