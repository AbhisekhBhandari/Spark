import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function mutationErrorHandler<T>(data:T){
//     if(data?.error) throw new Error(data?.error)
//     return data;
// }]

// String.prototype.escapeSpecialChars = function () {
//   return this.replace(/\\/g, "\\\\")
//     .replace(/\n/g, "\\n")
//     .replace(/\r/g, "\\r")
//     .replace(/\t/g, "\\t")
//     .replace(/\f/g, "\\f")
//     .replace(/"/g, '\\"');
// };
