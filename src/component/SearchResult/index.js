import { useSongs } from "hooks/useSongs";
import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

const Loading = () => <span>Cargando...</span>;

const SearchResult = React.lazy(() => import("./SearchResult"));

export default function LazySearchResult() {
  let { keyword } = useParams();
  const { songs, loading, errorState } = useSongs({ keyword });

  return (
    <Suspense fallback={<Loading />}>
      {errorState.hasError && <span>{errorState.message}</span>}
      {loading && !errorState.hasError ? (
        <Loading />
      ) : (
        <SearchResult songs={songs} />
      )}
    </Suspense>
  );
}
