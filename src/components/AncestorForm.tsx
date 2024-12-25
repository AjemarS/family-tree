import React, { useState } from "react";
import { IAncestorFormData } from "../types";

interface AncestorFormProps {
  handleSubmit: (formData: IAncestorFormData) => void;
}

const AncestorForm: React.FC<AncestorFormProps> = ({ handleSubmit }) => {
  const [formData, setFormData] = useState<IAncestorFormData>({
    name: "",
    gender: "male",
    dateOfBirth: "",
    description: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  return (
    <form onSubmit={() => handleSubmit(formData)} style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "20px" }}>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
      </div>
      <div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AncestorForm;
