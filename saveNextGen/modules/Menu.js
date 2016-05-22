var CurrForm;
var OldForm;
var easeIn = kony.anim.EASIN_IN;
var forwards = kony.anim.FILL_MODE_FORWARDS;
var backwards = kony.anim.FILL_MODE_BACKWARDS;
// Default animation duration
var duration = 0.4;

// onClick action for hamburger icons on Android
function showMenu() {
    CurrForm  = kony.application.getCurrentForm();
	
  
  	if (CurrForm.flxMenuContainerKA){
      
    } else {
    CurrForm.add(frmMenuKA.flxMenuContainerKA);

  	CurrForm.flxMenuKA.left = "-85%";
  	CurrForm.flxMenuBkgKA.isVisible = false;
    CurrForm.flxMenuBkgKA.opacity = 0;
    animateMenu();
   }
}

// Show Android Nav
function animateMenu(){
  CurrForm.flxMenuKA.animate(
        kony.ui.createAnimation({"100":{"left": "0%","stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration/1.3, "delay": 0.3},
        {"animationEnd": function () {}}
    );
  	CurrForm.flxMenuBkgKA.isVisible = true;
    CurrForm.flxMenuBkgKA.animate(
        kony.ui.createAnimation({"100":{"opacity": 1,"stepConfig":{"timingFunction": easeIn}}}),
        {"fillMode": forwards, "duration": duration},
        {"animationEnd": function () {}}
    );
}

// Close Android Nav and remove it from the form
function closeMenu(){
  if (CurrForm.flxMenuContainerKA){
    CurrForm.flxMenuKA.animate(
          kony.ui.createAnimation({"100":{"left": "-85%","stepConfig":{"timingFunction": easeIn}}}),
          {"fillMode": forwards, "duration": duration/1.3},
          {"animationEnd": function () {}}
      );

      CurrForm.flxMenuBkgKA.animate(
          kony.ui.createAnimation({"100":{"opacity": 0,"stepConfig":{"timingFunction": easeIn}}}),
          {"fillMode": forwards, "duration": duration},
          {"animationEnd": function () {
               //CurrForm.navigationDrawerBkg.isVisible = false;
               CurrForm.remove(CurrForm.flxMenuContainerKA);
              }
          }
      );
  }
}

