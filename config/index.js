import dotenv from "dotenv";

const env = dotenv.config();

if (env.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

// TODO: Add additional 'secrets'
// ⚠️ Using 'dotenv' doesn't mean that these are truly 'secrets' 🕵🏾‍♂️.
export default {
  api: {
    apiKey: process.env.API_KEY,
  },
};
