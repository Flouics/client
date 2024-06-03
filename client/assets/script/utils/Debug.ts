export default class Debug {
    static tryObject(obj: any, errorString?: string) {
        try {
            if (!obj){
                throw new Error(errorString);
            }
        } catch (error) {
            throw new Error(errorString + "\n" + error)
        }
    }
}