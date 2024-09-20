import axios from 'axios';

export const generateHuggingFaceResponse = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B',  // GPT-2 model
      {
        inputs: prompt,
      },
      {
        headers: {
          Authorization: `Bearer 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`,
        },
      }
    );

    return response.data[0]?.generated_text || 'No response generated';
  } catch (error) {
    console.error('Error with Hugging Face API:', error);
  }
};
