const LazyComponent = React.lazy(() => import("./lazy"));

export default function App() {
  return (
    <div>
      <h1>Hello Suspense</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
