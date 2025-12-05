import { useParams } from "react-router-dom";

export default function HolidayDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">holiday Details Page</h1>
    </div>
  );
}
