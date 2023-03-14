import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Articles = () => {
    const[listeData, dataChange]=useState(null);
    const navigate = useNavigate();

    
     const LoadDetail = (id) => {
        navigate("/article/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/article/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Confirmer la suppression?')) {
            fetch("http://192.168.0.2:1000/articles/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Article supprimer avec success.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
    	fetch("http://192.168.0.2:1000/articles").then((res) =>{
           return res.json();

    	}).then((resp)=>{
          dataChange(resp);

    	}).catch((err) => {
    		console.log(err.message);
    	})
    }, [])

	return (
           <div className="container">
             <div className="card">
               <div className="card-title">
                <h2>Liste des Articles</h2>
               </div>

               <div className="card-body">
                 <div className="divbtn">
                   <Link to="create" className="btn btn-success">Ajouter</Link>
                 </div>
                 <table className="table table-bordered">
                  <thead className="bg-dark text-white">
                   <tr>
                      <td>id</td>
                      <td>Nom</td>
                      <td>Category</td>
                      <td>Description</td>
                      <td>Content</td>
                      <td>Action</td>
                   </tr>
                    
                  </thead>
                  <tbody>
                     {
                     	listeData && listeData.map(item=>(
                          <tr key={item.id}>
                           <td>{item.id}</td>
                           <td>{item.nom}</td>
                           <td>{item.category}</td>
                           <td>{item.description}</td>
                           <td>{item.content}</td>
                           <td>
                            <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Modifier</a>
                             <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Supprimer</a>
                             <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                             
                           </td>
                            
                          </tr>
                     	))
                     }
                  </tbody>
                 </table>
               </div>

             </div>
         
           </div>
		);
}

export default Articles;