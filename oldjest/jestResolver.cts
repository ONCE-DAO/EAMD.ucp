// // ##IGNORE_TRANSFORMER##

// // const { OnceNodeImportLoader } from "../3_services/Once.interface.mjs";


// const resolverForTSJest = require("ts-jest-resolver");

// // import { ResolverOptions } from "ts-jest-resolver";

// // const resolverForTSJest = import("ts-jest-resolver");

// class JestResolver {
//     async async(specifier: string, options: import("ts-jest-resolver").ResolverOptions) {
//         if (specifier.startsWith("ior:")) {
//             try {
//                 if (ONCE.mode !== "NODE_LOADER") throw new Error("ONCE not loaded as Loader")
//                 // @ts-ignore
//                 let result = await (ONCE as OnceNodeImportLoader).resolve(specifier, { conditions: [], importAssertions: {}, parentURL: undefined }, (path: string) => { return { url: path } });
//                 return result.url;

//             } catch (e) {
//                 // All errors are ignored by Jest
//                 console.error(e);
//                 throw e;
//             }
//         }
//         else {
//             return resolverForTSJest(specifier, options);
//         }
//     }
// }
// let jestResolver = new JestResolver();
// // let x = { async: jestResolver.resolve };

// module.exports = jestResolver;
