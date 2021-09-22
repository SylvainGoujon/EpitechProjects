export interface Coach {
    id?: number
    name: string,
    description: string,
    photo: string
}

export interface PartialCoach {
    id?: number
    name?: string,
    description?: string,
    photo?: string
}