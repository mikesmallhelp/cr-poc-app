'use server'

import { getData as getDataFromDb, setData as setDataToDb } from '@/db';
import { revalidatePath } from 'next/cache';

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
    revalidatePath('/');
  } catch (error) {
    console.error('Error in setData action:', error);
    throw new Error('Failed to set data');
  }
}