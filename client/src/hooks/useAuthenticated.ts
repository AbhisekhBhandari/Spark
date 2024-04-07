import { getStorage } from "./use-local-storage";

export async function useAuthenticated(){
    const res = await getStorage('user');
    if (!res) return false
    return true;
}