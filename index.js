const keys = {'б': 'щ', 'в': 'ш', 'г': 'ч', 'д': 'ц', 'ж': 'х', 'з': 'ф', 'к': 'т', 'л': 'с', 'м': 'р', 'н': 'п'}
const crypt = (message = "") => {
  symblist = message.split("");
  for (var i = 0; i < symblist.length; i++) {
   for (let value of Object.keys(keys)){
    if (symblist[i] == value ) {
      symblist[i] = keys[value]
    } else if (symblist[i] == keys[value] ) {
      symblist[i] = value 
    }
  }
}
  return symblist.join("");
};

module.exports = { crypt }