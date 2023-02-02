import {getDepartmentName, getPageHeading} from "../page-objects/common-PO";

export const verifyDepartmentName = (pageHeading) => {
    getDepartmentName()
        .invoke('text')
        .then((text) => {
            expect(text).to.contain(pageHeading);
        });
};