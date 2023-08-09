import Building from './5-building'

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (tyopeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new TypeError('floors must be a Number');
    }
   }

   get sqft() {
     return this._sqft;
   }

   get floors() {
     return this._floors;
   }

   evacutionWarningMessage() {
     return `Evacuate slowly the ${this._floors} floors`;
   }
 }

