import {searchTextBox} from "../page-objects/individualPage-PO";

export const searchTerm = (searchTerm) =>{
    searchTextBox().should('be.visible').clear().type(searchTerm);
}