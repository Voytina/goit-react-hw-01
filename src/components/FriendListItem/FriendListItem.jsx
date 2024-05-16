import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ data: { avatar, name, isOnline } }) {
    
    

    return (
        <div className={css.itemList}>
            <img src={avatar} alt="Avatar"  width="48"/>
            <p className={css.name}>{name}</p>
            <p className={
                clsx(css.status,
                isOnline === true ? css.online : css.offline    

            )}>{isOnline === true ? "Online" : 'Offline'}</p>
        </div>
    )
    



}