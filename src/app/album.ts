export class Album {
    constructor(
        public id: string,
        public ref: string,
        public name: string,
        public title: string,
        public description: string,
        public duration: number,
        public url?: string,
        public like?: string,
        public status?: string,
        public tags?: string[]
    ) { }
}

export type Status = "off" | "on"

export interface List {
    id: string,
    list: string[],
}