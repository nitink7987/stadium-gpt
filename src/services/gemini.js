import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function askGemini(question) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are StadiumGPT, an AI assistant for FIFA World Cup stadium operations.

Current Stadium Status:
- Gate A: High Traffic
- Gate B: Moderate Traffic
- Gate C: Low Traffic
- VIP Zone: Normal

Answer ONLY stadium-related questions.
Keep answers short and practical.

User Question:
${question}
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);

    if (error.message?.includes("429")) {
      return "⚠️ StadiumGPT is receiving too many requests right now. Please try again in a minute.";
    }

    return "⚠️ Unable to get response.";
  }
}