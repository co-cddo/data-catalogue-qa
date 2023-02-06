import {getPageHeading, header, verifyHeader, verifyHeaderText} from "../page-objects/common-PO";

export const verifyPageHeading = (headerText) => {
    verifyHeaderText()
.invoke('text')
        .then((text) => {
            expect(text).to.contain(headerText);
        });
};