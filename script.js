/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");

//
function getWordss(type) {
  // Return words of a given type, or all words if type is 'WORD'
  let words = [
    {type: 'ADJECTIVE', value: 'big'},
    {type: 'ADJECTIVE', value: 'purple'},
    {type: 'ADJECTIVE', value: 'new'},
    {type: 'ADJECTIVE', value: 'interesting'},
    {type: 'ADJECTIVE', value: 'curious'},
    {type: 'ADJECTIVE', value: 'happy'},
    {type: 'ADJECTIVE', value: 'busy'},
    {type: 'ADJECTIVE', value: 'tiny'},
    {type: 'NOUN', value: 'umbrella'},
    {type: 'NOUN', value: 'knee'},
    {type: 'NOUN', value: 'banana'},
    {type: 'NOUN', value: 'platypus'},
    {type: 'NOUN', value: 'cat'},
    {type: 'NOUN', value: 'mouse'},
    {type: 'NOUN', value: 'house'},
    {type: 'VERB', value: 'impressed'},
    {type: 'VERB', value: 'honoured'},
    {type: 'VERB', value: 'saw'},
    {type: 'VERB', value: 'ate'},
    {type: 'VERB', value: 'surprised'},
    {type: 'VERB', value: 'annoyed'},
    {type: 'VERB', value: 'touched'},
    {type: 'VERB', value: 'understood'},
    {type: 'VERB', value: 'taught'},
  ];
  return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}



document.getElementById('noun1').addEventListener('click', (event) => {
  let element_noun1 = document.getElementById('noun1');
  element_noun1.innerText = randomMember(getWordss('NOUN'));

});

document.getElementById('verb').addEventListener('click', (event) => {
  let element_verb = document.getElementById('verb');
  element_verb.innerText = randomMember(getWordss('VERB'));

});

document.getElementById('adjective').addEventListener('click', (event) => {
  let element_adjective = document.getElementById('adjective');
  element_adjective.innerText = randomMember(getWordss('ADJECTIVE'));

});

document.getElementById('noun2').addEventListener('click', (event) => {
  let element_noun2 = document.getElementById('noun2');
  element_noun2.innerText = randomMember(getWordss('NOUN'));

});

document.getElementById('night').addEventListener('click', (event) => {
  let element_night = document.getElementById('night');
  element_night.style.color = '#ffff66';
  element_night.style.backgroundColor = '#000000';

});

document.getElementById('button').addEventListener('click', (event) => {

});

document.getElementById('day').addEventListener('click', (event) => {
  let element_day = document.getElementById('day');
  element_day.style.color = '#333333';
  element_day.style.backgroundColor = '#33ffff';

});
//
prettify.toHTML(run(), console);

var Image2;


Image2 = ['https://th.bing.com/th/id/R.51caae5bcfc9ba7a4b6f02c6bdc7ee35?rik=KpTP0NA0vSskGA&pid=ImgRaw&r=0', 'data:image/jpeg;base64,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', 'https://www.educationreview.com.au/wp-content/uploads/2013/07/1619060681.jpg'];

let element_Image = document.getElementById('Image');
Image2.push(Image2[0]);
element_Image.setAttribute("src", Image2[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_Image2 = document.getElementById('Image');
  Image2.push(Image2.slice(-1)[0]);
  element_Image2.setAttribute("src", Image2[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_Image3 = document.getElementById('Image');
  Image2.push(Image2[0]);
  element_Image3.setAttribute("src", Image2.shift());

});
