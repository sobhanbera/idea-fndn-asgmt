import {News} from '../store'

/**
 * filters the list of news according to the id
 * according to assignment, each news are separated by 3 ids
 *
 * @param list array of news fetched from the API
 * @param id id controller for the news list
 * @returns filtered list of news
 */
export function getFilteresList(list: News[], id: number): News[] {
    if (!list || list.length <= 0) return []

    let news: News[] = []
    let index: number = id

    for (let i = 0; i < list.length; i++) {
        if (list[i].id === index) {
            news.push(list[i])
            index += 3 // according to the assignment
        }
    }

    return news
}
