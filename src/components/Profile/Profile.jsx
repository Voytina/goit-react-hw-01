import css from "./Profile.module.css"

export default function Profile({info: {username,tag,location,avatar,stats: {followers,views,likes}}}) {
    

    return (
        <div className={css.card}>
            <div className={css.imagebox}>
                <img src={avatar} alt="User avatar" className={css.image } />
                <p className={css.username}>{username }</p>
                <p className={css.tag}>{tag }</p>
                <p className={css.location}>{location }</p>
            </div>
            <ul className={css.list}>
                <li className={css.item}>
                    <span>Followers</span>
                    <span className={css.number}>{followers }</span>
                </li>
                <li className={css.item}>
                    <span>Views</span>
                    <span className={css.number}>{views }</span>
                </li>
                <li className={css.item}>
                    <span>Likes</span>
                    <span className={css.number}>{ likes}</span>
                </li>
            </ul>
       </div>
    )

}