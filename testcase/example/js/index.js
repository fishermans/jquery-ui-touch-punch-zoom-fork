/***************************************
* Set up sortable
*/
$('.sort-me').sortable({
    items: ".sort-item",
    helper: "clone",
    zIndex: 999990
  })
  .disableSelection();
