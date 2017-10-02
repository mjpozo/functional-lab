
const parseItems = (items) => {
  let arr = items.map(function(e){
      return parseInt(e)
  });
  return arr.sort();
};

module.exports = parseItems;