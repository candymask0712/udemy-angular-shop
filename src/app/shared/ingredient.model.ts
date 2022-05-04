// export class Ingredient {
//   public name: string;
//   public amount: number;
//
//   constructor(name:string, amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }

// 위 내용의 숏컷 버젼
export class Ingredient {
  constructor(public name:string, public amount: number) {
    this.name = name;
    this.amount = amount;
  }
}
