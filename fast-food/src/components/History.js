import React, { useEffect, useState } from 'react';
import './History.css';

const History = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [message, setMessage] = useState(''); // Для отображения сообщения

  // Загружаем историю покупок из localStorage
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    setPurchaseHistory(storedHistory);
  }, []);

  // Функция для удаления истории покупок
  const handleDeleteHistory = () => {
    localStorage.removeItem('purchaseHistory'); // Удаляем историю из localStorage
    setPurchaseHistory([]); // Очищаем состояние
    setMessage('History deleted successfully!'); // Показываем сообщение
  };

  return (
    <div className="history">
      <h2>Purchase History</h2>

      {/* Сообщение об удалении */}
      {message && <p className="message">{message}</p>}

      {purchaseHistory.length === 0 ? (
        <p>No purchase history available.</p>
      ) : (
        <div>
          <button className="delete-history-button" onClick={handleDeleteHistory}>
            Delete History
          </button>

          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Total Price</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((purchase, index) => (
                <tr key={index}>
                  <td className="date">{purchase.date}</td>
                  <td className="total-price">${purchase.totalPrice}</td>
                  <td>
                    <ul>
                      {purchase.items.map((item, i) => (
                        <li key={i}>
                          <span>{item.name}</span> x{item.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default History;
