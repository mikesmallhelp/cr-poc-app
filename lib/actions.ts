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

export async function setData(formData: FormData) {
  try {
    const newData = formData.get('data');
    if (typeof newData !== 'string' || newData.trim() === '') {
      throw new Error('Invalid data');
    }
    await setDataToDb(newData);
    revalidatePath('/');
  } catch (error) {
    console.error('Error in setData action:', error);
    throw new Error('Failed to set data');
  }
}