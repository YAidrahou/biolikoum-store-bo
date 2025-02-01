export interface CategoryContextType {
    categories:any,
    errorOnCategories:any,
    loadingCategories:any,
    add: (rec:any,callbackDone:()=>void) => void,
    update: (rec:any,callbackDone:()=>void) => void,
    remove: (id:any,callbackDone:()=>void) => void
}