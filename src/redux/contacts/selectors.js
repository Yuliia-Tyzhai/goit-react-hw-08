import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsData.items;
export const selectLoading = state => state.contactsData.loading;
export const selectError = state => state.contactsData.error;
