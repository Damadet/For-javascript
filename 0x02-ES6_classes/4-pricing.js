import Currency from './3-currency.js';

export default class Pricing{
    constructor(amount, currency){
        this._amount = amount;
        this._currency = currency;
        this._code = this.currency.code;
        this._name = this.currency.name;
    }

    set amount(newAmount){
        this._amount= newAmount
    }

    set currency(newCurrency){
        this._currency = newCurrency
    }
    get amount(){
        return this._amount
    }
    get currency(){
        return this._currency
    }

    displayFullPrice(){
        return `${this._amount} ${this._name} (${this._code})`
    }

    static convertPrice(amount, conversionRate){
        return amount * conversionRate

    }
}