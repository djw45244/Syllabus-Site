const OpenAI = require("openai-api");
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
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
    n: 1,
  });
  
  res.status(200).json({ text: `${gptResponse.data.choices[0].text}` });
};
// model: "text-davinci-003",
// prompt: "Write a long form social media post based on this Content that will engage a reader into conversation, include a summary of the Content",
