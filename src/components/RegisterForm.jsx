import { useState, useEffect } from "react";

function RegisterForm({ onAdd, onUpdate, editingItem }) {
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  useEffect(() => {
    if (editingItem) {
      setFullName(editingItem.fullName);
      setBirthDate(editingItem.birthDate);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !birthDate) return;

    if (editingItem) {
      onUpdate(editingItem.id, fullName, birthDate);
    } else {
      onAdd(fullName, birthDate);
    }

    setFullName("");
    setBirthDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Ad Soyad"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <button className="btn btn-success w-100">
            {editingItem ? "Güncelle" : "Kaydet"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default RegisterForm;
