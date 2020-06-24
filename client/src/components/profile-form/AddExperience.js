import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Додати роботу</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Додайте будь-які посади/позиції,
        які ви займали
      </p>
      <small>Поля із '*' обов'язкові</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Назва'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Компанія/заклад'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Місцезнаходження'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <h4>* Від</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{" "}
            Теперішня посада/позиція
          </p>
        </div>
        <div className='form-group'>
          <h4>До</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Опис'
            value={description}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary my-1'
          value='Підтвердити'
        />
        <Link className='btn btn-primary my-1' to='/dashboard'>
          Повернутись
        </Link>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
