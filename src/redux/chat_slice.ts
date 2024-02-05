import {Slice, createSlice} from '@reduxjs/toolkit'

export enum Role {
    SYSTEM = 'system',
    USER = 'user',
    ASSISTANT = 'assistant',
   }
   
   export type Message = {
    id: number
    content: string
    role: Role
    timestamp: string
   }

   export type ChatState = {
    messages: Message[]
    networkStatus: 'idle' | 'pending' | 'failed'
    error: string | null
   }
   
   const initialState: ChatState = {
    messages: [],
    networkStatus: 'idle',
    error: null,
   }

   export const ASSISTANT_PRESET = `You are my pen pal!`

   const messageSlice: Slice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
     addMessage(state, action) {
      state.messages.push(action.payload)
     },
     addMessages(state, action) {
      state.messages = [...state.messages, ...action.payload]
     },
     setNetworkStatus(state, action) {
      state.networkStatus = action.payload
     },
     setError(state, action) {
      state.error = action.payload
     },
     reset(state) {
      state.messages = []
      state.networkStatus = 'idle'
      state.error = null
     },
    },
   })
   
   export const {addMessage, addMessages, setNetworkStatus, setError, reset} =
    messageSlice.actions
   export default messageSlice.reducer

   