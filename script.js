
/*=======Function to handle accordion=====*/

function handleAccordion() {
  const faqs = document.querySelectorAll("[data-faq]");

  faqs.forEach((faq) => {
    faq.addEventListener("click" , function() {
     const answerWrapper = this.querySelector("[data-answer-wrapper]");
     answerWrapper.classList.toggle("show");
   })
 })
}

handleAccordion();

/*======Function to change body background========*/

function changeBodyBg() {
  const body = document.body;
  const mobileBg = document.body.dataset.bgMobile;
  const desktopBg = document.body.dataset.bgDesktop;

  const changeBg = () => {
    if(window.innerWidth > 375) {
      body.style.backgroundImage = `url("${desktopBg}")`;
    } else {
      body.style.backgroundImage = `url("${mobileBg}")`;
    }
  }

  window.addEventListener("resize",changeBg);
  window.addEventListener("load",changeBg);
}

changeBodyBg();