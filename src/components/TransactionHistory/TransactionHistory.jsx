import TransactionItem from "../TransactionItem/TransactionItem";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.headtittle}>
          <th className={css.tittle}>Type</th>
          <th className={css.tittle}>Amount</th>
          <th className={css.tittle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((value) => (
          <TransactionItem item={value} key={value.id} />
        ))}
      </tbody>
    </table>
  );
}
