import { config } from "dotenv";
import type { Config } from "drizzle-kit";

config();

export default {
  schema: "./db",
  dialect: "postgresql",
  out: "./db/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
} satisfies Config;
