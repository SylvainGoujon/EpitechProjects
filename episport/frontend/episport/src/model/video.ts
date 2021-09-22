export interface Video {
    id?: number,
    title: string,
    link: string,
    coachId: number,
    categoryId: number
}

export interface PartialVideo {
    id?: number,
    title?: string,
    link?: string,
    coachId?: number,
    categoryId?: number
}