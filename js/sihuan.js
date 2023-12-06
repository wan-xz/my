 寮圭獥鍐呭
var popupNotice = 猸愭€濆够宸ヤ綔瀹も瓙;
var popupMainContent = 娆㈣繋浣跨敤鎬濆够宸ヤ綔瀹ゆ簮鐮侊紝甯屾湜澶氬鏀寔锛屼笅鏈熸簮鐮侀鍛婏細鎬濆够宸ヤ綔瀹や釜浜哄紩瀵奸〉锛屾洿澶氱簿褰╁敖鍦ㄨ懌鑺︿緺绀惧尯鈾�;
var popupJoinLink = httpqm.qq.comcgi-binqmqr_wv=1027&k=6fbsA_qL34UEEhRaFVWsq5lK-CYhip0B&authKey=b7Hbik4p1EYkZOzcHciCbyVZtsOquj9ReCSUvJrkazWq%2Bin5De1O%2FrK3e4qyC7Gy&noverify=0&group_code=104985778;

 鏄惁寮瑰嚭寮圭獥鐨勫彉閲�
var shouldPopup = 0;

 鍒涘缓寮圭獥鍏冪礌
var popupWrapper = document.createElement(div);
popupWrapper.className = popup-wrapper;

var popupContent = document.createElement(div);
popupContent.className = popup-content;

var popupNoticeElement = document.createElement(div);
popupNoticeElement.className = popup-notice;
popupNoticeElement.textContent = popupNotice;

var popupMainContentElement = document.createElement(div);
popupMainContentElement.className = popup-main-content;
popupMainContentElement.textContent = popupMainContent;

var popupButtons = document.createElement(div);
popupButtons.className = popup-buttons;

var popupCloseButton = document.createElement(button);
popupCloseButton.className = popup-btn-close;
popupCloseButton.textContent = 鍏抽棴;

var popupJoinButton = document.createElement(a);
popupJoinButton.className = popup-btn-join;
popupJoinButton.textContent = 鍔犲叆;
popupJoinButton.href = popupJoinLink;

popupButtons.appendChild(popupCloseButton);
popupButtons.appendChild(popupJoinButton);

popupContent.appendChild(popupNoticeElement);
popupContent.appendChild(popupMainContentElement);
popupContent.appendChild(popupButtons);

popupWrapper.appendChild(popupContent);

 寮瑰嚭寮圭獥鍑芥暟
function showPopup() {
  if (shouldPopup) {
    document.body.appendChild(popupWrapper);
  }
}

 鍏抽棴寮圭獥鍑芥暟
function closePopup() {
  document.body.removeChild(popupWrapper);
}

 鐩戝惉鍏抽棴鎸夐挳鐐瑰嚮浜嬩欢
popupCloseButton.addEventListener(click, closePopup);

 鐩戝惉鍔犵兢鎸夐挳鐐瑰嚮浜嬩欢
popupJoinButton.addEventListener(click, function(e) {
  e.preventDefault();
  var link = this.getAttribute(href);
  window.open(link);
});

 鏄剧ず寮圭獥
showPopup();