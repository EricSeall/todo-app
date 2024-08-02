interface Props {
  item: string;
  checked: boolean;
  handleCheck: Function;
}

export default function TodoItem(props: Props) {
  return (
    <>
      <div className="card">
        {props.checked ? (
          <div
            className="check-button-checked"
            onClick={() => props.handleCheck()}
          >
            <img className="checkmark" src="./images/icon-check.svg" />
          </div>
        ) : (
          <div
            className="check-button-unchecked"
            onClick={() => props.handleCheck()}
          ></div>
        )}
        <input
          className="item-input"
          type="text"
          defaultValue={props.item}
        ></input>
        <img className="cross" src="./images/icon-cross.svg" />
      </div>
    </>
  );
}
