export const onMousehandler = () => {
  
  setTimeout(() => {
    const elements = document.getElementById("circleMain");
  const circleD = document.getElementById("aa");
  // elementsSmall.style.display = "none";
  elements.style.width = "8px";
  elements.style.height = "8px";
  elements.style.backgroundColor = "black";
  document.getElementById("aa").style.position = "absolute";
    circleD.style.border = "2px solid #7BB4C3";
    circleD.style.borderRadius = "50%";
    circleD.style.width = "108px";
    circleD.style.height = "108px"
    circleD.style.left = "-40px"
    circleD.style.right = "0px"
    circleD.style.bottom = "0px"
    circleD.style.top = "-40px"
    circleD.style.transition = "50ms"
  circleD.style.transitionTimingFunction = "ease"
  // circleD.style.transitionDelay = "30ms";
  }, 50);
};
