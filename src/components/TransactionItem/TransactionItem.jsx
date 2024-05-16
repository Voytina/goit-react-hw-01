import css from "./TransactionItem.module.css";

export default function TransactionItem({ item: { type, amount, currency } }) {
  return (
    <tr className={css.line}>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
}
