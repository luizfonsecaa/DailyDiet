import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS } from './storageConfig'

type MealsType = {
  id:string
  name:string; 
  description:string;
  date:string;
  time:string;
  isDiet:boolean
}

export { MealsType }

class StorageMeals {

    mealsInsideDiet: number
    totalOutsideDiet: number
    totalMeals: number
    totalInsedeDiet:number
    isDiet: boolean

    constructor(){
      this.mealsInsideDiet = 0
      this.totalOutsideDiet = 0
      this.totalMeals = 0
      this.totalInsedeDiet = 0
      this.isDiet = true
      this.getAll()
    }

  public async getAll(): Promise<MealsType[]> {
    try {
      const storage = await AsyncStorage.getItem(MEALS)
      const meals: MealsType[] = storage ? JSON.parse(storage) :[]

      if(meals.length > 0) {
        const mealsDiet = meals.filter(e => e.isDiet).length

        if(mealsDiet > 0) {
          this.mealsInsideDiet = parseFloat(((100 / meals.length) * mealsDiet).toFixed(2))
        } 
      
        if(this.mealsInsideDiet > 49 || meals.length == 0) this.isDiet = true
        else this.isDiet = false

        this.totalOutsideDiet = meals.filter(e => !e.isDiet).length
        this.totalInsedeDiet = mealsDiet
        this.totalMeals = meals.length
      }
      else {
        this.mealsInsideDiet = 0
        this.totalOutsideDiet = 0
        this.totalMeals = 0
        this.totalInsedeDiet = 0
        this.isDiet = true
      }
      
      return meals;
    } catch (error) {
      throw error;
    }
  }

  public async created(meal:MealsType) {
    try {
      const storageGroups = await this.getAll()
      const storage = JSON.stringify([...storageGroups, meal])
      await AsyncStorage.setItem(MEALS, storage);
      await this.getAll()
    } catch (error) {
      throw error;
    }
  }

  public async findOne(id:string): Promise<MealsType | undefined>{
   try {
    const meals = await  this.getAll()
    const meal: MealsType | undefined = meals.find(e => e.id === id) 
    return meal
   } catch (error) {
    throw error;
   }
  }

  public async DeleteOne(id: string): Promise<void> {
    const meals = await  this.getAll()
    const storage: MealsType[] | undefined = meals.filter(e => e.id !== id) 
    await AsyncStorage.setItem(MEALS, JSON.stringify(storage));
    await this.getAll()
  }

  public async updated(meal:MealsType): Promise<void> {
    const meals = await  this.getAll()
    const storage = meals.filter(e => e.id !== meal.id)
    await AsyncStorage.setItem(MEALS, JSON.stringify([...storage ,meal]));
    await this.getAll()
  }

  public indentList(array, key) {
    const obj = array.reduce((acc, item) => {
      if (!acc[item[key]]) acc[item[key]] = []
          acc[item[key]].push(item)
          return acc
      }, {})
      
      const finish = Object.keys(obj).map(e => {
        return {
          title: obj[e][0].date,
          data: obj[e]
        }
      })
      
      return finish.sort((a,b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0))
  }

  public async removeAll() {
    await AsyncStorage.setItem(MEALS, '');
  }
}

export default new StorageMeals()


