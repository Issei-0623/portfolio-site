// スクロールしたらTOPボタン出現
$(function () {
  var topBtn = $("#page-top");
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn(500);
    } else {
      topBtn.fadeOut(500);
    }
  });
  //TOPボタンをクリックしてトップに移動
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

//モーダルで画像の拡大表示
$(".progate-img").click(function () {
  var imgSrc = $(this).find("img").attr("src");
  $(".progate-bigimg").attr("src", imgSrc);
  $(".progate-modal").fadeIn();
  $("body").css("overflow", "hidden");
  return false;
});

$(".progate-modal").click(function () {
  $(this).fadeOut();
  $("body").css("overflow", "auto");
});
