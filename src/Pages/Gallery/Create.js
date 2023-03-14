import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GalleryCreate = () => {
   
   const[id, idchange] = useState("");
   const[nom, nomchange] = useState("");
   const[category, categorychange] = useState("");
   const[description, descriptionchange] = useState("");
   const[content, contentchange] = useState("");
   const[active, activechange] = useState(true);
   const[validation,valchange]=useState(false);

   const navigate=useNavigate();

   const handlesubmit= (e) => {
     e.preventDefault();
     const updata={nom, category, description, content};
     
     
     fetch("http://localhost:1000/gallery", {
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(updata)
     }).then((res)=>{
       alert('image ajouter avec success')
       navigate('/');

     }).catch((err) =>{

      console.log(err.message)

     })

   }

   return (
      <div>
         <div className="row">
           <div className="offset-lg-3 col-lg-6">
             <form className="container" onSubmit={handlesubmit}>
               <div className="card" style={{"textAlign":"left"}}>
                 <div className="card-title">
                    <h2>Nouvelle image</h2>
                 </div>
                 <div className="card-body">
                   <div className="row">

                     <div className="col-lg-12">
                          <div className="form-group">
                            <label>ID</label>
                            <input value={id} disabled="disabled" className="form-control"></input>
                          </div>
                     </div>

                     <div className="col-lg-12">
                          <div className="form-group">
                            <label>nom</label>
                            <input required value={nom} onChange={e=>nomchange(e.target.value)} className="form-control"></input>
                          </div>
                     </div>

                     <div className="col-lg-12">
                          <div className="form-group">
                            <label>category</label>
                            <input required value={category} onChange={e=>categorychange(e.target.value)} className="form-control"></input>
                          </div>
                     </div>

                     <div className="col-lg-12">
                          <div className="form-group">
                            <label>description</label>
                            <input required value={description} onChange={e=>descriptionchange(e.target.value)} className="form-control"></input>
                          </div>
                     </div>

                     <div className="col-lg-12">
                          <div className="form-group">
                            <label>content</label>
                            <input type="file" required value={content} onChange={e=>contentchange(e.target.value)} className="form-control"></input>
                         
                          </div>
                     </div>

                     <div className="col-lg-12">
                          <div className="form-check">
                            <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                            <label>is Active</label>
                           
                          </div>
                     </div>

                     <div className="col-lg-12">
                          <div className="form-group">
                            <button className="btn btn-success" type="submit">Enregistrer</button>

                            <Link to="/Gallery" className="btn btn-danger">retour</Link>
                          </div>
                     </div>


                   </div>

                 </div>
                  
               </div>
             </form>
           </div>
         </div>
      </div>
   	);
}

export default GalleryCreate;