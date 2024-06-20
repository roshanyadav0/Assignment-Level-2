// import React, { useState, useEffect } from 'react';
import useForm from './useForm ';
import validate from './validate';

const JobApplicationForm = () => {
    const { handleChange, values, handleSubmit, errors, handleCheckboxChange } = useForm(validate);

    return (
        <div className="form-container">
        <h1>Job Application Form</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-field">
            <label>Full Name</label>
            <input
                type="text"
                name="fullName"
                value={values.fullName || ''}
                onChange={handleChange}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>
            
            <div className="form-field">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={values.email || ''}
                onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            </div>
            
            <div className="form-field">
            <label>Phone Number</label>
            <input
                type="number"
                name="phone"
                value={values.phone || ''}
                onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="form-field">
            <label>Applying for Position</label>
            <select name="position" value={values.position || ''} onChange={handleChange}>
                <option value="">Select Position</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
            </select>
            {errors.position && <p className="error">{errors.position}</p>}
            </div>
            
            {(values.position === 'Developer' || values.position === 'Designer') && (
            <div className="form-field">
                <label>Relevant Experience (years)</label>
                <input
                type="number"
                name="experience"
                value={values.experience || ''}
                onChange={handleChange}
                />
                {errors.experience && <p className="error">{errors.experience}</p>}
            </div>
            )}
            
            {values.position === 'Designer' && (
            <div className="form-field">
                <label>Portfolio URL</label>
                <input
                type="url"
                name="portfolio"
                value={values.portfolio || ''}
                onChange={handleChange}
                />
                {errors.portfolio && <p className="error">{errors.portfolio}</p>}
            </div>
            )}
            
            {values.position === 'Manager' && (
            <div className="form-field">
                <label>Management Experience</label>
                <textarea
                name="managementExperience"
                value={values.managementExperience || ''}
                onChange={handleChange}
                />
                {errors.managementExperience && <p className="error">{errors.managementExperience}</p>}
            </div>
            )}
            
            <div className="form-field">
            <label>Additional Skills</label>
            <div className="checkbox-group">
                {['JavaScript', 'CSS', 'Python'].map(skill => (
                <label key={skill}>
                    <input
                    type="checkbox"
                    name="skills"
                    value={skill}
                    checked={values.skills?.includes(skill) || false}
                    onChange={handleCheckboxChange}
                    />
                    {skill}
                </label>
                ))}
            </div>
            {errors.skills && <p className="error">{errors.skills}</p>}
            </div>
            
            <div className="form-field">
            <label>Preferred Interview Time</label>
            <input
                type="datetime-local"
                name="interviewTime"
                value={values.interviewTime || ''}
                onChange={handleChange}
            />
            {errors.interviewTime && <p className="error">{errors.interviewTime}</p>}
            </div>
            
            <button type="submit">Submit</button>
        </form>
        {values.submitted && (
            <div className="form-summary">
            <h2>Application Summary</h2>
            <p><strong>Full Name:</strong> {values.fullName}</p>
            <p><strong>Email:</strong> {values.email}</p>
            <p><strong>Phone Number:</strong> {values.phone}</p>
            <p><strong>Position Applied For:</strong> {values.position}</p>
            {values.position && (values.position === 'Developer' || values.position === 'Designer') && (
                <p><strong>Relevant Experience:</strong> {values.experience} years</p>
            )}
            {values.position === 'Designer' && (
                <p><strong>Portfolio URL:</strong> {values.portfolio}</p>
            )}
            {values.position === 'Manager' && (
                <p><strong>Management Experience:</strong> {values.managementExperience}</p>
            )}
            <p><strong>Additional Skills:</strong> {values.skills?.join(', ')}</p>
            <p><strong>Preferred Interview Time:</strong> {values.interviewTime}</p>
            </div>
        )}
        </div>
    );
};

export default JobApplicationForm;
