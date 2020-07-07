exports.getDate = function(){
  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  var today = new Date();
  return day = today.toLocaleDateString("en-US", options);
}
