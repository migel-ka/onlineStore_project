import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Sneaker } from "../type/sneaker";
import Loader from "../Loader";

const SneakerPage = () => {
  const params = useParams<{ id: string }>();
  const [sneakerData, setSneakerData] = useState<Sneaker | null>(null);

  useEffect(() => {
    const getData = async () => {
      if (!params.id) return;

      try {
        const req = await fetch(
          ` https://57ebb7d934c23933.mokky.dev/sneakers/${params.id}`
        );
        const data = await req.json();
        setSneakerData(data);
      } catch (e) {
        console.log("ERROR->", e);
      }
    };
    getData();
  }, [params.id]);

  return <div>{sneakerData ? <div>{sneakerData.title}</div> : <Loader />}</div>;
};

export default SneakerPage;
