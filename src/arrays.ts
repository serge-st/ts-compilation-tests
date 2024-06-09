const regularArray = ["Apple", "Google", "Samsung"];
const frozenArray = Object.freeze(["Apple", "Google", "Samsung"]);
const constArray = ["Apple", "Google", "Samsung"] as const;

type FrozenArrayType = typeof frozenArray; // string[]
type ConstArrayType = typeof constArray;   // readonly ["Apple", "Google", "Samsung"]

// * OK
// regularArray.push('Microsoft')
// * Error (compilation) -> Property 'push' does not exist on type 'readonly string[]'.
// * Error (js runtime) -> TypeError: Cannot add property 3, object is not extensible.
// frozenArray.push('Microsoft')
// * Error (compilation) -> Property 'push' does not exist on type 'readonly ["Apple", "Google", "Samsung"]'.
// * OK (js runtime) -> No error (🤓 but if --noEmit flag is enabled in the tsconfig.json, the output file will not be generated).
// constArray.push('Microsoft')


console.log('regularArray', regularArray)
console.log('frozenArray', frozenArray)
console.log('constArray', constArray)