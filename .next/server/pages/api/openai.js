"use strict";
(() => {
var exports = {};
exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 215:
/***/ ((module) => {

module.exports = require("openai-api");

/***/ }),

/***/ 467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const OpenAI = __webpack_require__(215);
const openai = new OpenAI(process.env.OPENAI_API_KEY);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    // Promt values
    const beforePromt = ``;
    const afterPromt = ``;
    const breakPoint = `\n\n'''\n\n`;
    // Construct the prompt
    let prompt = `create a syllabus for a ${req.body.lentype} week course on ${req.body.name} with an emphasis on being ${req.body.syltype}. Include
   a grading rubric, course summary, and learning objectives. For each week in the syllabus, provide a topic description with a list of competency objectives
   and a sample assignment.`;
    // Log promt
    console.log(prompt);
    // Call OpenAI API
    const gptResponse = await openai.complete({
        engine: "text-davinci-003",
        prompt: `${prompt}`,
        maxTokens: 3000,
        temperature: 0.75,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1
    });
    res.status(200).json({
        text: `${gptResponse.data.choices[0].text}`
    });
}); // model: "text-davinci-003",
 // prompt: "Write a long form social media post based on this Content that will engage a reader into conversation, include a summary of the Content",


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(467));
module.exports = __webpack_exports__;

})();