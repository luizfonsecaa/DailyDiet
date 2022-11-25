import { ButtonCheck } from "@components/ButtonChecked";
import { ButtonIcon } from "@components/ButtonIcon";
import { CardMeals } from "@components/CardMeals";
import { Input } from "@components/Input";
import { Title } from "@components/Input/styles";
import { Container } from "./styles";
import { useFocusEffect, useNavigation, useRoute, } from "@react-navigation/native";
import StorageMeals, { MealsType } from "@storage/Meals";
import { TouchableOpacity, View, Keyboard, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useCallback, useState } from "react";

type TypeMode = 'date' | 'time' 
type RouteParams = {
  id:string;
}

export function Meals() {
  const navigation = useNavigation()
  const route = useRoute();
  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [description, setDescrition] = useState('');
  const [isDiet, setIsDiet] = useState(true)
  const { id } = route.params as RouteParams

  function handleSaveAndNextPage() {
    const newid: string = new Date().toISOString().replace(/[^a-zA-Z0-9 ]/g, '')

    let newMeals = {id: newid, name, description, date, time, isDiet}
    StorageMeals.created(newMeals)
    navigation.navigate('feedback', {isDiet})
  }

  function showDateTimePicker(type: TypeMode ) {
    if(type === 'date') setDatePicker(true);
    else setTimePicker(true);
  };

  function onDateTimeSelected(event:any, value:any) {
    if(datePicker === true) {
      let datestring = new Date(value)
      setDate(`${datestring.getDate()}/${(datestring.getMonth()+1)}/${datestring.getFullYear()}`);
      setDatePicker(false);
    }else {
      let datestring = new Date(value)
      setTime(`${datestring.getHours()}:${String(datestring.getMinutes()).padStart(2, "0")}`);
      setTimePicker(false);
    }
    
  };

  function handleSetDiet(value: string) {
    if(value === 'istDiet') setIsDiet(true)
    else setIsDiet(false)
  }

  async function handleUpdatedendNextPage(){
    let meals = {id, name, description, date, time, isDiet}
    await StorageMeals.updated(meals)
    navigation.navigate('feedback', {isDiet})
  }

  

  async function fetchMeals() {
    const meal = await StorageMeals.findOne(id)

    setDate(meal?.date ? meal.date : '')
    setTime(meal?.time ? meal.time : '')
    setIsDiet(meal?.isDiet !== undefined ? meal.isDiet : false)
    setDescrition(meal?.description ? meal.description : '')
    setName(meal?.name ?meal.name : '')
  }

  useFocusEffect(useCallback(()=>{
    if(id){
      fetchMeals();
    }
  }, []))
 
  return (
      <CardMeals
        title="Nova refeição"
        color="GRAY_5"
        space="space-between"
      >
        {(datePicker || timePicker) &&
          (
            <DateTimePicker
              value={datePicker ? new Date() : new Date(Date.now())}
              mode={datePicker ? 'date' : 'time'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateTimeSelected}
            />
          )
        }
          <Input
            title="Nome"
            onChangeText={text => setName(text)}
            value={name}
            onBlur={Keyboard.dismiss}
          />

          <Input
            title="Descrição"
            multiline = {true}
            numberOfLines = {7}
            onChangeText={setDescrition}
            value={description}
            textAlignVertical="top"
            onBlur={Keyboard.dismiss}
          />

          <Container width={100} direction='row'>
            <Container width={48} direction='column'>
              <TouchableOpacity onPress={()=> showDateTimePicker('date')}>
                <View pointerEvents="none">
                <Input
                  title="Data"
                  numberOfLines = {1}
                  editable={false}
                  defaultValue={date}
                  value={date}
                />
                </View>
              </TouchableOpacity>
            </Container>
            <Container width={48} direction='column'>
              <TouchableOpacity onPress={()=> showDateTimePicker('time')}>
                <View pointerEvents="none">
                <Input
                  title="Hora"
                  numberOfLines = {1}
                  editable={false}
                  value={time}
                  defaultValue={time}
                />
                </View>
              </TouchableOpacity>
            </Container>
          </Container>

          <Title>Está dentro da dieta?</Title>
          <Container width={100} direction='row'>
            <Container width={48} direction='column'>
              <ButtonCheck
                title="Sim"
                color="GREEN_DARK"
                backgroundColor="GREEN_LIGHT"
                onPress={()=> handleSetDiet('istDiet')}
                active={isDiet ? true : false}
                
              />
            </Container>
            <Container width={48} direction='column'>
              <ButtonCheck
                title="Não"
                color="RED_DARK"
                backgroundColor="RED_LIGHT"
                onPress={()=> handleSetDiet('notDiet')}
                active={!isDiet ? true : false}
              />
            </Container>
          </Container>
          {id 
            ?
            <ButtonIcon title="Salvar altração" onPress={()=> handleUpdatedendNextPage()} />
            :
            <ButtonIcon title="Cadastrar refeição" onPress={()=> handleSaveAndNextPage()} />
          }
      </CardMeals>
  )
}