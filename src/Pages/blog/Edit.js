import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BlogEdit = () => {
    const { id } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:1000/blog/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            //idchange(resp.id);
            nomchange(resp.nom);
            categorychange(resp.category);
            descriptionchange(resp.description);
            contentchange(resp.content);
            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    //const[id,idchange]=useState("");
    const[nom,nomchange]=useState("");
    const[category,categorychange]=useState("");
    const[description,descriptionchange]=useState("");
    const[content,contentchange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,nom,category,description,content,active};
      

      fetch("http://localhost:1000/articles/"+id,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>
 <Link to="/blog" className="btn btn-secondary">Retour</Link>
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>articles Edit</h2>
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
                                        <input required value={nom} onMouseDown={e=>valchange(true)} onChange={e=>nomchange(e.target.value)} className="form-control"></input>
                                    {nom.length==0 && validation && <span className="text-danger">Enter the nom</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>category</label>
                                        <input value={category} onChange={e=>categorychange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>description</label>
                                        <input value={description} onChange={e=>descriptionchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                 <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>content</label>
                                        <input value={content} onChange={e=>contentchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                    <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label  className="form-check-label">Activer</label>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                      
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
 
export default BlogEdit;