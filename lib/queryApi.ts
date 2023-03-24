import openAi from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openAi
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `Chatgpt was unable to find a match for that! (Error: ${err.message})`
    );
  return res;
};

export default query;
