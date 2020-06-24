import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";

const AddEEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Додайте свою освіту</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Додайте будь-який освітній заклад
        чи курси, які ви відвідували
      </p>
      <small>Поля із '*' обов'язкові</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Освітній заклад/курси'
            name='school'
            value={school}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Ступінь освіти/сертифікат'
            name='degree'
            value={degree}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Сфера навчання'
            name='fieldofstudy'
            value={fieldofstudy}
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
            Теперішня освіта
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

AddEEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEEducation);
