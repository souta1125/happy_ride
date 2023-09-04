$(function(){
  // Clock
  function clock(){
    var clock = new Date();
    var h = ('0' + clock.getHours()).slice(-2);
    var m = ('0' + clock.getMinutes()).slice(-2);
    var s = ('0' + clock.getSeconds()).slice(-2);
    $('#show_clock').children('span').text(h + ':' + m + ':' + s);
  };

  setInterval(clock, 1000);

  // Audio
  // RIDE BELL
  var audio_RIDEBELL = new Audio();
  audio_RIDEBELL.src = 'audio/RideBell.wav';
  audio_RIDEBELL.load();

  $('#btn_RIDEBELL').click(function(){
    if($(this).hasClass('is_active')){
      $('.consoleLog').append('<p class="attantion">ライド準備は既に完了しています</p>')
    }else{
      audio_RIDEBELL.play();
      $(this).addClass('is_active');
    };
  });

  audio_RIDEBELL.addEventListener('ended', function(){
    $('#btn_RIDESTART').addClass('is_enable');
  });

  // RIDE MUSIC
  var PlayList = ['./audio/Ba La La La La La La La La.wav', './audio/Happy Song.wav', './audio/Koo Loo Lee.wav', './audio/One Sweet Ride.wav', './audio/A New Angle.wav', './audio/B-A-Y-M-A-Y.wav'];
  var audio_RIDE = new Audio();

  var num_RIDE = 0;

  $('#btn_RIDESTART').click(function(){
    if($(this).hasClass('is_enable')){
      if($(this).hasClass('is_active')){
        $('.consoleLog').append('<p class="attantion">ライド稼働中です</p>')
      }else{
        audio_RIDE.src = PlayList[num_RIDE];
        $(this).addClass('is_active');
        audio_RIDE.play();
        if(num_RIDE < PlayList.length){
          num_RIDE++;
          console.log(num_RIDE);
        }else{
          num_RIDE = 0;
        };
      };
    }else{
      $('.consoleLog').append('<p class="attantion">ライド準備を完了してください</p>')
    };
  });

  audio_RIDE.addEventListener('ended', function(){
    $('#btn_RIDESTART').removeClass('is_enable');
    $('#btn_RIDESTART').removeClass('is_active');
  });
})
