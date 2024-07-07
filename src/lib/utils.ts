import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function chunkArray<T>(array: T[], size: number) {
  let result = [];
  for (let i = 0; i < array?.length; i += size) {
    let chunk = array?.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}

