'use server'

import { getData as getDataFromDb, setData as setDataToDb } from '@/db';

export async function getData() {
  try {
    return await getDataFromDb();
  } catch (error) {
    console.error('Error in getData action:', error);
    throw new Error('Failed to get data');
  }
}

export async function setData(data: string) {
  try {
    await setDataToDb(data);
  } catch (error) {
    console.error('Error in setData action:', error);
    throw new Error('Failed to set data');
  }
}