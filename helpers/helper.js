function sentiment() {

var totalpositivewords = []
var totalnegativewords = []

for(var i=0; i < x.length; i++) {

var positive_words = ["positive", "success", "grow", "gains", "happy", "healty"]
var negative_words = ["disappointing", "concerns", "decline", "drag", "slump", "feared"]

if (x[i] === positive_words[0] || x[i] === positive_words[1] || x[i] === positive_words[2] || x[i] === positive_words[3] || x[i] === positive_words[4] || x[i] === positive_words[5]) {
totalpositivewords.push(x[i])
} else if (x[i] === negative_words[0] || x[i] === negative_words[1] || x[i] === negative_words[2] || x[i] === negative_words[3] || x[i] === negative_words[4] || x[i] === negative_words[5]) {
totalnegativewords.push(x[i])
 }
}
var positivity_score = (totalpositivewords.length - totalnegativewords.length)

console.log("333")

}

module.exports = sentiment;
