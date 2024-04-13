import "./Home.css";
import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import insta from "./img/insta.png";
import github from "./img/github.png";
import lkin from "./img/linkedin.png";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  return (
    <>
      <div className="container my-3">
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "70px" }}
        >
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <div className="row">
          {articles &&
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.description.slice(0, 120) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={page + 1 > Math.ceil(totalResults / `${props.pageSize}`)}
            type="button"
            className="btn btn-primary"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
        {/* footer */}
        <div className="footer">
          <div className="contain" style={{ transform: "translateY(0)" }}>
            <div className="left">
              <h3 style={{ fontWeight: "bold" }}>About News_waves</h3>
              <p className="content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident facere eius dolor minima delectus assumenda quaerat,
                reiciendis asperiores, ad veritatis illo. Debitis, aut
                explicabo. Nesciunt et quasi dolore natus ullam iusto obcaecati
                at sequi aliquid aut modi repudiandae hic deserunt eius dolores
                quo accusantium quod expedita quisquam inventore officiis
                soluta, molestias, harum sint. Soluta suscipit, aliquam, alias
                nihil eaque repellat odio placeat reiciendis dolorem odit,
                voluptate dolorum ipsum quis architecto quaerat cumque qui
                doloribus ea debitis distinctio quia voluptates. Temporibus
                obcaecati ea quo necessitatibus iusto neque non. Rerum, facere
                qui odio, odit et, ut laborum possimus dolorum cupiditate
                eligendi aperiam.
              </p>
            </div>
            <div className="right">
              <span style={{ fontWeight: "bold" }}>Popular Categories</span>{" "}
              <br />
              <Link to="/science" className="item">
                Science
              </Link>{" "}
              <br />
              <Link to="/sports" className="item">
                Sports
              </Link>{" "}
              <br />
              <Link to="/business" className="item">
                Buissness
              </Link>{" "}
              <br />
              <Link to="/technology" className="item">
                Tech
              </Link>{" "}
              <br />
              <Link to="/entertainment" className="item">
                Entertainment
              </Link>{" "}
              <br />
              <Link to="/health" className="item">
                Health
              </Link>{" "}
              <br />
              <div style={{ marginTop: "1rem" }}>
                <span style={{ fontWeight: "bold" }}>Follow me on</span> <br />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/abhi0561verma"
                  className="link"
                >
                  <img src={github} alt="github" className="icon mx-1" />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/abhishek-kumar-verma-342575213/"
                  className="link"
                >
                  <img src={lkin} alt="linkedIn" className="icon mx-1" />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="/kuch_nahi_abhi"
                  className="link"
                >
                  <img src={insta} alt="insta" className="icon mx-1" />
                </a>
              </div>
            </div>
          </div>
          <h6 style={{ textAlign: "center" }}>
            Designed by <a href="https://github.com/abhi0561verma">@Abhishek</a>
            . All copyright reserved
          </h6>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
