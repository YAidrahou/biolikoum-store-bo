export interface SizeContextType {
    sizes:any,
    error:any,
    loading:any,
    add: (rec:any,callbackDone:()=>void) => void,
    update: (rec:any,callbackDone:()=>void) => void,
    remove: (id:any,callbackDone:()=>void) => void
}