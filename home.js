var verticalposition;

document.body.addEventListener("wheel", () => {
  // Get the total available scroll length of the document
  var trackLength = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calculate how much the user has scrolled percentage-wise
  var pctScrolled = (window.scrollY / trackLength) * 100;

 

  //console.log("Vertical position:", window.scrollY);
  console.log("Scroll percentage:", pctScrolled);

  if (pctScrolled > 12 & pctScrolled < 20){

    var delayInMilliseconds = 500;

    setTimeout(function () {
    
      const counters = document.querySelectorAll('.count');
      const speed = 10;
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = parseInt(counter.getAttribute('data-target'));
          const count = parseInt(counter.innerText);
       const increment = Math.trunc((target) / speed);


          if (count < target ) {
            if (target < 50){
                counter.innerText = count + 1;
                setTimeout(updateCount, 500);
            }
else{
            counter.innerText = count + increment;
            setTimeout(updateCount, 500);


}
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    
    }, delayInMilliseconds);

  }
});









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

  document.getElementsByClassName("light")[0].click(1);