// /**
//  * A memo for the row, column and sector data
//  */
// export default class Memo2D {
//   store = new Map()

//   /**
//    * Check if the given position contains the value
//    * @param {*} row
//    * @param {*} column
//    */
//   checkIfIn = (pos, value) => this.store.get(pos)
//   && this.store.get(pos).get(value)

//   /**
//    * Set a value in the store
//    * @param {Number} row
//    * @param {Number} column
//    * @param {Number} value
//    * @returns {Boolean} - True if successfull, false if not
//    */
//   setVal = (row, column, value) => {
//     // Check if row is set
//     if (this.store.get(row)) {
//       // Check if true is already set and trying to set true
//       if (value && this.store.get(row).get(column)) {
//         return false;
//       }

//       this.store.get(row).set(column, value);
//       return true;
//     }

//     // When row not set
//     this.store.set(row, new Map([[column, value]]));
//     return true;
//   }
// }

class Memo2D {
  constructor() {
    this.store = new Map();
  }

  // Check if the position already contains the value
  checkIfIn(pos, value) {
    return this.store.get(pos) && this.store.get(pos).get(value);
  }

  // Set a value in the store, returns true if successful, false otherwise
  setVal(pos, value, flag) {
    if (!this.store.has(pos)) {
      this.store.set(pos, new Map());
    }
    const subMap = this.store.get(pos);
    if (flag && subMap.get(value)) {
      return false;
    }
    subMap.set(value, flag);
    return true;
  }
}

export default Memo2D;
