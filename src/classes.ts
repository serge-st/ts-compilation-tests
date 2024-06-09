class Test {
    static readonly a = 1
    static readonly obj = {
        a: 1,
        b: { c: 2 },
    }
    static readonly frozenObj = Object.freeze({
        a: 1,
        b: { c: 2 },
    })

    static readonly constObj = {
        a: 1,
        b: { c: 2 },
    } as const
}

// * Error (compilation) -> Cannot assign to 'a' because it is a read-only property.
// * OK (js runtime) -> No error (🤓 but if --noEmit flag is enabled in the tsconfig.json, the output file will not be generated).
// Test.a = 42
// console.log('readonly parameter', Test.a)

// * OK (compilation/js runtime) -> No Errors (expected behavior since readonly works as const, not allowing to re-assing but allowing mutability)
Test.obj.a = 42
// * OK (compilation/js runtime) -> No Errors (expected behavior since readonly works as const, not allowing to re-assing but allowing mutability)
Test.obj.b.c = 42
// console.log('readonly object parameter', Test.obj)

// * Error (compilation) -> Cannot assign to 'a' because it is a read-only property.
// * Error (js runtime) -> TypeError: Cannot assign to read only property 'a' of object '#<Object>'
// Test.frozenObj.a = 42
// * OK 😭 (compilation/js runtime) -> No Errors
// Test.frozenObj.b.c = 42
// console.log('readonly frozen object parameter', Test.frozenObj)

// * Error (compilation) -> Cannot assign to 'a' because it is a read-only property.
// * OK 😭 (js runtime) -> No Errors (🤓 but if --noEmit flag is enabled in the tsconfig.json, the output file will not be generated).
// Test.constObj.a = 42
// * Error (compilation) -> Cannot assign to 'c' because it is a read-only property.
// * OK 😭 (js runtime) -> No Errors (🤓 but if --noEmit flag is enabled in the tsconfig.json, the output file will not be generated).
// Test.constObj.b.c = 42

console.log('readonly const object parameter', Test.constObj)