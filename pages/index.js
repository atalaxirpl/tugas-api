import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const getMovie = () => {
    fetch(`http://www.omdbapi.com/?apikey=366e9bad&s=${input}`)
      .then((response) => response.json())
      .then((hasil) => {
        setData(hasil.Search);
      });
  };

  return (
    <>
      <Head>
        <title>Moview</title>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h1>JEBS  Movie</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input value={input} onInput={(e) => setInput(e.target.value)} type="text" className="form-control input-key" placeholder="Cari Film..." />
              <button onClick={getMovie} className="btn btn-dark search-button" type="button">
                Cari
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {data &&
            data.map((movie, kye) => (
              <div className="col-md-3 my-3" key={kye}>
                <div className={`${styles.card} card`}>
                  <img src={movie.Poster} className={`${styles.img}card-img-top`} />
                  {/* <Image src={movie.Poster} className={`${styles.img}card-img-top`} alt="" width={300}  height={400}  /> */}
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{movie.Year}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}