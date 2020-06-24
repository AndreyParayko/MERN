import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    bio: "",
    status: "",
    githubusername: "",
    skills: "",
    youtube: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  });

  const [displaySocialInputs, toogleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };
  return (
    <Fragment>
      {" "}
      <h1 className='large text-primary'>Створіть свій профіль</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Заповніть поля щоб створити свій
        профіль!
      </p>
      <small>Поля із '*' обов'язкові</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={(e) => onChange(e)}>
            <option value='0'>* Оберіть професійний статус</option>
            <option value='Middle Розробник'>Middle Розробник</option>
            <option value='Junior Розробник'>Junior Розробник</option>
            <option value='Senior Розробник'>Senior Розробник</option>
            <option value='Менеджер'>Менеджер</option>
            <option value='Студент'>Студент</option>
            <option value='Викладач'>Викладач</option>
            <option value='Інтерн'>Інтерн</option>
            <option value=''>Інше</option>
          </select>
          <small className='form-text'>
            * Вкажіть де ви працюєте/навчаєтесь
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Компанія'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Може бути фірма, освітній заклад і т.д.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Сайт'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Особистий сайт чи сайт закладу</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Місцезнаходження'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Місто & Країна (Chernivtsi, UA)</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Навики'
            name='skills'
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Вкажіть навики через кому ( HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Github Username'
            name='githubusername'
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Ваш Github Username</small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Опис'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>Розкажіть трішки про себе</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toogleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-primary my-1'
          >
            Додайте посилання на соц. мережі
          </button>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
