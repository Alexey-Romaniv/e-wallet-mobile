import { Sum, TransactionComment, TransactionText, TransactionRow, TransactionData } from "./Transaction.styles";

export const Transaction = ({ info: { date, type, category, sum, wallet, comment } }) => {
    const [formattedDate,] = date.split("T");

    return (
        <>
            <TransactionRow>
                <TransactionData type={type}>
                    <TransactionText type={type}>Date:</TransactionText>
                    <TransactionText type={type}>{formattedDate}</TransactionText>
                </TransactionData>
                <TransactionData type={type}>
                    <TransactionText type={type}>Type:</TransactionText>
                    <TransactionText type={type}>{type}</TransactionText>
                </TransactionData>
                <TransactionData type={type}>
                    <TransactionText type={type}>Category:</TransactionText>
                    <TransactionText type={type}>{category ? category : 'Regular income'}</TransactionText>
                </TransactionData>
                <TransactionData type={type}>
                    <TransactionText type={type}>Comment:</TransactionText>
                        <TransactionComment>{comment ? comment : ''}</TransactionComment>
                </TransactionData>
                <TransactionData type={type}>
                    <TransactionText type={type}>Sum:</TransactionText>
                    <TransactionText type={type}><Sum type={type}>{sum.toFixed(2)}</Sum></TransactionText>
                </TransactionData>
                <TransactionData type={type}>
                    <TransactionText type={type}>Balance:</TransactionText>
                    <TransactionText type={type}>{wallet.toFixed(2)}</TransactionText>
                </TransactionData>
            </TransactionRow>
        </>
    );
};
