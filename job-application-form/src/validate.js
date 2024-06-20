const validate = (values) => {
    let errors = {};
    
        if (!values.fullName) {
        errors.fullName = 'Full Name is required';
        }
    
        if (!values.email) {
        errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
        }
    
        if (!values.phone) {
        errors.phone = 'Phone Number is required';
        }
    
        if (!values.position) {
        errors.position = 'Position is required';
        }
    
        if ((values.position === 'Developer' || values.position === 'Designer') && (!values.experience || values.experience <= 0)) {
        errors.experience = 'Relevant experience is required and must be a positive number';
        }
    
        if (values.position === 'Designer' && !values.portfolio) {
        errors.portfolio = 'Portfolio URL is required';
        } else if (values.portfolio && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolio)) {
        errors.portfolio = 'Portfolio URL is invalid';
        }
    
        if (values.position === 'Manager' && !values.managementExperience) {
        errors.managementExperience = 'Management experience is required';
        }
    
        if (!values.skills || values.skills.length === 0) {
        errors.skills = 'At least one skill must be selected';
        }
    
        if (!values.interviewTime) {
        errors.interviewTime = 'Preferred interview time is required';
        }
    
        return errors;
  };
  
  export default validate;
  