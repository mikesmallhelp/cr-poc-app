import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from 'dotenv';
dotenv.config();
import { dataTable } from './schema';

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error('DATABASE_URL environment variable is not defined');
}

const client = postgres(dbUrl);
export const db = drizzle(client);

export async function getData() {
  try {
    const result = await db.select().from(dataTable).limit(1);
    return result[0]?.data || null;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
}

export async function setData(newData: string) {
  try {
    await db.delete(dataTable).execute();
    await db.insert(dataTable).values({ data: newData })
      .onConflictDoUpdate({ target: dataTable.id, set: { data: newData } });
  } catch (error) {
    console.error('Error setting data:', error);
    throw new Error('Failed to set data');
  }
}