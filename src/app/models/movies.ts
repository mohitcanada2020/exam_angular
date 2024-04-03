export interface Movies{
    id: String,
    duration : String,
    budget: String,
    title: String,
    release_date: String
}

export interface MovieDetails{
    box_office: String,
    budget: String,
    cinematographers: String[],
    duration : String,
    id: String, 
    poster: String,
    producers : String[], 
    release_date:String,
    summary : String,
    title : String
}   