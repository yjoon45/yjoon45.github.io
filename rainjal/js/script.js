 

  function ClickMenu(){
    const OpenNavigation = document.getElementById("nav-links");
    const MenuBtn = document.getElementById("menu");
    const closeBtn = document.getElementById("close")
    
    MenuBtn.addEventListener("click" , () => {
        OpenNavigation.style.left = "0"
    });

    closeBtn.addEventListener("click" , () => {
        OpenNavigation.style.left = "100%"
    })

  }

  ClickMenu();


  function accordion() {
     const question = document.querySelectorAll(".question");
    
    
     question.forEach((element) => {
      element.addEventListener("click" , () => {
        question.forEach((elm) => {
          elm.classList.remove("active");
        })
        element.classList.add("active");
      })
     });    

    
  }

  accordion();