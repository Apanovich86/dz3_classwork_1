const url1 = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = () => {
    return fetch(url2)
        .then(value => value.json())
}
const getPostOfUser = (id) => {
    return fetch(url1 + '/' + id +'/posts')
        .then(value => value.json())
}
export {getPosts, getPostOfUser}