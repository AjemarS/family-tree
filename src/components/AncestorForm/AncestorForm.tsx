import React, { useState } from "react";
import { IAncestorFormData } from "../../types";
import "./AncestorForm.css";
import PhotoUploader from "./PhotoUploader";

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

  return (
    <form onSubmit={() => handleSubmit(formData)} className="ancestor-form">
      <h2 className="ancestor-form__title">Add Ancestor</h2>
      <div className="ancestor-form__content">
        <div className="ancestor-form__content__image">
          <PhotoUploader setImage={(value) => setFormData({ ...formData, ["image"]: value })} />
        </div>
        <div className="ancestor-form__content__fields">
          <div className="ancestor-form__content__field">
            <label className="ancestor-form__content__field--label">Name:</label>
            <input
              type="text"
              className="ancestor-form__content__field--input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="ancestor-form__content__field">
            <label className="ancestor-form__content__field--label">Gender:</label>
            <div>
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
          </div>
          <div className="ancestor-form__content__field">
            <label className="ancestor-form__content__field--label">Date of Birth:</label>
            <input
              className="ancestor-form__content__field--input"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="ancestor-form__content__field" id="expands">
        <label className="ancestor-form__content__field--label">Description:</label>
        <textarea
          className="ancestor-form__content__field--input"
          id="expands"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <button className="ancestor-form__btn--submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AncestorForm;
