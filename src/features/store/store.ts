import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CategorySlice from "./reducers/CategorySlice";

export const store = configureStore({
    reducer: {
        isOpen: CategorySlice,
    },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
