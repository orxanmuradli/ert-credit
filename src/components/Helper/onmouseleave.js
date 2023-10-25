export const onMouseleave = () => {
  
  
  
  setTimeout(() => {
    const elements = document.getElementById("circleMain");
  const circleD = document.getElementById("aa");
  elements.style.width = "12px";
  elements.style.height = "12px";
  elements.style.backgroundColor = "transparent";
  circleD.style.border = "3px solid transparent";
  // circleD.style.borderTop = "3px solid #69A2B1";
  // circleD.style.borderBottom = "3px solid #69A2B1";
  // circleD.style.borderRight = "3px solid #242B31";
  // circleD.style.borderLeft = "3px solid #474D54";
  circleD.style.height = "33px";
  circleD.style.width = "33px";
  circleD.style.top = "0px";
  circleD.style.bottom = "0px";
  circleD.style.left = "0px";
  circleD.style.right = "0px";
  circleD.style.transition = "50ms"
  circleD.style.transitionTimingFunction = "ease"

  // circleD.style.transitionDelay = "30ms";
  }, 50);
};
