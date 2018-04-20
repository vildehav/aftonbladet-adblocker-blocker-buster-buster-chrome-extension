function removeAdBlockerBlocker() {
  var blur = document.querySelector('.abThemeSolidPage').firstChild;
  if (blur) blur.style.filter = 'none';

  var banner = document.querySelector('.abThemeGradientPage');
  if (banner) banner.style.display = 'none';

  var overlay = document.querySelector('._3WxSp');
  if (overlay) overlay.style.display = 'none';
}
window.onload = function() {
  isAdBlockerBlockerActive();
};

function isAdBlockerBlockerActive() {
  if (document.querySelector('.abThemeGradientPage')) setTimeout(() => removeAdBlockerBlocker(), 500);
  else setTimeout(() => isAdBlockerBlockerActive(), 1000);
}
