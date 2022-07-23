import { useMemo } from "react"
import { IBeer } from "../modal/IBeer";


export const useSortedPosts = (posts: IBeer[], sort: string) => {
    const sortedposts: IBeer[] = useMemo(() => {
        return posts.filter(post => post.name.toLocaleLowerCase().includes(sort))
    }, [sort])
    if (sort == '') {
        return posts
    } else {
        return sortedposts;
    }



}