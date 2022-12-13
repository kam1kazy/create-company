import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'Product Data',
  initialState: {
    goodsSelected: [],
    goodsList: [],
  },
  reducers: {
    addProduct(state, action) {
      state.goodsSelected.push(action.payload.item)
    },
    setProductsList(state, action) {
      state.goodsList.push(action.payload)
    },
    toggleSelected(state, action) {
      const toggledSelect = state.products.find(
        (item) => item.id === action.payload.item.id
      )
      toggledSelect.active = !toggledSelect.active
    },
    removeProduct(state, action) {
      state.goodsSelected = state.goodsSelected.filter(
        (item) => item.id !== action.payload.id
      )
    },
    deleteChipProducts(state, action) {
      state.goodsSelected = state.goodsSelected.filter(
        (item) => item.name !== action.payload.name
      )
    },
    resetProducts(state) {
      state.goodsSelected = []
    },
    resetProductsList(state) {
      state.goodsList = []
    },
  },
})

export const {
  addProduct,
  toggleSelected,
  removeProduct,
  deleteChipProducts,
  resetProducts,
  setProductsList,
  resetProductsList,
} = productsSlice.actions

export default productsSlice.reducer
