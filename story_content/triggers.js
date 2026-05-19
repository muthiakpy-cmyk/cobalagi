function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5r07YjOHTuV":
        Script1();
        break;
      case "6qCwVi9PQsR":
        Script2();
        break;
      case "6WXcxQweiIB":
        Script3();
        break;
      case "6XE8uyPUb6G":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
};
