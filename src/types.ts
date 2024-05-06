export interface Overview {
    id?: string,
    network: string,
    user: string,
    audienceType: AudienceType,
    audience: number,
    today: number,
    isUp: boolean
}

export interface OverviewToDay {
    id?: string,
    network: string,
    statsType: string,
    stats: number,
    porcentage: number,
    isUp: boolean
}

export enum AudienceType {
    FOLLOWERS = "followers",
    SUBSCRIBERS = "subscribers"
}