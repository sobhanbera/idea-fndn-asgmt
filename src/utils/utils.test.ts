import {getFilteresList} from './'

test('check utility function', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const newsData = await response.json()

    const filteresList = getFilteresList(newsData, 1)
    const errorFilteresList = getFilteresList([], 4) // for error handling

    // since we are getting 100 posts from the api, we are expecting at least 33 posts
    // in each category, since we divided the posts into 3 categories
    expect(filteresList.length).toBeGreaterThanOrEqual(33)
    expect(errorFilteresList.length).toBe(0)
})
