export declare global {
  namespace ReactNavigation{
    interface RootParamList{
      home: undefined,
      statistic: undefined
      meals: {
        id: string
      }
      feedback: {
        isDiet:boolean
      }
      editMeals: {
        id:string
      }
    }
  }
}