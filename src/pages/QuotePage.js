import Quote from "../components/Quote/Quote";

const QuotePage = () => {
  return (
    <>
      <Quote
        size={"like-h6"}
        mode="italic"
        bordered={true}
        alignment={"to_left"}
        content={"Wise words from wise man"}
      />
    </>
  );
};
export default QuotePage;
