const frozenObject = Object.freeze({ a: 1, b: { c: 2 } })
const constObject = { a: 1, b: { c: 2 } } as const

type FrozenObjectType = typeof frozenObject; // { readonly a: 1; readonly b: { c: number; }; }
type ConstObjectType = typeof constObject;   // { readonly a: 1; readonly b: { readonly c: 2; }; }

const frozenObjectProperties = Object.getOwnPropertyDescriptors(frozenObject);
console.log('frozenObjectProperties', frozenObjectProperties)
// * ☝🏼 Output:
// frozenObjectProperties {
//     a: { value: 1, writable: false, enumerable: true, configurable: false },
//     b: {
//         value: { c: 2 },
//         writable: false,
//         enumerable: true,
//         configurable: false
//     }
// }

const constObjectProperties = Object.getOwnPropertyDescriptors(constObject);
console.log('constObjectProperties', constObjectProperties)
// * ☝🏼 Output:
// constObjectProperties {
//     a: { value: 1, writable: true, enumerable: true, configurable: true },
//     b: {
//         value: { c: 2 },
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// }

// * OK
frozenObject.b.c = 42
// * Error (compilation) -> Cannot assign to 'c' because it is a read-only property.
// * OK (js runtime) -> No error (🤓 but if --noEmit flag is enabled in the tsconfig.json, the output file will not be generated).
// constObject.b.c = 42

console.log('frozenObject', frozenObject)
console.log('constObject', constObject)