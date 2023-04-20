document.getElementById("ivanLifeContent").style.display = "none";
document.getElementById("ivanLifeTwoContent").style.display = "none";
document.getElementById("quoteContent").style.display = "none";
document.getElementById("photoContent").style.display = "none";
document.getElementById("secondPhotoContent").style.display = "none";
document.getElementById("thirdPhotoContent").style.display = "none";
document.getElementById("projectOneContent").style.display = "none";
document.getElementById("smithContent").style.display = "none";
document.getElementById("chaseContent").style.display = "none";
document.getElementById("mobilContent").style.display = "none";
document.getElementById("natGeoContent").style.display = "none";
//Basic function needed for the JS to work

function hidePanels() {
  document.getElementById("ivanLifeContent").style.display = "none";
  document.getElementById("ivanLifeTwoContent").style.display = "none";
  document.getElementById("quoteContent").style.display = "none";
  document.getElementById("photoContent").style.display = "none";
  document.getElementById("secondPhotoContent").style.display = "none";
  document.getElementById("thirdPhotoContent").style.display = "none";
  document.getElementById("projectOneContent").style.display = "none";
  document.getElementById("smithContent").style.display = "none";
  document.getElementById("chaseContent").style.display = "none";
  document.getElementById("mobilContent").style.display = "none";
  document.getElementById("natGeoContent").style.display = "none";
  document.getElementById("ivanLifePanel").className = "accordionPanelTab";
  document.getElementById("ivanLifeTwoPanel").className = "accordionPanelTab";
  document.getElementById("quotePanel").className = "accordionPanelTab";
  document.getElementById("photoPanel").className = "accordionPanelTab";
  document.getElementById("secondPhotoPanel").className = "accordionPanelTab";
  document.getElementById("thirdPhotoPanel").className = "accordionPanelTab";
  document.getElementById("projectOnePanel").className = "accordionPanelTab";
  document.getElementById("smithPanel").className = "accordionPanelTab";
  document.getElementById("chasePanel").className = "accordionPanelTab";
  document.getElementById("mobilPanel").className = "accordionPanelTab";
  document.getElementById("natGeoPanel").className = "accordionPanelTab";
}
//Hides the panels when they are not clicked on

//Each little piece is each class and function with opening the accordion, will use the class when it is opened and stop when closed
//all have same code except for the stuff inside ()
function showIvanLifeContent() {
  hidePanels();
  document.getElementById("ivanLifeContent").style.display = "block";
  document.getElementById("ivanLifePanel").className =
    "accordionPanelTab highlight";
}

function showIvanLifeTwoContent() {
  hidePanels();
  document.getElementById("ivanLifeTwoContent").style.display = "block";
  document.getElementById("ivanLifeTwoPanel").className =
    "accordionPanelTab highlight";
}

function showQuoteContent() {
  hidePanels();
  document.getElementById("quoteContent").style.display = "block";
  document.getElementById("quotePanel").className =
    "accordionPanelTab highlight";
}

function showPhotoContent() {
  hidePanels();
  document.getElementById("photoContent").style.display = "block";
  document.getElementById("photoPanel").className =
    "accordionPanelTab highlight";
}

function showSecondPhotoContent() {
  hidePanels();
  document.getElementById("secondPhotoContent").style.display = "block";
  document.getElementById("secondPhotoPanel").className =
    "accordionPanelTab highlight";
}

function showThirdPhotoContent() {
  hidePanels();
  document.getElementById("thirdPhotoContent").style.display = "block";
  document.getElementById("thirdPhotoPanel").className =
    "accordionPanelTab highlight";
}

function showProjectOneContent() {
  hidePanels();
  document.getElementById("projectOneContent").style.display = "block";
  document.getElementById("projectOnePanel").className =
    "accordionPanelTab highlight";
}

function showSmithContent() {
  hidePanels();
  document.getElementById("smithContent").style.display = "block";
  document.getElementById("smithPanel").className =
    "accordionPanelTab highlight";
}

function showChaseContent() {
  hidePanels();
  document.getElementById("chaseContent").style.display = "block";
  document.getElementById("chasePanel").className =
    "accordionPanelTab highlight";
}

function showMobilContent() {
  hidePanels();
  document.getElementById("mobilContent").style.display = "block";
  document.getElementById("mobilPanel").className =
    "accordionPanelTab highlight";
}

function showNatGeoContent() {
  hidePanels();
  document.getElementById("natGeoContent").style.display = "block";
  document.getElementById("natGeoPanel").className =
    "accordionPanelTab highlight";
}