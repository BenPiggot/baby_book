var photo

document.addEventListener("DOMContentLoaded", function(event) {


  var container = document.getElementById('visualization');

  var babyInfo = $('.temp_information').data('temp')

  var photoInfo = $('.photo_information').data('temp')

  for (var i = 0; i < photoInfo.length; i++) {
    for (var j = 0; j < photoInfo[i].length; j++ ) {
        console.log(photoInfo[i][j].event_id)
    }
  }

  var baby = []
  for (var i = 0; i < babyInfo.length; i++) {
    baby[i] = {}
    baby[i].id = i
    baby[i].content =  "<p class='caption'>" + babyInfo[i].topic + "</p>"
    baby[i].start = babyInfo[i].date
    baby[i].body = babyInfo[i].body
  }


  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet(baby);

  // Configuration for the Timeline
  var options = {
    orientation: "bottom",
    height: 250,
    min: "2013",
    max: "2018",
    start: "2013",
    end: "2015",
    // moveable: false,
    showCurrentTime: true,
    editable: {
      add: true,         // add new items by double tapping
      updateTime: true,  // drag items horizontally
      updateGroup: true // drag items from one group to another
   // delete an item by tapping the delete button top right
    }
  };

  // Create a Timeline
  var timeline = new vis.Timeline(
    container,
    items,
    options
    );

  $(function(){
    $('.item.box').on('click', function(){
      text = $(this).text()
      $("#hidden").slideDown('slow').css("opacity","1")
      $("body").prepend("<div id='PopupMask' style='position:fixed;width:100%;height:100%;z-index:10;background-color:gray;'></div>");
      $("#PopupMask").css('opacity', 0.8);
        for (var i = 0; i < babyInfo.length; i++) {
          if (babyInfo[i].topic === text) {
            $('#hidden-header').text(babyInfo[i].topic)
            $('.blurb').text(babyInfo[i].body)
            for (var j = 0; j < photoInfo.length; j++) {
                for (var k = 0; k < photoInfo[j].length; k++ ) {
                    if (photoInfo[j][k].event_id === babyInfo[i].id) {
                      photo = photoInfo[j][k].url
                    }
                  }
                }
            // $('.timeline-img').attr('src', 'http://i.telegraph.co.uk/multimedia/archive/01778/baby_1778233b.jpg')
            $('#photo-add').attr('href',"events/" + babyInfo[i].id + "/media/new")
            }
          }
      })
    $("#off").on('click', function() {

      $('#hidden').removeData();
      $("#hidden").slideUp('slow');
      setTimeout(function() {$('#PopupMask').fadeOut()}, 300);

    });
  });

});