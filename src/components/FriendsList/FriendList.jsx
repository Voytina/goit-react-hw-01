import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendsList.module.css"


export default function FriendsList({ friends }) {


    return (
        <ul className={css.list}>
            {
                friends.map((value) => (
                    <li key={value.id} className={css.item}>
                        <FriendListItem data={value} />
                    </li>
                ))
            }
        </ul>

    )
}