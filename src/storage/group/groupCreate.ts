import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupGetAll } from "./groupGetAll";


export async function groupCreated(newGroup:string) {
  try {
    const storageGroups = await groupGetAll()

    const groupAlreadyExists  = storageGroups.includes(newGroup);

    if(groupAlreadyExists) {
      throw new AppError('já existe um gropo cadastrado com esse nome.')
    }
    const storage = JSON.stringify([...storageGroups, newGroup])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}