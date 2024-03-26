
// user details slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://66009d3787c91a11641989af.mockapi.io/crud";

const initialState = {
  user: [],
  loading: false,
  error: null,
Text:''
};

// Function to handle errors
const handleErrors = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

// create action
export const createUser = createAsyncThunk(
  'createUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(url, data);
      // console.log('axios resp', response);
      return response.data; 
    } catch (error) {
      console.log("the error while posting the data is", error.message);
      return rejectWithValue(error.message);
    }
  }
);

// create read action
export const Showuser = createAsyncThunk("showUser", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(url);
        // console.log("The User Data is", response);
        return response.data;
    } catch (error) {
      console.log("the error while getting the data is", error.message);
      return rejectWithValue(error.message);
    }
});
//create delete action
export const deleteUser=createAsyncThunk("deleteuser", async(id,{rejectWithValue})=>{
  try {
    const response= await axios.delete(`${url}/${id}`)
    // console.log(response)
    return response.data
  } catch (error) {
    console.log("the error while getting the data is", error.message);
      return rejectWithValue(error.message);
  }
})
//create edit action

export const EditUser = createAsyncThunk(
  'editaction',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${url}/${id}`, updatedData);
      // console.log('edited', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// create slice
export const detailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    searchUser:(state, action)=>{
      state.Text=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, handleErrors)

      .addCase(Showuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Showuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(Showuser.rejected, handleErrors)
      .addCase(deleteUser.pending,(state)=>{
        state.loading=true;
        state.error=null
      })
      .addCase(deleteUser.fulfilled,(state, action)=>{
        state.loading=false;
        const{id}=action.payload
        state.user=state.user.filter((ele)=>ele.id!==id)
      })
      .addCase(deleteUser.rejected, handleErrors)
      .addCase(EditUser.pending, (state, action)=>{
        state.loading=true;
        state.error=null
      })
      .addCase(EditUser.fulfilled, (state, action)=>{
        // console.log("updated user fulfilled", action.payload);
        state.loading=false;
        state.user = state.user.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele)
      })
      .addCase(EditUser.rejected,handleErrors)
  }
});
export const {searchUser}=detailsSlice.actions
export default detailsSlice.reducer;
