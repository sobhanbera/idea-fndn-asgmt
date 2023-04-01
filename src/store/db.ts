// currently this data is hard coded, but it could be fetched from an API
// from a database, or from a file
// here id is the number that regulates what news are shown
export const Categories = [
    {
        id: '1',
        name: 'Category 1',
        subcategories: [
            {
                id: '1', // this id is the number that regulates what news are shown
                name: 'Subcategory 1-1',
            },
        ],
    },
    {
        id: '2',
        name: 'Category 2',
        subcategories: [
            {
                id: '2',
                name: 'Subcategory 2-1',
            },
            {
                id: '3',
                name: 'Subcategory 2-2',
            },
        ],
    },
]
