import TodoItem from "./TodoItem.tsx";

interface Props {
  items: object[];
  handleCheckItem: Function;
  handleDeleteItem: Function;
  handleClearList: Function;
  handleEditItem: Function;
  filter: string;
}

export default function ItemList(props: Props) {
  const visibleItems = props.items.filter((item) => {
    if (props.filter === "All") {
      return item === item;
    } else if (props.filter === "Active") {
      return item.checked === false;
    } else if (props.filter === "Completed") {
      return item.checked === true;
    }
  });

  return (
    <div className="item-list">
      {visibleItems.map((item, itemIndex) => {
        return (
          <TodoItem
            key={itemIndex}
            id={itemIndex}
            item={item}
            handleCheckItem={props.handleCheckItem}
            handleDeleteItem={props.handleDeleteItem}
            handleClearList={props.handleClearList}
            handleEditItem={props.handleEditItem}
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
