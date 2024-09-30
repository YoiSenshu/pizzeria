export interface Review {
    stars: number
}
export interface TextReview extends Review {
    username: string,
    content: string
}