// 로그인 시 팝업 구현
window.onload = function() {
    showPopup();
  };

function showPopup() {
    var popup = document.getElementById("popup");
    popup.innerHTML = "로그인 되었습니다.";
    popup.style.display = "block";
    setTimeout(hidePopup, 3000); // 3초 후 팝업을 숨깁니다.
  }
  
  function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

