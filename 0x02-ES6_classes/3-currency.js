export default class Currency {
  constructor(code, name){
    //if (typeof code !== 'string' && typeof name !== 'string') throw TypeError('It should be a string');
  this._code = code;
  this._name = name;
  }

  set code(newCode){
    if(typeof newCode !== 'string') throw TypeError('Code must be a string');
    this._code = newCode
  }
  set name(newName){
    if(typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName
  }

  displayFullCurrency(){
    return `${this._name} (${this._code})`
  }
  get code(){
    return this._code
  }
  get name(){
    return this._name
  }
}