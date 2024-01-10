/** @format */

// section-1

const headerItemTop = document.querySelector(".clothe-item-top");
const headerItemBottom = document.querySelector(".clothe-item-bottom");
let toggle = true;
setInterval(() => {
  if (toggle) {
    headerItemTop.src = "./imgs/header-item-top.png";
    headerItemBottom.src = "./imgs/header-item-bottom.png";
  } else {
    headerItemTop.src = "./imgs/header-item-bottom.png";
    headerItemBottom.src = "./imgs/header-item-top.png";
  }
  toggle = !toggle;
}, 1000);

const tl = gsap.timeline();
tl.from(".animate-logo", {
  y: 320,
  autoAlpha: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power.in",
});

gsap.to("#animate-star-1, #animate-star-4", {
  rotate: 360,
  duration: 10,
  repeat: -1,
  ease: "none",
});

// section - 3;
let itemNum = 0;
const displayItem = document.getElementById("section-3-item");
displayItem.src = `./imgs/week01_${itemNum + 1}.png`;
// setInterval(() => {
//   console.log(itemNum);
//   if (itemNum < 3) {
//     displayItem.src = `./imgs/week01_${itemNum + 1}.png`;
//     itemNum++;
//   } else {
//     itemNum = 0;
//   }
// }, 500);

// send data
// document.getElementById('submitForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // 폼의 기본 제출 동작 방지
  
//     // 폼 데이터를 가져옵니다
//     var formData = new FormData(this);
  
//     // fetch API를 사용하여 데이터를 비동기적으로 전송
//     fetch(this.action, {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//       // 응답 처리
//       alert('응모되었습니다'); // 성공 메시지 표시
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   });
  
const submitbtns = document.getElementById('submitButton');
submitbtns.addEventListener('click', () => {
    alert("응모가 완료되었습니다.")
})