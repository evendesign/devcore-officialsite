// 移動 dom
// $( ".main-nav ul" ).appendAround();

// 讓服務頁副導覽，可以在第一畫面中顯示現在頁面標示。

// $('.quick-nav-title').on('click', function(event){
//   $('.quick-nav-list').toggleClass('open');
//   event.preventDefault()
// })

if ( $('.services-nav').length != 0 ) {
  $('.services-nav').scrollLeft( $('.services-nav-item.active').offset().left );
}

if ( $('.services-nav').length != 0 ) {
  jQuery(window).load(function() {
    setTimeout(function () {
      var $sideBar = $('.page-content-sidebar-affix')
      $sideBar.affix({
        offset: {
        top: function () {
                  console.log($('.page-content-sidebar-affix').offset().top -48);
                  return (this.top = $('.page-content-sidebar-affix').offset().top -48)
                },
        bottom: function () {
                  console.log($('.footer').outerHeight(true));
                  return (this.bottom = $('.footer').outerHeight(true) )
                }
        }
      })
      window._sidebar = $sideBar;
    }, 100)
  }).resize( function() {
    _sidebar.data('bs.affix').options.offset.bottom = $('.footer').outerHeight(true)
  })
}



