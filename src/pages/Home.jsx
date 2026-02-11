import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import RegisterList from "../components/RegisterList";
import { createRegisterItem } from "../interfaces/RegisterItem";

function Home() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const handleAdd = (fullName, birthDate) => {
    setItems([...items, createRegisterItem(fullName, birthDate)]);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleUpdate = (id, fullName, birthDate) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, fullName, birthDate }
          : item
      )
    );
    setEditingItem(null);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <RegisterForm
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          editingItem={editingItem}
        />
        <RegisterList
          items={items}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default Home;
