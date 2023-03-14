import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Detail = () => {
    const { id } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:1000/articles/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>article cree</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>le nom de l'article est : <b>{empdata.nom}</b>  ({empdata.id})</h2>
                        <h3>Details de l'article</h3>
                        <h5>Categorie : {empdata.category}</h5>
                        <h5>description : {empdata.description}</h5>
                        <h5>contenue : {empdata.content}</h5>
                        <Link className="btn btn-danger" to="/">Retour au liste</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default Detail;