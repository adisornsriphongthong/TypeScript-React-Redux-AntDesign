import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  key: string;
  name: string;
  age: number;
}

interface AccountState {
  value: User[];
}

const account = createSlice({
  name: 'account',
  initialState: {
    value: [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 32,
          },
          {
            key: '4',
            name: 'Joe Black',
            age: 32,
          },
    ],
  } as AccountState,
  reducers: {
    set: (state, action: PayloadAction<User[]>) => {
      state.value = action.payload;
    },
    deletes: (state, action) => {
        let result: User[] = action.payload;
    
        let deleteKey = result.map(e => e.key)

        const currentResult = state.value.filter(e => {
            return deleteKey.includes(e.key) ? false : true
        })

        state.value = currentResult
    }
    
  },
});

export const { deletes } = account.actions
export default account.reducer;
