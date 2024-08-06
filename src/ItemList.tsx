import TodoItem from "./TodoItem.tsx";
import { Item } from "./types.ts";

interface Props {
  items: Item[];
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

  function sortItems() {
    if (props.filter === "Active" || props.filter === "Completed") {
      return visibleItems;
    } else {
      const sortedItems = visibleItems.filter((item) => {
        return item.checked === false;
      });

      const completedItems = visibleItems.filter((item) => {
        return item.checked === true;
      });
      return sortedItems.concat(completedItems);
    }
  }

  return (
    <div className="item-list">
      {sortItems().map((item) => {
        return (
          <TodoItem
            key={item.id}
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
