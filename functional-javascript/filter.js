function getShortMessages(messages) {
  let pushed = [];
  let shortMessages = messages.filter(function (element) {
    if (element.message.length <= 50) {
      pushed.push(element.message);
      return element.message;
    }
  });
  return pushed;
}
module.exports = getShortMessages

// official solution below
module.exports = function getShortMessages(messages) {
     return messages.filter(function(item) {
       return item.message.length < 50
     }).map(function(item) {
       return item.message
     })
   }
