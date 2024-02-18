document.getElementsByClassName("light")[0].click(1);

$( ".light" ).on("click", function() {
  if( $( "#nav11" ).hasClass( "dark" )) {
      $( "#nav11" ).removeClass( "dark" );
      
  } else {
      $( "#nav11" ).addClass( "dark" );
  }
  if( $( "#about" ).hasClass( "dark-about" )) {
      $( "#about" ).removeClass( "dark-about" );
      
  } else {
      $( "#about" ).addClass( "dark-about" );
  }

  if( $( "#project" ).hasClass( "dark-project" )) {
      $( "#project" ).removeClass( "dark-project" );
      
  } else {
      $( "#project" ).addClass( "dark-project" );
  }
  
  if( $( "#Event" ).hasClass( "dark-event" )) {
      $( "#Event" ).removeClass( "dark-event" );
      
  } else {
      $( "#Event" ).addClass( "dark-event" );
  }
  if( $( "#Membership" ).hasClass( "dark-Membership" )) {
      $( "#Membership" ).removeClass( "dark-Membership" );
      
  } else {
      $( "#Membership" ).addClass( "dark-Membership" );
  }
  if( $( "#glimpse-tag-1" ).hasClass( "dark-glimpse-tag-1" )) {
      $( "#glimpse-tag-1" ).removeClass( "dark-glimpse-tag-1" );
      
  } else {
      $( "#glimpse-tag-1" ).addClass( "dark-glimpse-tag-1" );
  }
  if( $( "#glimpse-tag" ).hasClass( "dark-glimpse-tag" )) {
      $( "#glimpse-tag" ).removeClass( "dark-glimpse-tag" );
      $( ".change" ).text( "Darkness awaits ❦." );
  } else {
      $( "#glimpse-tag" ).addClass( "dark-glimpse-tag" );
      $( ".change" ).text( "Let there be light 🪄" );
  }
});
