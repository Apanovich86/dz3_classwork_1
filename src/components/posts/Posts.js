import {useEffect, useState} from "react";
import {getPosts} from "../../services/user.fetch.service";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {
    let[posts, setPosts] = useState([]);
    let[post, setPost] = useState(null);
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);
    const chosePost = (p) => {
        setPost({...p})
    }
    return (
        <div className={'wrap'}>
            <div className={'posts-box'}>
                {
                    posts.map(value =>
                        <Post
                            key={value.id}
                            item={value}
                            chosePost={chosePost}
                        />
                    )
                }
            </div>
            {post && (<div className={'chosen-one'}>{JSON.stringify(post)}</div>)
            }
        </div>
    );
}