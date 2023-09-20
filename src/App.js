import React from "react"

export default function App() {

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    paswordConfirm: "",
    joinedNewsLetter:true
  })

    function handleChange(event){
      const{name, value, type, checked} = event.target
      setFormData(prevFormData => ({
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }))
    }
  
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm){
          console.log("Successfully singed up")
        } else {
          console.log("Password do not match")
          return 
        }

        if(formData.joinedNewLetter){
          console.log("Thanks for signing up for the our newsletter!")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="paswordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsLetter"
                        onChange={handleChange}
                        checked={formData.joinedNewLetter}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                    
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
