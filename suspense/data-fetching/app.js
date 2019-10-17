export default function App() {
  return (
    <div>
      <h1>Hello Suspense</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DataComponent />
      </Suspense>
    </div>
  );
}

function DataComponent() {
  const data = useAsyncData(fetchData);

  return <div>{data.title}</div>;
}

async function fetchData() {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
}
