import TodoItem from "./TodoItem.tsx";

interface Props {
  items: object[];
  handleCheckItem: Function;
  handleDeleteItem: Function;
  handleClearList: Function;
}

export default function ItemList(props: Props) {
  return (
    <div className="item-list">
      {props.items.map((item, itemIndex) => {
        return (
          <TodoItem
            key={itemIndex}
            id={itemIndex}
            item={item}
            handleCheckItem={props.handleCheckItem}
            handleDeleteItem={props.handleDeleteItem}
            handleClearList={props.handleClearList}
          />
        );
      })}
      <div className="list-footer">
        <p className="items-left">
          {props.items.length} item{props.items.length === 1 ? "" : "s"} left
        </p>
        <p>
          <a className="clear-button" onClick={() => props.handleClearList()}>
            Clear Completed
          </a>
        </p>
      </div>
    </div>
  );
}
