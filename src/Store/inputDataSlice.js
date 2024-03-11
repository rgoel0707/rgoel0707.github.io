import { createSlice } from "@reduxjs/toolkit";


const billsData1 = [
  { area: 'Scotland', bills: [['Jan',230],['Feb', 220], ['Mar',190], ['Apr',150], ['May',90], ['Jun',85], ['Jul',88], ['Aug',87], ['Sep',92], ['Oct',105], ['Nov',156], ['Dec',215]] },
  { area: 'England', bills: [['Jan',210],['Feb', 200], ['Mar',180], ['Apr',120], ['May',70], ['Jun',65], ['Jul',68], ['Aug',67], ['Sep',72], ['Oct',95], ['Nov',136], ['Dec',195]]}
]

const initialState = {
  userInputs: {
    address: '',
    name: '',
    bills: billsData1[0].bills,
    tariff: 0.27,
    roofArea: 30,
  },
  page: 1,
  monthly_ac_prod: [],

};

const options = {
  name: 'inputData',
  initialState: initialState,
  reducers: {
    editDataInput: (state, action) => {
      return action.payload;
    },
    editAddress: (state, action) => {
      state.userInputs.address = action.payload;
      return state;
    },
    editName: (state, action) => {
      state.userInputs.name = action.payload;
      return state;
    },
    editTariff: (state, action) => {
      state.userInputs.tariff = action.payload;
      return state;
    },
    editRoofArea: (state, action) => {
      state.userInputs.roofArea = action.payload;
      return state;
    },
    editBills: (state, action) => {
      const {month_index, value} = action.payload;
      const bills=[...state.userInputs.bills];
      bills[month_index][1]=Number(value);

      const newState={...state,userInputs:{...state.userInputs, bills:bills}};

      return newState;
    },
    editPage: (state, action) => {
      state.page = action.payload;
      return state;
    },
    editMonthlyAcProd: (state, action) => {
      state.monthly_ac_prod = action.payload;
      return state;
    }
  }
};

const inputDataSlice = createSlice(options);

export const pageInfo = (state) => state.inputData.page;
export const inputInfo = (state) => state.inputData.userInputs;
export const selectAllData = (state) => state.inputData;
export const selectUserInput = (id)=>(state) => state.inputData.userInputs[id];
export const selectData = (id)=>(state) => state.inputData[id];
export const { editInputData, editAddress, editBills, editName, editTariff, editPage, editMonthlyAcProd, editRoofArea } = inputDataSlice.actions;
export default inputDataSlice.reducer;


