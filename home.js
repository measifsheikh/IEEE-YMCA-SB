document.getElementsByClassName("light")[0].click(1);

    var delayInMilliseconds = 1500;

    setTimeout(function () {

      const counters = document.querySelectorAll('.count');
      const speed = 10;
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = parseInt(counter.getAttribute('data-target'));
          const count = parseInt(counter.innerText);
          const increment = Math.trunc(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });

    }, delayInMilliseconds);

 

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
