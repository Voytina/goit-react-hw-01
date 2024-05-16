
import Profile from "../Profile/Profile"
import userData from "../../userData.json"
import friends from "../../friends.json"
import FriendsList from "../FriendsList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json"

export default function App() {


  
  

  return (
    <div>
      <Profile info={userData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions } />
    </div>
  )

}