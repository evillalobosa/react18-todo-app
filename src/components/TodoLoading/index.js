import React from "react";
import ContentLoader from "react-content-loader";
import "./index.css";

const LoaderAnimation = (props) => {
  return (
    <ContentLoader
      speed={1}
      width={280}
      height={200}
      viewBox="0 0 280 200"
      backgroundColor="#ecebeb"
      foregroundColor="#2a9d8f"
      {...props}
    >
      <rect x="10" y="10" rx="5" ry="5" width="260" height="85" />
      <rect x="10" y="110" rx="5" ry="5" width="260" height="85" />
    </ContentLoader>
  );
};

function TodoLoading() {
  // {loading && <p className="loading">Cargando..</p>}

  return (
    <div className="loading">
      <LoaderAnimation />
    </div>
  );
}

export { TodoLoading };
