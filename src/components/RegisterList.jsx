function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}
function RegisterList({ items, onDelete, onEdit }) {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Ad Soyad</th>
          <th>Doğum Tarihi</th>
          <th>Kayıt Tarihi</th>
          <th>İşlem</th>
        </tr>
      </thead>
      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center">
              Kayıt bulunamadı
            </td>
          </tr>
        ) : (
          items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.fullName}</td>
              <td>{formatDate(item.birthDate)}</td>
              <td>{item.registerDate}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(item)}
                >
                  Düzenle
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(item.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default RegisterList;
