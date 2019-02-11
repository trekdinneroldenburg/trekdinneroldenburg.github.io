$('.scroll').on('click', function(e){
    var id = $(this).attr('href');
    $('html, body').animate({
        scrollTop:$(id).offset().top - 45
    },'slow');
    e.preventDefault();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('nav').addClass("visible");
    }
    else{
        $('nav').removeClass("visible");
    }
});

window.onload = () => {
  table = document.querySelector('#dates');

  fetch('./dates.json')
  .then(data => data.json())
  .then(dates => {
    dates.forEach(event => {
      let newRow = table.insertRow(-1);
      
      let cellDate = newRow.insertCell(0),
          cellTime  = newRow.insertCell(1);
    
      let dateText  = document.createTextNode(event.date),
          timeText  = document.createTextNode(event.time);

      cellDate.appendChild(dateText);
      cellTime.appendChild(timeText);  
    })
  })
    
}
