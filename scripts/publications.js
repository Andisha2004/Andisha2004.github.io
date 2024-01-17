$('#button-img1').click(function() {
    $('#big-img1').removeClass('hidden');
    $('#big-img1-close').removeClass('hidden');
  });
  $('#close-img1').click(function() {
    $('#big-img1-close').addClass('hidden');
  });
  $('#button-next1').click(function() {
    $('#big-img1-close').addClass('hidden');
    $('#big-img2').removeClass('hidden');
    $('#big-img2-close').removeClass('hidden');
  });
  $('#button-prev1').click(function() {
    $('#big-img1-close').addClass('hidden');
    $('#big-img3').removeClass('hidden');
    $('#big-img3-close').removeClass('hidden');
  });


  $('#button-img2').click(function() {
    $('#big-img2').removeClass('hidden');
    $('#big-img2-close').removeClass('hidden');

  });
  $('#close-img2').click(function() {
    $('#big-img2-close').addClass('hidden');
  });
  $('#button-next2').click(function() {
    $('#big-img2-close').addClass('hidden');
    $('#big-img3').removeClass('hidden');
    $('#big-img3-close').removeClass('hidden');
  });
  $('#button-prev2').click(function() {
    $('#big-img2-close').addClass('hidden');
    $('#big-img1').removeClass('hidden');
    $('#big-img1-close').removeClass('hidden');
  });


  $('#button-img3').click(function() {
    $('#big-img3').removeClass('hidden');
    $('#big-img3-close').removeClass('hidden');

  });
  $('#close-img3').click(function() {
    $('#big-img3-close').addClass('hidden');
  });
  $('#button-next3').click(function() {
    $('#big-img3-close').addClass('hidden');
    $('#big-img1').removeClass('hidden');
    $('#big-img1-close').removeClass('hidden');
  });
  $('#button-prev3').click(function() {
    $('#big-img3-close').addClass('hidden');
    $('#big-img2').removeClass('hidden');
    $('#big-img2-close').removeClass('hidden');
  });
