import { useLocation } from "react-router-dom";

function DisputeDetails() {
    const location = useLocation();
    const { item } = location.state; // Access passed data
  
    return (
      <div>
        <h1>Details Page</h1>
        <p>ID: {item.id}</p>
        <p>Title: {item.title}</p>
        <p>Subtitle: {item.subtitle}</p>
        <p>Created: {item.created}</p>
        <p>Amount: {item.amount}</p>
        <p>Role: {item.role}</p>
        <p>Status: {item.status.primary}</p>
      </div>
    );
}

export default DisputeDetails