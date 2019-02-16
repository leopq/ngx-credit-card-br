/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Credit card component.
 */
import { ChangeDetectorRef, Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import * as moment_ from 'moment-mini';
import { NgForm } from '@angular/forms';
/** @type {?} */
const moment = moment_;
export class NgxCreditCardBrComponent {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initExpirationOptions();
    }
    /**
     * @param {?} phone
     * @return {?}
     */
    getPhoneMask(phone) {
        return (phone && phone.length > 14) ? '(99) 99999-9999' : '(99) 9999-9999';
    }
    /**
     * @param {?} documentType
     * @return {?}
     */
    getDocumentMask(documentType) {
        return documentType == 'CNPJ' ? '99.999.999/9999-99' : '999.999.999-99';
    }
    /**
     * @return {?}
     */
    initExpirationOptions() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let expiration = {
                months: [],
                years: []
            };
            for (let month = 1; month <= 12; month++) {
                expiration.months.push(this.pad(month));
            }
            for (let year = 0; year <= 30; year++) {
                expiration.years.push(moment().add(year, 'years').format('YYYY'));
            }
            this.expirationMonths = expiration.months;
            this.expirationYears = expiration.years;
            this.changeDetector.detectChanges();
        });
    }
    /**
     * @param {?} num
     * @return {?}
     */
    pad(num) {
        return (num < 10) ? '0' + num.toString() : num.toString();
    }
}
NgxCreditCardBrComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-credit-card-br',
                template: "<article credit-card max-width-container *ngIf=\"card\">\n    <article card-back>\n        <section card-stripe></section>\n    </article>\n    <article card-front>\n        <form #cardForm=\"ngForm\" *ngIf=\"!showBack\">\n            <label>\n                N\u00FAmero do cart\u00E3o\n            </label>\n            <input required type=\"text\" autocomplete=\"cc-number\" card-number name=\"cardNumber\" mask=\"9999 9999 9999 9999\"\n                [(ngModel)]=\"card.number\" placeholder=\"1234 5678 9101 1112\" length=\"16\">\n            <section cardholder-container>\n                <label>\n                    Nome do titular\n                </label>\n                <input required type=\"text\" autocomplete=\"cc-name\" card-holder name=\"holderName\" [(ngModel)]=\"card.holder.name\"\n                    placeholder=\"Ada Lovelace\" />\n            </section>\n\n            <section exp-container>\n                <label>\n                    Validade\n                </label>\n                <select required card-month name=\"expMonth\" [(ngModel)]=\"card.expirationMonth\" autocomplete=\"cc-exp-month\">\n                    <option *ngFor=\"let month of expirationMonths; let index = index;\" [value]=\"month\" [selected]=\"index == 0\">\n                        {{month}}\n                    </option>\n                </select>\n                <select required card-year name=\"expYear\" [(ngModel)]=\"card.expirationYear\" autocomplete=\"cc-exp-year\">\n                    <option *ngFor=\"let year of expirationYears; let index = index;\" [value]=\"year\" [selected]=\"index == 0\">\n                        {{year}}\n                    </option>\n                </select>\n            </section>\n\n            <section cvc-container>\n                <label for=\"card-cvc\">\n                    CVV:\n                </label>\n                <input required card-cvc autocomplete=\"cc-csc\" placeholder=\"XXXX\" name=\"cardCvv\" [(ngModel)]=\"card.cvv\"\n                    type=\"text\" min-length=\"3\" max-length=\"4\">\n                <p>\n                    <span>\n                    </span>\n                </p>\n            </section>\n        </form>\n    </article>\n</article>",
                changeDetection: ChangeDetectionStrategy.Default,
                styles: ["[credit-card]{padding-bottom:2.5rem;max-width:400px;margin:auto}[credit-card] *{transition-property:all;transition-duration:.3s}[credit-card] [card-cvc]{width:6rem;margin-bottom:0}[credit-card] [card-back],[credit-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1ea9e5 100%);min-width:320px;max-width:400px;min-height:230px;border-radius:.6rem;padding:2rem 3rem 0;font-size:1rem;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px .2rem rgba(0,0,0,.2)}[credit-card] [card-front]{z-index:999;margin-top:-25rem;margin-left:-2rem}[credit-card] [card-back]{z-index:-2;padding:2rem 0 0;margin-right:-2rem}[credit-card] [card-extra-info] [field] select,[credit-card] [card-extra-info] [field][full-width],[credit-card] [card-holder],[credit-card] [card-number],[credit-card] [cvc-container] label{width:100%}[credit-card] [card-stripe]{width:100%;height:5.5rem;background-color:rgba(0,0,0,.5);right:0}[credit-card] [card-token]{display:none}[credit-card] [card-month]{width:37%}[credit-card] [card-year]{width:53%;float:right}[credit-card] [cardholder-container]{width:60%;display:inline-block}[credit-card] [cvc-container]{box-sizing:border-box;text-align:right}[credit-card] [card-button]{border:.2rem solid #fff;display:block;padding:1rem;color:#fff;float:right;border-radius:3rem;background-color:#1e88e5}[credit-card] [next-button]{margin-top:2rem}[credit-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-1rem}[credit-card] [card-brand]{float:left;margin-left:.6rem}[credit-card] [card-brand-select]{width:20.8rem}[credit-card] [card-brand-pic]{opacity:0;width:4.2rem;height:2rem}[credit-card] [card-brand-pic][visible=true]{opacity:1}[credit-card] [cvc-container] p{font-size:.8rem;text-transform:uppercase;letter-spacing:.05rem;color:#fff;font-weight:700}[credit-card] [cvc-container] p span{max-width:80px;display:inline-block;padding-top:.5rem}[credit-card] [exp-container]{margin-left:1rem;width:32%;display:inline-block}[credit-card] input,[credit-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:3rem;line-height:3rem;padding:0 1rem;margin:0 0 .8rem;color:#1e88e5;font-size:1rem;box-sizing:border-box;border-radius:.4rem;letter-spacing:.07rem}[credit-card] select{padding:0;text-align:center}[credit-card] select option{background-color:#fff;font-weight:700;color:#444}[credit-card] input::-webkit-input-placeholder{color:#79ccf0}[credit-card] input::-moz-placeholder{color:#79ccf0}[credit-card] input:-ms-input-placeholder{color:#79ccf0}[credit-card] input:-moz-placeholder{color:#79ccf0}[credit-card] label{display:block;margin:0 auto .7rem;color:#fff;font-size:1rem;font-weight:700;text-transform:uppercase}[credit-card] [card-extra-info] input{margin-bottom:0}[credit-card] [card-extra-info] [field]{display:inline-block;margin-right:1.5%;margin-left:1.5%;width:46%;height:6rem}[credit-card] [card-extra-info] [field][email] input,[credit-card] [card-extra-info] [field][email] label{display:inline-block}[credit-card] [card-extra-info] [field][email] label{width:20%}[credit-card] [card-extra-info] [field][email] input{width:75%}"]
            }] }
];
NgxCreditCardBrComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NgxCreditCardBrComponent.propDecorators = {
    card: [{ type: Input, args: ['card',] }],
    form: [{ type: ViewChild, args: ['cardForm',] }]
};
if (false) {
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.expirationMonths;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.expirationYears;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.availableBrands;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.showBack;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.card;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    NgxCreditCardBrComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNyZWRpdC1jYXJkLWJyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jcmVkaXQtY2FyZC1ici8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY3JlZGl0LWNhcmQtYnIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3ZHLE9BQU8sS0FBSyxPQUFPLE1BQU0sYUFBYSxDQUFBO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTs7TUFFakMsTUFBTSxHQUFHLE9BQU87QUFRdEIsTUFBTTs7OztJQVFGLFlBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtJQUFJLENBQUM7Ozs7SUFFMUQsUUFBUTtRQUNKLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDZCxNQUFNLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFBO0lBQzlFLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFlBQW9CO1FBQ2hDLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUE7SUFDM0UsQ0FBQzs7OztJQUVLLHFCQUFxQjs7O2dCQUNuQixVQUFVLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLEVBQUU7YUFDWjtZQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ3ZDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtZQUNyRSxDQUFDO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUE7WUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDdkMsQ0FBQztLQUFBOzs7OztJQUVELEdBQUcsQ0FBQyxHQUFHO1FBQ0gsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDN0QsQ0FBQzs7O1lBOUNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qix3c0VBQWdEO2dCQUVoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTzs7YUFDbkQ7OztZQVhRLGlCQUFpQjs7O21CQWlCckIsS0FBSyxTQUFDLE1BQU07bUJBQ1osU0FBUyxTQUFDLFVBQVU7Ozs7SUFMckIsb0RBQTRCOztJQUM1QixtREFBMkI7O0lBQzNCLG1EQUEyQjs7SUFDM0IsNENBQWlCOztJQUNqQix3Q0FBd0I7O0lBQ3hCLHdDQUFtQzs7Ozs7SUFFdkIsa0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBDcmVkaXQgY2FyZCBjb21wb25lbnQuXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQtbWluaSdcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5jb25zdCBtb21lbnQgPSBtb21lbnRfXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWNyZWRpdC1jYXJkLWJyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25neC1jcmVkaXQtY2FyZC1ici5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25neC1jcmVkaXQtY2FyZC1ici5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDcmVkaXRDYXJkQnJDb21wb25lbnQge1xuICAgIGV4cGlyYXRpb25Nb250aHM6IEFycmF5PGFueT5cbiAgICBleHBpcmF0aW9uWWVhcnM6IEFycmF5PGFueT5cbiAgICBhdmFpbGFibGVCcmFuZHM6IEFycmF5PGFueT5cbiAgICBzaG93QmFjazogYm9vbGVhblxuICAgIEBJbnB1dCgnY2FyZCcpIGNhcmQ6IGFueVxuICAgIEBWaWV3Q2hpbGQoJ2NhcmRGb3JtJykgZm9ybTogTmdGb3JtXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0RXhwaXJhdGlvbk9wdGlvbnMoKVxuICAgIH1cblxuICAgIGdldFBob25lTWFzayhwaG9uZSkge1xuICAgICAgICByZXR1cm4gKHBob25lICYmIHBob25lLmxlbmd0aCA+IDE0KSA/ICcoOTkpIDk5OTk5LTk5OTknIDogJyg5OSkgOTk5OS05OTk5J1xuICAgIH1cblxuICAgIGdldERvY3VtZW50TWFzayhkb2N1bWVudFR5cGU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRUeXBlID09ICdDTlBKJyA/ICc5OS45OTkuOTk5Lzk5OTktOTknIDogJzk5OS45OTkuOTk5LTk5J1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRFeHBpcmF0aW9uT3B0aW9ucygpIHtcbiAgICAgICAgbGV0IGV4cGlyYXRpb24gPSB7XG4gICAgICAgICAgICBtb250aHM6IFtdLFxuICAgICAgICAgICAgeWVhcnM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbW9udGggPSAxOyBtb250aCA8PSAxMjsgbW9udGgrKykge1xuICAgICAgICAgICAgZXhwaXJhdGlvbi5tb250aHMucHVzaCh0aGlzLnBhZChtb250aCkpXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgeWVhciA9IDA7IHllYXIgPD0gMzA7IHllYXIrKykge1xuICAgICAgICAgICAgZXhwaXJhdGlvbi55ZWFycy5wdXNoKG1vbWVudCgpLmFkZCh5ZWFyLCAneWVhcnMnKS5mb3JtYXQoJ1lZWVknKSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4cGlyYXRpb25Nb250aHMgPSBleHBpcmF0aW9uLm1vbnRoc1xuICAgICAgICB0aGlzLmV4cGlyYXRpb25ZZWFycyA9IGV4cGlyYXRpb24ueWVhcnNcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKClcbiAgICB9XG5cbiAgICBwYWQobnVtKSB7XG4gICAgICAgIHJldHVybiAobnVtIDwgMTApID8gJzAnICsgbnVtLnRvU3RyaW5nKCkgOiBudW0udG9TdHJpbmcoKVxuICAgIH1cbn1cbiJdfQ==