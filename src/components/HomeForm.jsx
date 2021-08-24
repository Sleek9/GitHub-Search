import { useState } from "react";
import { Form } from "react-bootstrap";

const HomeForm = ({ handleSubmit }) => {
  const [search, setSearch] = useState(null);
  const handleChange = (e) => {
    if (e.target.value) {
      setSearch(e.target.value);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(search);
  };
  return (
    <div style={{ marginBottom: "30px" }}>
      <Form onSubmit={handleSubmitForm}>
        <Form.Control
          type="text"
          placeholder="Ingresa el usuario"
          className="bg-secundario"
          onChange={handleChange}
        />
      </Form>
    </div>
  );
};

export default HomeForm;
